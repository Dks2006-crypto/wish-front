import {getAll} from "@/services/whishes.service";
import Link from "next/link";
import {APP_ROUTE} from "@/lib/routes/app.route";
import {Container} from "@/components/ui/container";
import {Table} from "@/entities/whishes";

export default async function WhishesPage () {
    const whishes = await getAll();
    return (
        <div>
            <Container className="space-y-4">
                <div className="flex justify-end">
                    <Link className="py-3 px-4 text-white font-medium bg-blue-400 rounded-lg" href={APP_ROUTE.whishes.create()}>Создать</Link>
                </div>
                <Table data={whishes} />
            </Container>
        </div>
    );
}