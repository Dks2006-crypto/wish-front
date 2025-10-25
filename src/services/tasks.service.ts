import {Task} from "@/entities/todo";
import api from "@/api/config.api";
import {API_ROUTE} from "@/lib/routes/api.route";
import {getAuthHeaders} from "@/api/headers.api";
import {z} from "zod";
import {createTaskSchema} from "@/entities/todo/schemas/todo.schema";

export const getAll =  async (): Promise<Task[]> => {
    const response = await api.get(API_ROUTE.tasks.index(), {
        headers: await getAuthHeaders(),
    });
    return response.data;
};
export const getOne = async (id: string): Promise<Task> => {
    const response = await api.get(API_ROUTE.tasks.show(id), {
        headers: await getAuthHeaders(),
    });
    return response.data;
};

export const create = async(data: z.infer<typeof createTaskSchema> ): Promise<Task> => {
    return api.post(API_ROUTE.tasks.create(),data);
}