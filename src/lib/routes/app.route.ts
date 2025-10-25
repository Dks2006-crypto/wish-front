export const APP_ROUTE = {
    root: (path: string | "") => path,
    home: () => APP_ROUTE.root('/'),

    auth: {

        login: () => APP_ROUTE.root('/login'),
        register: () => APP_ROUTE.root('/register'),
    },
    tasks: {
        index: () => APP_ROUTE.root('/dashboard/tasks'),
        show: (id: string) => APP_ROUTE.root('/dashboard/tasks/' + id),
        create: () => APP_ROUTE.root('/dashboard/tasks/create'),
    },

    whishes: {
        index: () => APP_ROUTE.root('/dashboard/whishes'),
        show: (id: string) => APP_ROUTE.root('/dashboard/whishes/' + id),
        create: () => APP_ROUTE.root('/dashboard/whishes/create'),
        edit: (id: string) => APP_ROUTE.root('/dashboard/whishes/edit/' + id),
    }
};