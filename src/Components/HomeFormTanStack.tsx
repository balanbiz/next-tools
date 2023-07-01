"use client";
import useHomeForm, { IHomeForm } from "@/hooks/useHomeForm";
import ErrorP from "./ui/ErrorP";
import { FC, Fragment } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postResourse } from "@/lib/fetch";
import { SubmitHandler } from "react-hook-form";
import useUsersQuery from "@/hooks/useUsersQuery";
import SkeletonExample from "./SkeletonExample";

interface IHomeFormProps {}

const HomeForm: FC<IHomeFormProps> = ({}) => {
    const { register, handleSubmit, errors } = useHomeForm();
    const client = useQueryClient();

    // Loading initial datas
    const { data, isLoading, isSuccess } = useUsersQuery();

    // Adding new data on submit
    const { mutate: addUser } = useMutation({
        mutationFn: (data: IHomeForm) => {
            return postResourse("/api/add-user", data);
        },
        /*  If we want invalidate data by fetching again
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["users"] });
        }, */

        // if we do not wont to send a query again to get data, instead we will change client data.
        onSuccess: newUser => {
            client.setQueryData<IHomeUser[]>(["users"], oldUsers => {
                return [...(oldUsers || []), newUser];
            });
            client.invalidateQueries({
                queryKey: ["users"],
                refetchType: "none",
            });
        },
    });

    const { mutate: delUser } = useMutation({
        mutationFn: (id: number) => {
            console.log(id);
            return postResourse("/api/delete-user", id);
        },
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["users"] });
        },
    });

    const onSubmit: SubmitHandler<IHomeForm> = data => addUser(data);
    return (
        <div>
            <p>With tanStack HomeFormTanStack.tsx</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" {...register("username")} />
                    {errors?.username?.message && <ErrorP text={errors.username.message} />}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" {...register("email")} />
                    {errors?.email?.message && <ErrorP text={errors.email.message} />}
                </div>

                <div>
                    <label htmlFor="isAdmin">IsAdmin</label>
                    <input id="isAdmin" type="checkbox" {...register("isAdmin")} />
                    {errors?.isAdmin?.message && <ErrorP text={errors.isAdmin.message} />}
                </div>

                <div>
                    <label htmlFor="createdAt">Creation Date</label>
                    <input id="createdAt" type="date" {...register("createdAt")} />
                    {errors?.createdAt?.message && <ErrorP text={errors.createdAt.message} />}
                </div>
                <button type="submit"> "Submit"</button>
                {isLoading ? (
                    <SkeletonExample />
                ) : (
                    isSuccess && (
                        <div className="form-data">
                            {data.map((user, index) => (
                                <Fragment key={index}>
                                    <span onClick={() => delUser(user.id)}>Delete user</span> <p>{JSON.stringify(user)}</p>
                                </Fragment>
                            ))}
                        </div>
                    )
                )}
            </form>
        </div>
    );
};

export default HomeForm;
