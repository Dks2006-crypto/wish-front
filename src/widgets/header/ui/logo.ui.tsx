import React from "react";

interface Props {
    name?: string;
    className?: string;
}

export const LogoUi: React.FC<Props> = ({ name = "Название сайта", className }) => {
    return (
        <div className={`${className} `}>
            <span className="text-xl sm:text-xl font-semibold text-white">{String(name)}</span>
        </div>
    );
};