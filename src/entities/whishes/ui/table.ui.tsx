import React from "react";
import Link from "next/link";
import { APP_ROUTE } from "@/lib/routes/app.route";
import { Whish } from "@/entities/whishes";

//Все желания

interface Props {
    className?: string;
    data: Whish[];
}

export const TableUi: React.FC<Props> = ({ className, data }) => {
    if (data.length === 0) {
        return (
            <div className={`${className} flex justify-center items-center py-12`}>
                <p className="text-gray-500 dark:text-neutral-400 text-lg">Записи не найдены</p>
            </div>
        );
    }

    {/* Определение цвета приоритета */}
    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "HIGH":
                return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
            case "MEDIUM":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
            case "LOW":
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
        }
    };

    {/* Определение цвета статуса */}
    const getStatusColor = (completed: boolean) => {
        return completed
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    };

    {/* Перевод приоритета */}
    const getPriorityText = (priority: string) => {
        switch (priority) {
            case "HIGH":
                return "Высокий";
            case "MEDIUM":
                return "Средний";
            case "LOW":
                return "Низкий";
            default:
                return priority;
        }
    };

    {/* Перевод статуса */}
    const getStatusText = (completed: boolean) => {
        return completed ? "Куплено" : "Активно";
    };

    return (
        <div className={className}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Вызов желаний из базы данных */}
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-gray-200 dark:border-neutral-700 overflow-hidden hover:shadow-lg transition-shadow duration-200 ${
                            item.completed ? "opacity-75" : ""
                        }`}
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className={`text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 ${
                                    item.completed ? "line-through" : ""
                                }`}>
                                    {item.title}
                                </h3>
                                <div className="flex flex-col gap-1 items-end">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                                            item.priority
                                        )}`}
                                    >
                                        {getPriorityText(item.priority)}
                                    </span>
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                            item.completed
                                        )}`}
                                    >
                                        {getStatusText(item.completed)}
                                    </span>
                                </div>
                            </div>

                            {item.description && (
                                <p className={`text-gray-600 dark:text-neutral-300 mb-4 line-clamp-3 ${
                                    item.completed ? "line-through" : ""
                                }`}>
                                    {item.description}
                                </p>
                            )}

                            {item.link && (
                                <div className="mb-4">
                                    <p className="text-sm text-gray-500 dark:text-neutral-400 mb-1">
                                        Ссылка на товар:
                                    </p>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm truncate block ${
                                            item.completed ? "line-through" : ""
                                        }`}
                                    >
                                        {item.link}
                                    </a>
                                </div>
                            )}

                            <div className="mb-4">
                                <p className="text-sm text-gray-500 dark:text-neutral-400 mb-1">
                                    Автор:
                                </p>
                                <p className="text-gray-700 dark:text-neutral-200 text-sm">
                                    {item.user?.email || "Не указан"}
                                </p>
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-neutral-700">
                                <Link
                                    href={APP_ROUTE.whishes.show(String(item.id))}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                >
                                    Подробнее
                                </Link>

                                <div className="flex space-x-2">
                                    <Link
                                        href={APP_ROUTE.whishes.edit(String(item.id))}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors border border-green-200 dark:border-green-800 rounded-md hover:bg-green-50 dark:hover:bg-green-900/20"
                                    >
                                        Редактировать
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};