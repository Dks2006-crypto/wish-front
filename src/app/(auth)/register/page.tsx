import {RegisterForm} from "@/entities/auth";
import {Container} from "@/components/ui/container";
import {APP_ROUTE} from "@/lib/routes/app.route";

//Страница регстрации нового пользователя
export  default function RegisterPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Container className="w-full">
                {/* Форма регистрации */}
                <RegisterForm label="Регистрация" loginUrl={APP_ROUTE.auth.register()}/>
            </Container>
        </div>
    )
}