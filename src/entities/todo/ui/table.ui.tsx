import React from "react";
import { Task } from "@/entities/todo";

interface Props {
    className?: string;
    data: Task[];
}

export const TableUi: React.FC<Props> = ({ className, data }) => {
    if (data.length === 0) {
        return (
            <div className={className}>
                <p>Записи не найдены</p>
            </div>
        );
    }

    return (
        <div className={className}>
            {data.map((item, index) => (
                <div key={index}>
                    {item.title} - {item.user.email}
                </div>
            ))}
        </div>
    );
};