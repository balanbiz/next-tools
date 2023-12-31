"use client";
// import for forms - npm i @hookform/resolvers zod react-hook-form
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const homeFormSchema = z.object({
    username: z
        .string()
        .min(4, { message: "The username must be 4 characters or more" })
        .max(10, { message: "The username must be 10 characters or less" })
        .regex(/^[a-zA-Z0-9_]+$/, "The username must contain only letters, numbers and underscore (_)"),
    email: z.string().email({ message: "Invalid email. Please enter a valid email address" }),
    isAdmin: z.boolean().refine(val => val === true, {
        message: "Value must be true",
    }),
    // The coerce method lets you transform or modify the user input before it's validated against the schema. In this case, it converts the date string to a Date object by passing the input through new Date(input).
    createdAt: z.coerce
        .date()
        .min(new Date(1920, 0, 1), {
            message: "Date cannot go past January 1 1920",
        })
        .max(new Date(), { message: "Date must be in the past" })
        .refine(
            date => {
                const ageDifMs = Date.now() - date.getTime();
                const ageDate = new Date(ageDifMs);

                const age = Math.abs(ageDate.getUTCFullYear() - 1970);

                return age >= 18;
            },
            { message: "You must be 18 years or older" }
        ),
});

export type IHomeForm = z.infer<typeof homeFormSchema>;

export default function useHomeForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IHomeForm>({
        resolver: zodResolver(homeFormSchema),
        defaultValues: {
            username: "",
            email: "",
            isAdmin: true,
            createdAt: new Date(),
        },
    });
    return { register, handleSubmit, errors };
}
