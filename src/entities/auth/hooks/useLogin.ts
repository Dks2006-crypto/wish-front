"use client"

import { z } from "zod";
import { useForm } from "react-hook-form";
import {useRouter} from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema} from "@/entities/auth/schemas/auth.schema";
import { login as loginService } from "@/services/auth.service";
import {APP_ROUTE} from "@/lib/routes/app.route";

export const useLogin = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        try {
            await loginService(data);
            router.push(APP_ROUTE.home());
        } catch (error) {
            console.error(error);
        }
    };
    return { register, handleSubmit, onSubmit, errors, isSubmitting };
};