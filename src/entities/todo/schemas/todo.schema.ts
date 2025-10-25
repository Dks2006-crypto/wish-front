// Импортируем Zod для валидации
import { z } from 'zod';

// Схема для создания задачи
export const createTaskSchema = z.object({
    title: z.string('Поле строка'), // Обязательное поле
    description: z.string('Поле должно быть строкой').optional(), // Опциональное поле
});

// Схема для обновления задачи
export const updateTaskSchema = z.object({
    title: z.string('Поле строка'),
    description: z.string( 'Поле должно быть строкой' ).optional(), // Опциональное поле
    completed: z.boolean(), // Обязательное поле для статуса
});