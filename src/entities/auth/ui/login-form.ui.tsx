import React from "react";
import {Label} from "@/components/ui/label";

interface Props {
    className?: string;
}

export const loginFormUi:React.FC <Props> = ({className}) => {
    return(
        <div className={` ${className} p-5 w-full bg-gray-950 rounded-lg`}>
            <div className="">

            </div>
            <form className='w-full max-w-[340px] grid gap-y-4'>
                <div className='w-full grid gap-y-2' id='form-group-1'>
                    <Label htmlFor='email'>E-mail</Label>
                    <input type='email' id='email' className='h-12 px-3.5 border rounded-full border-zinc-600 ' placeholder='aaaa.ry'/>
                </div>
                <div className='w-full grid gap-y-2' id='form-group-2'>
                    <Label htmlFor='password'>Password</Label>
                    <input type='password' id='password' className='h-12 px-3.5 border rounded-full border-zinc-600 ' placeholder='password'/>
                </div>
            </form>
        </div>
    );
}