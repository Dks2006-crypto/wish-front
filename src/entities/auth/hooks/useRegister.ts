"use client"

import { z } from "zod";
import { useForm } from "react-hook-form";
import {useRouter} from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema} from "@/entities/auth/schemas/auth.schema";
import { register as registerService } from "@/services/auth.service";
import {APP_ROUTE} from "@/lib/routes/app.route";

export const useRegister = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: z.infer<typeof registerSchema>) => {
        try {
            await registerService(data);
            router.push(APP_ROUTE.home());
        } catch (error) {
            console.error(error);
        }
    };
    return { register, handleSubmit, onSubmit, errors, isSubmitting };
};