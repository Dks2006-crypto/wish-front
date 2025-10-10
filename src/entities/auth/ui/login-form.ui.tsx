import React from "react";
import {Label} from "@/components/ui/label";
import Image from "next/image";

import LoginBg from '../../../../public/statics/gradient.png'

interface Props {
    className?: string;
}

export const loginFormUi:React.FC <Props> = ({className}) => {
    return(
        <div className={` ${className} flex w-full items-center overflow-hidden bg-gray-800 rounded-lg`}>
            <div id='form-bg' className=" flex-1">
                <Image src={LoginBg} alt={'Авторизация'} />
            </div>
            <form className='p-5 flex-1 grid gap-y-4'>
                <div className='w-full grid gap-y-2' id='form-group-1'>
                    <Label htmlFor='email'>E-mail</Label>
                    <input type='email' id='email' className='h-12 px-3.5 border rounded-full border-zinc-600 ' placeholder='aaaa.ry'/>
                </div>
                <div className='w-full grid gap-y-2' id='form-group-2'>
                    <Label htmlFor='password'>Password</Label>
                    <input type='password' id='password' className='h-12 px-3.5 border rounded-full border-zinc-600 ' placeholder='password'/>
                </div>
                <div className="w-full grid gap-y-2" id='form-group-3'>
                    <button className="bg-gray-100 font-medium text-zinc-500 px-3 h-12 rounded-full cursor-pointer">Войти</button>
                </div>
            </form>
        </div>
    );
}