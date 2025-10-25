"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { remove } from "@/services/whishes.service";
import { APP_ROUTE } from "@/lib/routes/app.route";

export const useDelete = () => {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteWish = async (id: string) => {
        try {
            setIsDeleting(true);
            setError(null);

            await remove(id);
            router.push(APP_ROUTE.whishes.index());
            router.refresh();
        } catch (err) {
            console.error('Error deleting wish:', err);
            setError('Ошибка при удалении желания');
            throw err;
        } finally {
            setIsDeleting(false);
        }
    };

    const confirmDelete = (id: string, title: string) => {
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