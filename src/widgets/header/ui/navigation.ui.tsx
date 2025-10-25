import React from "react";
import Link from "next/link";
import {IMenu} from "@/widgets/header";

interface Props {
    data: IMenu[];
    className?: string;
}

//Компонент навигации
export const NavigationUi: React.FC<Props> = ({ data = [], className }) => {

    return (
        <nav className={`${className} `}>
            <menu className="flex items-center gap-x-4">
                {data.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href} className="text-center text-white/60 font-medium uppercase transition-all hover:text-white">{item.label}</Link>
                    </li>
                ))}
            </menu>
        </nav>
    );
};