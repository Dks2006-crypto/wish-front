import Link from "next/link";
import React from "react";
import {IMenu} from "@/widgets/header/module/header.interface";

interface Props {
    data: IMenu[];
    className?: string;
}

export const AuthUi: React.FC<Props> = ({ data, className }) => {
    return(
        <div className={`${className} `}>
            <ul className="flex items-center gap-x-4">
                {data.map((item, index) => (
                    <li key={index} className="">
                        <Link className=" text-center text-white font-medium  transition-all hover:text-blue-400" href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}