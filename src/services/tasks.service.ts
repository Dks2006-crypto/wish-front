import {Task} from "@/entities/todo";
import api from "@/api/config.api";
import {API_ROUTE} from "@/lib/routes/api.route";
import {getAuthHeaders} from "@/api/headers.api";

export const getAll =  async (): Promise<Task[]> => {
    const response = await api.get(API_ROUTE.tasks.index(), {
        headers: await getAuthHeaders(),
    });
    return response.data;
};