"use client"
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createTaskSchema} from "@/entities/todo/schemas/todo.schema";
import {z} from "zod";
import { create as createService} from "@/services/tasks.service";
import {APP_ROUTE} from "@/lib/routes/app.route";


export const useCreate = () => {


    const router = useRouter();
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver:zodResolver(createTaskSchema),
    });

    const onSubmit = async (data:z.infer<typeof createTaskSchema>) => {
        try {
            await createService(data);
            router.push(APP_ROUTE.tasks.index());
        } catch (e) {
            console.error(e);
        }

    }
    return {register, handleSubmit,errors, onSubmit}
}