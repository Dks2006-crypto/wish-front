"use client"
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEdit } from "@/entities/whishes/hooks/useEdit";
import { useDelete } from "@/entities/whishes/hooks/useDelete";

//Редактирование желания

interface Props {
    id: string;
    label?: string;
    className?: string;
}

export const EditFormUi: React.FC<Props> = ({ id, label = "Редактирование желания", className }) => {

    {/* Вызов хука для редактирования желания */}
    const { register, handleSubmit, errors, onSubmit, isLoading, isSubmitting, error, wish } = useEdit(id);

    {/* Вызов хука для удаления желания */}
    const { deleteWish, isDeleting } = useDelete();

    {/* Обработчик удаления желания */}
    const handleDelete = async () => {
        if (wish) {
            try {
                await deleteWish(id, wish.title);
            } catch (error) {
                console.error('Delete error:', error);
            }
        }
    };

    {/* Состояние загрузки */}
    if (isLoading) {
        return (
            <div className={`${className} p-5 sm:p-10 w-full bg-zinc-800 rounded-lg`}>
                <div className="text-center text-xl sm:text-2xl font-medium text-white">Загрузка...</div>
            </div>
        );
    }

    return (
        <div className={`${className} p-5 sm:p-10 w-full bg-zinc-800 rounded-lg`}>

            {/* Заголовок формы */}
            <div className="text-center text-xl sm:text-2xl font-medium text-white">{label}</div>

            {/* Отображение ошибки */}
            {error && (
                <div className="mb-4 p-3 bg-red-500 text-white rounded-lg text-center">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Поле статуса */}
                <div className="w-full grid gap-y-2">
                    <Label className="text-white">Статус</Label>
                    <div className="flex items-center space-x-4">
                        {/* Выбор активности */}
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                value="false"
                                {...register('completed')}
                                className="text-blue-500 focus:ring-blue-500"
                            />
                            <span className="text-white">Активно</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                value="true"
                                {...register('completed')}
                                className="text-green-500 focus:ring-green-500"
                            />
                            <span className="text-white">Куплено</span>
                        </label>
                    </div>

                    {/* Отображение ошибки */}
                    {errors.completed && (
                        <span className="text-red-500">{errors.completed.message}</span>
                    )}
                </div>

                <div className="w-full grid gap-y-2">
                    {/* Ввод заголовка */}
                    <Label className="text-white">Название желания</Label>
                    <Input
                        {...register('title')}
                        type="text"
                        placeholder="Купить хлеб"
                        className="bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400"
                        disabled={isSubmitting}
                    />

                    {/* Отображение ошибки */}
                    {errors.title && (
                        <span className="text-red-500">{errors.title.message}</span>
                    )}
                </div>

                <div className="w-full grid gap-y-2">

                    {/* Ввод описания */}
                    <Label className="text-white">Описание</Label>
                    <Input
                        {...register('description')}
                        type="text"
                        placeholder="Нужно купить хлеб для борща"
                        className="bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400"
                        disabled={isSubmitting}
                    />

                    {/* Отображение ошибки */}
                    {errors.description && (
                        <span className="text-red-500">{errors.description.message}</span>
                    )}
                </div>

                <div className="w-full grid gap-y-2">
                    {/* Ввод ссылки */}
                    <Label className="text-white">Ссылка</Label>
                    <Input
                        {...register('link')}
                        type="text"
                        placeholder="https://example.com/product"
                        className="bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400"
                        disabled={isSubmitting}
                    />

                    {/* Отображение ошибки */}
                    {errors.link && (
                        <span className="text-red-500">{errors.link.message}</span>
                    )}
                </div>

                <div className="w-full grid gap-y-2">

                    {/* Выбор приоритета */}
                    <Label className="text-white">Приоритет</Label>
                    <select
                        {...register('priority')}
                        className="flex h-10 w-full rounded-md border border-zinc-600 bg-zinc-700 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isSubmitting}
                    >
                        <option value="">Выберите приоритет</option>
                        <option value="LOW">Низкий</option>
                        <option value="MEDIUM">Средний</option>
                        <option value="HIGH">Высокий</option>
                    </select>

                    {/* Отображение ошибки */}
                    {errors.priority && (
                        <span className="text-red-500">{errors.priority.message}</span>
                    )}
                </div>

                <div className="flex gap-3">

                    {/* Кнопка сохранения изменений */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-3 h-12 font-medium text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 rounded-lg cursor-pointer transition-colors"
                    >
                        {isSubmitting ? 'Сохранение...' : 'Сохранить изменения'}
                    </button>

                    {/* Кнопка удаления желания */}
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="flex-1 px-3 h-12 font-medium text-white bg-red-500 hover:bg-red-600 disabled:bg-red-300 rounded-lg cursor-pointer transition-colors"
                    >
                        {isDeleting ? 'Удаление...' : 'Удалить'}
                    </button>
                </div>
            </form>
        </div>
    );
};