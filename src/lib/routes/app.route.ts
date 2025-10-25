export const APP_ROUTE = {
    root: (path: string | "") => path,
    home: () => APP_ROUTE.root('/'),

    //Маршруты для аутентификации
    auth: {
        login: () => APP_ROUTE.root('/login'),
        register: () => APP_ROUTE.root('/register'),
    },

    //Маршруты для работы с желаниями в dachboard
    whishes: {
        index: () => APP_ROUTE.root('/dashboard/whishes'),
        show: (id: string) => APP_ROUTE.root('/dashboard/whishes/' + id),
        create: () => APP_ROUTE.root('/dashboard/whishes/create'),
        edit: (id: string) => APP_ROUTE.root('/dashboard/whishes/edit/' + id),
    }
};