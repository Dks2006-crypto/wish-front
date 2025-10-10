import axios from "axios";
import {BACKEND_HEADERS, BACKEND_URL} from "@/lib/constants";

const api = axios.create({
    baseURL: BACKEND_URL,
    headers: BACKEND_HEADERS,
    withCredentials: true,
});
// Настраиваем перехватчик для обработки ошибок
api.interceptors.response.use(
    (response) => response, // Успешный ответ возвращаем как есть
    async (error) => {
        if (!error.response) {
            return Promise.reject(error); // Сетевая ошибка
        }

        const originalRequest = error.config;
        // Если получили 401 и запрос не повторялся
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Помечаем запрос как повторный
            try {
                await api.post('/auth/refresh'); // Пытаемся обновить токен
                return api(originalRequest); // Повторяем исходный запрос
            } catch (refreshError) {
                return Promise.reject(refreshError); // Ошибка при обновлении токена
            }
        }
        return Promise.reject(error); // Другие ошибки
    }
);

export default api;