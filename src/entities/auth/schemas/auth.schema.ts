import { z  } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Введите корректный email"),
    password: z.string().min(6, 'Минимальная длина пароля 6 символов'),
});

export const registerSchema = z.object({
    name: z.string().min(1, "Поле обязательно для заполнения"),
    email: z.string().email("Введите корректный email"),
    password: z.string().min(6, 'Минимальная длина пароля 6 символов'),
});