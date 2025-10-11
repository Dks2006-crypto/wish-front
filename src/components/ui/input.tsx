import React from "react";

interface Props {
    type?: "text" | "password" | "email" | "number" | "search";
    placeholder?: string | "";
    className?: string;
    id?: string;
    ref?: React.Ref<HTMLInputElement>;
}

export const Input: React.FC<Props> = React.forwardRef(({ type, placeholder = "", className, id, ...props }, ref) => {
    return (
        <input
            type={String(type)}
            placeholder={String(placeholder)}
            className={`${className} px-3.5 h-12 border border-zinc-600 rounded-full outline-white`}
            id={String(id)}
            ref={ref}
            {...props}
        />
    );
});

Input.displayName = "Input";