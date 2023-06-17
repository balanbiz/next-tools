"use client";

import { FC, ReactNode } from "react";

interface IProvidersProps {
    children: ReactNode;
}

const Providers: FC<IProvidersProps> = ({ children }) => {
    return <>{children}</>;
};

export default Providers;
