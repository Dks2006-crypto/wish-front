import { TableUi as Table } from "@/entities/todo/ui/table.ui";
import {getAll} from "@/services/tasks.service";

export default async function TasksPage () {
    const tasks = await getAll();
    return (
    <div>
        <Table data={tasks} />
    </div>
    );
}