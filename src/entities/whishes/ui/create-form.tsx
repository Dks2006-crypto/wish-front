"use client"
import React from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useCreate} from "@/entities/whishes/hooks/useCreate";

//ФОрма создания желания

interface Props {
    label?: string;
    className?: string;
}

export const CreateFormUi: React.FC<Props> = ({ label = "Форма создания", className }) => {

    {/* Выхов хука для создания желания */}
    const { register, handleSubmit, errors, isSubmitting, onSubmit } = useCreate();
    return (
        <div className={`${className} p-5 sm:p-10 w-full bg-zinc-800 rounded-lg`}>
            <div className="text-center text-xl sm:text-2xl font-medium">{label}</div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="w-full grid gap-y-2" id="form-group-1">
                    <Label>Название задачи</Label>
                    <Input {...register('title')} type="text" placeholder="Название желания" />
                    {errors.title && (
                        <span className="text-red-500">{errors.title.message}</span>
                    )}
                </div>
                <div className="w-full grid gap-y-2" id="form-group-2">
                    <Label>Описание задачи</Label>
                    <Input {...register('description')} type="text" placeholder="Описание" />
                    {errors.description && (
                        <span className="text-red-500">{errors.description.message}</span>
                    )}
                </div>
                <div className="w-full grid gap-y-2" id="form-group-2">
                    <Label>Описание задачи</Label>
                    <Input {...register('link')} type="text" placeholder="Ссылка" />
                    {errors.link && (
                        <span className="text-red-500">{errors.link.message}</span>
                    )}
                </div>
                <div className="w-full grid gap-y-2">
                    <Label className="text-white">Приоритет</Label>
                    <select
                        {...register('priority')}
                        className="flex h-10 w-full rounded-md border border-zinc-600 bg-zinc-700 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Выберите приоритет</option>
                        <option value="LOW">Низкий</option>
                        <option value="MEDIUM">Средний</option>
                        <option value="HIGH">Высокий</option>
                    </select>
                    {errors.priority && (
                        <span className="text-red-500">{errors.priority.message}</span>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}

                    className="px-3 h-12 font-medium text-gray-500 bg-gray-100 rounded-full cursor-pointer">{isSubmitting ? "Создание...." : "Создать"}</button>
            </form>
        </div>
    );
};