import {LoginForm} from "@/entities/auth";
import {Container} from "@/components/ui/container";
import {APP_ROUTE} from "@/lib/routes/app.route";

export default  function  LoginPage(){
    return (
        <div className="h-screen flex items-center justify-center">
            <Container className="w-full">
                <LoginForm className='max-w-full' registerUrl={APP_ROUTE.auth.register()} label={"Авторизация"}/>
            </Container>


        </div>
    );
}