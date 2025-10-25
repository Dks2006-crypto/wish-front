import {CreateForm} from "@/entities/whishes";
import {Container} from "@/components/ui/container";
//Страница создания желания
export default function CreateProduct (){
    return (
        <div className=" w-full h-screen flex items-center justify-center" >
            <Container className="w-full max-w-3xl">
                {/* Форма создания желания */}
                <CreateForm label="Создание новой задачи"/>
            </Container>
        </div>
    );
}