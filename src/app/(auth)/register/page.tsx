
import {RegisterForm} from "@/entities/auth";
import {Container} from "@/components/ui/container";

export  default function RegisterPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Container className="w-full">
                <RegisterForm />
            </Container>
        </div>
    )
}