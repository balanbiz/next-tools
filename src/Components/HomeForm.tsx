"use client";
import useHomeForm, { IHomeForm } from "@/hooks/useHomeForm";
import ErrorP from "./ui/ErrorP";
import { FC, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postResourse } from "@/lib/fetch";
import { SubmitHandler } from "react-hook-form";

interface IHomeFormProps {}

const HomeForm: FC<IHomeFormProps> = ({}) => {
    const { register, handleSubmit, errors } = useHomeForm();

    // standart way without TanStack react-query
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fetchError, setFetchError] = useState<string | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setFetchError(null);
        }, 4000);
    }, [fetchError]);

    const onSubmit: SubmitHandler<IHomeForm> = async data => {
        setIsLoading(true);
        postResourse("/api/add-user", data)
            .then(() => console.log(1))
            .catch(err => setFetchError(err.message))
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div>
            <p>Only hook form HomeForm.tsx</p>
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
                <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
                {fetchError}
            </form>
        </div>
    );
};

export default HomeForm;
