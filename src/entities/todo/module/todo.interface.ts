export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    user: {
        id: number;
        name: string;
        email: string;
    };
}