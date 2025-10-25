export const getAuthHeaders = async () => {
    try {
        // Динамический импорт cookies (доступен только на сервере)
        const { cookies } = await import('next/headers');
        const cookieStore = await cookies();
        const accessToken = cookieStore.get('accessToken')?.value;
        // Возвращаем заголовок с токеном, если он есть
        return accessToken ? { Cookie: `accessToken=${accessToken}` } : {};
    } catch (error) {
        // Если вызвано на клиенте, возвращаем пустой объект
        return {};
    }
};