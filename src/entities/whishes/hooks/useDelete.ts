"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { remove } from "@/services/whishes.service";
import { APP_ROUTE } from "@/lib/routes/app.route";

//хук для удаления желания

export const useDelete = () => {
    const router = useRouter();

    //Состояние удаления
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteWish = async (id: string) => {
        try {
            //Начало удаления
            setIsDeleting(true);
            setError(null);

            //Вызов сервиса для удаления
            await remove(id);

            //Перенаправление на страницу всех желаний
            router.push(APP_ROUTE.whishes.index());

            //Обновление данных на странице
            router.refresh();
        } catch (err) {
            //Обработка ошибок
            console.error('Error deleting wish:', err);
            setError('Ошибка при удалении желания');
            throw err;
        } finally {
            setIsDeleting(false);
        }
    };

    const confirmDelete = (id: string, title: string) => {
        //Подтверждение удаления
        if (window.confirm(`Вы уверены, что хотите удалить желание "${title}"?`)) {
            return deleteWish(id);
        }
        return Promise.resolve();
    };

    return {
        deleteWish: confirmDelete,
        isDeleting,
        error
    };
};