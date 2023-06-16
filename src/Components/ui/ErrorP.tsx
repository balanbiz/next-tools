import { FC } from "react";

interface IerrorPProps {
    text: string;
}

const ErrorP: FC<IerrorPProps> = ({ text }) => {
    return <p style={{ color: "red" }}>{text}</p>;
};

export default ErrorP;
