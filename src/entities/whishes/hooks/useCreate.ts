"use client"
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {APP_ROUTE} from "@/lib/routes/app.route";
import {createWhichSchema} from "@/entities/whishes/schemas/whishes.schema";
import { create as createService} from "@/services/whishes.service";


export const useCreate = () => {


    const router = useRouter();
    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({
        resolver:zodResolver(createWhichSchema),
    });

    const onSubmit = async (data:z.infer<typeof createWhichSchema>) => {
        try {
            await createService(data);
            router.push(APP_ROUTE.whishes.index());
        } catch (e) {
            console.error(e);
        }

    }
    return {register, handleSubmit, errors, isSubmitting, onSubmit}
}