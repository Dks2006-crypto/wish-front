"use client";
import React from "react";
import Image from "next/image";
import LoginBg from "../../../../public/statics/gradient.png";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";

import {useRegister} from "@/entities/auth/hooks/useRegister";

interface Props {
    className?: string;
    loginUrl?: string;
    label?: string;

}

export const RegisterFormUi: React.FC<Props> = ({ className, loginUrl, label = 'Заголовок' }) => {
    const {register, handleSubmit, onSubmit, errors, isSubmitting} = useRegister()
    return (
        <div className={`${className} flex items-stretch flex-col sm:flex-row overflow-hidden bg-zinc-800 rounded-lg`}>
            <div className="flex-1 self-stretch " id="form-bg">
                <Image className="w-full h-full object-cover" src={LoginBg} alt={"Форма регистрации"} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5 flex-1 grid gap-y-4">
                <div className="items-center sm:text-3xl text-xl text-white font-medium " id='form-headering'>{label}</div>
                <div className="w-full grid gap-y-2" id="form-group-1">
                    <Label htmlFor="email">E-mail</Label>
                    <Input {...register('email')} type="email" id="email" placeholder="user@mamyebal" />
                    {errors.email && (
                        <span className="text-red-600">{errors.email.message}</span>
                    )}
                </div>
                <div className="w-full grid gap-y-2" id="form-group-2">
                    <Label htmlFor="surName">Фамилия</Label>
                    <Input {...register('surName')} type="text" id="surName" placeholder="Введите фамилию" />
                    {errors.surName && (
                        <span className="text-red-600">{errors.surName.message}</span>
                    )}
                </div>
                <div className="w-full grid gap-y-2" id="form-group-3">
                    <Label htmlFor="name">Имя</Label>
                    <Input {...register('name')} type="text" id="name" placeholder="Ваше имя" />
                    {errors.name && (
                        <span className="text-red-600">{errors.name.message}</span>
                    )}
                </div>
                <div className="w-full grid gap-y-2" id="form-group-5">
                    <Label htmlFor="password">Пароль</Label>
                    <Input {...register('password')} type="password" id="password" placeholder="Введите пароль" />
                    {errors.password && (
                        <span className="text-red-600">{errors.password.message}</span>
                    )}
                </div>
                <div className="pt-5 w-full grid gap-y-4" id="form-group-4">
                    <button className="px-3 h-12 font-medium text-gray-500 bg-gray-100 rounded-full cursor-pointer">{isSubmitting ? "Ожидайте" : "Регистрация"}</button>
                    <Link href={String(loginUrl)} className="text-gray-400 transition-colors hover:text-white">Войти</Link>
                </div>
            </form>
        </div>
    );
}