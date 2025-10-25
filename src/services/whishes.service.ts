import api from "@/api/config.api";
import {API_ROUTE} from "@/lib/routes/api.route";
import {getAuthHeaders} from "@/api/headers.api";
import {z} from "zod";
import {createWhichSchema} from "@/entities/whishes/schemas/whishes.schema";
import {Whish} from "@/entities/whishes";

export const getAll =  async (): Promise<Whish[]> => {
    const response = await api.get(API_ROUTE.whishes.index(), {
        headers: await getAuthHeaders(),
    });
    return response.data;
};

export const getOne = async (id: string): Promise<Whish> => {
    const response = await api.get(API_ROUTE.whishes.show(id), {
        headers: await getAuthHeaders(),
    });
    return response.data;
};

export const create = async(data: z.infer<typeof createWhichSchema> ): Promise<Whish> => {
    return api.post(API_ROUTE.whishes.create(), data, {
        headers: await getAuthHeaders(),
    });
}

export const update = async (id: string, data: z.infer<typeof createWhichSchema>): Promise<Whish> => {
    try {
        const response = await api.patch(API_ROUTE.whishes.update(id), data, {
            headers: await getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        console.error('Error updating wish:', error);
        throw error;
    }
};

export const remove = async (id: string): Promise<void> => {
    try {
        await api.delete(API_ROUTE.whishes.delete(id), {
            headers: await getAuthHeaders(),
        });
    } catch (error) {
        console.error('Error deleting wish:', error);
        throw error;
    }
};