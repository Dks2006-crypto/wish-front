import {BACKEND_URL} from "@/lib/constants";

//Обращение к бэкенду

export const API_ROUTE = {
    root: (url: string | "") => BACKEND_URL + url,


    //Маршруты для аутентификации
    auth: {
        register: ()  => API_ROUTE.root('/auth/register'),
        login: () => API_ROUTE.root('/auth/login'),
    },


    //Маршруты для работы с желаниями
    whishes: {
        index: () => API_ROUTE.root('/whishes'),
        show: (id: string | number) => API_ROUTE.root('/whishes/' + id),
        create: () => API_ROUTE.root('/whishes'),
        update: (id: string ) => API_ROUTE.root(`/whishes/${id}`),
        delete: (id: string | number) => API_ROUTE.root('/whishes/' + id),
    },
};