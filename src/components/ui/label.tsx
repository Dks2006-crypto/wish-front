import React from "react";

interface Props {
    className?: string;
    htmlFor?: string;
    children?: React.ReactNode;
}

export const Label: React.FC<Props> = ({className, htmlFor, children }) => {
    return <label htmlFor={String(htmlFor)} className={`${className} text-zinc-400 font-medium`}>{children}</label>
}