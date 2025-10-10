// Экспортируем функцию для получения заголовков с токеном
export const getAuthHeaders = async () => {
    try {
        // Динамический импорт cookies (доступен только на сервере)
        const { cookies } = await import('next/headers');
        const cookieStore = cookies();
        const accessToken = cookieStore.get('accessToken')?.value;
        // Возвращаем заголовок с токеном, если он есть
        return accessToken ? { Cookie: `accessToken=${accessToken}` } : {};
    } catch (err) {
        // Если вызвано на клиенте, возвращаем пустой объект
        return {};
    }
};