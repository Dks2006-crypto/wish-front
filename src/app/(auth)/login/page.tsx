import {LoginForm} from "@/entities/auth";
import {Container} from "@/components/ui/container";

export default  function  LoginPage(){
    return (
        <div className="h-screen flex items-center justify-center">
            <Container className="w-full">
                <LoginForm className='max-w-full'/>
            </Container>


        </div>
    );
}