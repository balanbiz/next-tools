"use client";
import homeForm from "@/lib/homeForm";
import ErrorP from "./ui/errorP";
import { FC } from "react";

interface IHomeFormProps {}

const HomeForm: FC<IHomeFormProps> = ({}) => {
    const { register, handleSubmit, errors } = homeForm();

    return (
        <form onSubmit={handleSubmit(d => console.log(d))}>
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
            </div>

            <div>
                <label htmlFor="createdAt">Creation Date</label>
                <input id="createdAt" type="date" {...register("createdAt")} />
                {errors?.createdAt?.message && <ErrorP text={errors.createdAt.message} />}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default HomeForm;
