import {LoginForm} from "@/entities/auth";

export default  function  LoginPage(){
    return (
        <div className="h-screen flex items-center justify-center">
            <LoginForm className='max-w-[340px]'/>

        </div>
    );
}