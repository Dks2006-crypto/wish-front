import React from "react";
import Image from "next/image";
import LoginBg from "../../../../public/statics/gradient.png";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {APP_ROUTE} from "@/lib/routes/app.route";

interface Props {
    className?: string;
    loginUrl?: string;
    label?: string;

}

export const RegisterFormUi: React.FC<Props> = ({ className, loginUrl, label = 'Заголовок' }) => {
    return (
        <div className={`${className} flex items-stretch flex-col sm:flex-row overflow-hidden bg-zinc-800 rounded-lg`}>
            <div className="flex-1 self-stretch " id="form-bg">
                <Image className="w-full h-full object-cover" src={LoginBg} alt={"Форма регистрации"} />
            </div>
            <form className="p-5 flex-1 grid gap-y-4">
                <div className="items-center sm:text-3xl text-xl text-white font-medium " id='form-headering'>{label}</div>
                <div className="w-full grid gap-y-2" id="form-group-1">
                    <Label htmlFor="name">Имя</Label>
                    <Input type="text" id="name" placeholder="mama" />
                </div>
                <div className="w-full grid gap-y-2" id="form-group-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input type="email" id="email" placeholder="user@mamyebal" />
                </div>
                <div className="w-full grid gap-y-2" id="form-group-3">
                    <Label htmlFor="password">Пароль</Label>
                    <Input type="password" id="password" placeholder="вввединетете парпоапро" />
                </div>
                <div className="pt-5 w-full grid gap-y-4" id="form-group-4">
                    <button className="px-3 h-12 font-medium text-gray-500 bg-gray-100 rounded-full cursor-pointer">Регистрация</button>
                    <Link href={String(loginUrl)} className="text-gray-400 transition-colors hover:text-white">Войти</Link>
                </div>
            </form>
        </div>
    );
}