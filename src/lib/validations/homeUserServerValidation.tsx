import { z } from "zod";

// We cannot take standart validation object from client component to server, so there is a copy of Zod object. Plus we can customize it if needed
export const homeUserServerValidation = z.object({
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
