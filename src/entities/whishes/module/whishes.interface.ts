export interface Whish {
    priority: string;
    id: number;
    title: string;
    description: string;
    completed: boolean;
    link: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}