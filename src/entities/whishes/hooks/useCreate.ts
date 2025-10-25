"use client"
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {APP_ROUTE} from "@/lib/routes/app.route";
import {createWhichSchema} from "@/entities/whishes/schemas/whishes.schema";
import { create as createService} from "@/services/whishes.service";

//Хук создания желания

export const useCreate = () => {


    const router = useRouter();

    //Валидация через Zod
    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({
        resolver:zodResolver(createWhichSchema),
    });

    //Обработчик отправки формы
    const onSubmit = async (data:z.infer<typeof createWhichSchema>) => {
        try {

            //Вызов сервиса для создания желания
            await createService(data);
            router.push(APP_ROUTE.whishes.index());
        } catch (e) {

            //Вывод ошибки
            console.error(e);
        }

    }
    return {register, handleSubmit, errors, isSubmitting, onSubmit}
}