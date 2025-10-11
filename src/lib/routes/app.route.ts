export const APP_ROUTE = {
    root: (path: string | "") => path,
    home: () => APP_ROUTE.root('/'),

    auth: {

        login: () => APP_ROUTE.root('/login'),
        register: () => APP_ROUTE.root('/register'),
    },
};