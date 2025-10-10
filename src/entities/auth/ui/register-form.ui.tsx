import React from "react";

interface Props {
    className?: string;
}

export const FormUi:React.FC <Props> = ({className}) => {
    return(
        <div className={` ${className} bg-white`}>
            <form className='w-full'>
                <div className='w-full' id='form-group-1'>

                </div>
            </form>
        </div>
    );
}