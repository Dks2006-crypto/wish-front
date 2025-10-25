import { z  } from "zod";

//схема валидации входа и регистрации

export const loginSchema = z.object({
    email: z.email("Введите корректный email"),
    password: z.string().min(6, 'Минимальная длина пароля 6 символов'),
});

export const registerSchema = z.object({
    name: z.string().min(1, "Поле обязательно для заполнения"),
    email: z.email("Введите корректный email"),
    password: z.string().min(6, 'Минимальная длина пароля 6 символов'),
});