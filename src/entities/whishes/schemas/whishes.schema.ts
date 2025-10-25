import { z } from 'zod';

export const createWhichSchema = z.object({
    title: z.string().min(1, 'Поле названия обязательно'),
    description: z.string().optional(),
    link: z.string().optional(),
    completed: z.union([z.boolean(), z.string()]).transform(val => val === 'true' || val === true).optional(),
    priority: z.enum(["LOW", "MEDIUM", "HIGH"], {
        errorMap: () => ({ message: "Выберите приоритет из списка" })
    }),
});