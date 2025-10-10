import React from "react";

interface Props {
    placeholder?: string;
    className?: string;
    type?: "text" | "password" | "email" | "number" | "search";
    id?: string;
}

export const Input: React.FC<Props> = ({ placeholder="", className, type, id }) => {
    return <input
        type={String(type)}
        className={`${className} px-3.5 h-12 border border-zinc-600 rounded-full outline-white`}
        id={String(id)}
        placeholder={String(placeholder)}/>
}