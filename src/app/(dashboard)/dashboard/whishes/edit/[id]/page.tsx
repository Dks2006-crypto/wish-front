import { Container } from "@/components/ui/container";
import {EditFormUi} from "@/entities/whishes/ui/edit-form";

//Форма редактирования

interface Props {
    params: {
        id: string;
    };
}

export default async function EditWishPage({ params }: Props) {

    {/* Получение ID желания */}
    const { id } = await params;
    return (
        <Container className="max-w-2xl mx-auto py-8">
            <EditFormUi id={id} />
        </Container>
    );
}