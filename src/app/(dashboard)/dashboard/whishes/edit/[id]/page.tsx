import { Container } from "@/components/ui/container";
import {EditFormUi} from "@/entities/whishes/ui/edit-form";

interface Props {
    params: {
        id: string;
    };
}

export default async function EditWishPage({ params }: Props) {

    const { id } = await params;
    return (
        <Container className="max-w-2xl mx-auto py-8">
            <EditFormUi id={id} />
        </Container>
    );
}