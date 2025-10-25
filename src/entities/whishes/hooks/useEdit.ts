import {useEffect, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {createWhichSchema} from "@/entities/whishes/schemas/whishes.schema";
import {Whish} from "@/entities/whishes";
import {useRouter} from "next/navigation";
import {getOne, update} from "@/services/whishes.service";
import {APP_ROUTE} from "@/lib/routes/app.route";
import {useForm} from "react-hook-form";
import {z} from "zod";

export const useEdit = (id: string) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [wish, setWish] = useState<Whish | null>(null);

    const { register, handleSubmit, formState: {errors}, watch, reset } = useForm({
        resolver: zodResolver(createWhichSchema),
    });

    useEffect(() => {
        const fetchWish = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const wishData = await getOne(id);
                setWish(wishData);

                reset({
                    title: wishData.title,
                    description: wishData.description || '',
                    link: wishData.link || '',
                    priority: wishData.priority,
                    completed: wishData.completed ? 'true' : 'false',
                });
            } catch (error) {
                console.error('Error fetching wish:', error);
                setError('Ошибка загрузки данных');
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchWish();
        }
    }, [id, reset]);

    const onSubmit = async (data: z.infer<typeof createWhichSchema>) => {
        try {
            setIsSubmitting(true);
            setError(null);

            console.log('Submitting data:', data);
            await update(id, data);
            router.push(APP_ROUTE.whishes.index());
            router.refresh();
        } catch (error) {
            console.error('Error updating wish:', error);
            setError('Ошибка при сохранении изменений');
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        isLoading,
        isSubmitting,
        error,
        wish,
        watch
    }
}