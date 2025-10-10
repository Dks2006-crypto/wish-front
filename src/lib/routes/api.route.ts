import {BACKEND_URL} from "@/lib/constants";

export const API_ROUTE = {
    root: (url: string | "") => BACKEND_URL + url,

    auth: {
        register: ()  => API_ROUTE.root('/auth/create'),
        login: () => API_ROUTE.root('/auth/login'),
    },

    tasks: {
        index: () => API_ROUTE.root('/tasks'),
        show: (id: string | number) => API_ROUTE.root('/tasks/' + id),
        create: () => API_ROUTE.root('/tasks'),
        edit: (id: string | number) => API_ROUTE.root('/tasks/' + id),
        delete: (id: string | number) => API_ROUTE.root('/tasks/' + id),
    },
};