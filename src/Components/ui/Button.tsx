// npm i class-variance-authority
import "@/styles/buttons.scss";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ClassType, FC } from "react";

export const buttonVariants = cva("button__default" /* more default classes for all buttons if needed*/, {
    variants: {
        variant: {
            black: "button__variant-black",
            white: "button__variant-white",
            transparent: "button__variant-transparent",
        },
        textSize: {
            small: "button__text-small",
            medium: "button__text-medium",
            large: "button__text-large",
        },
        whSize: {
            small: "button__wh-small",
            medium: "button__wh-medium",
            large: "button__wh-large",
        },
        border: {
            red: "button__border-red",
            green: "button__border-green",
            black: "button__border-black",
        },
    },
    defaultVariants: {
        variant: "white",
        textSize: "medium",
        whSize: "medium",
    },
});

// if you want standart button intellisence uncomment below
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}

const Button: FC<IButtonProps> = ({ variant, textSize, whSize, border, isLoading, className, children, ...props }) => {
    return (
        <button className={buttonVariants({ variant, textSize, whSize, border, className })} {...props}>
            {isLoading ? "Loading..." : null}
            {children}
        </button>
    );
};

export default Button;
