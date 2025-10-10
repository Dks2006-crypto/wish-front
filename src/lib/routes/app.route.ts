export const APP_ROUTE = {
    root: (path: string | "") => path,

    auth: {
        login: () => APP_ROUTE.root('/login'),
        register: () => APP_ROUTE.root('/register'),
    },
};