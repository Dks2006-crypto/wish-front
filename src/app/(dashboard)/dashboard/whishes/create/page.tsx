import {CreateForm} from "@/entities/whishes";
import {Container} from "@/components/ui/container";

export default function CreateProduct (){
    return (
        <div className=" w-full h-screen flex items-center justify-center" >
            <Container className="w-full max-w-3xl">
                <CreateForm label="Создание новой задачи"/>
            </Container>
        </div>
    );
}