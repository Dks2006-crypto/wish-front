// header.ui.tsx
import React from "react";
import {AUTH_DATA, Auth, Logo, Navigation, IMenu, MENU_DATA} from "@/widgets/header";
import {Container} from "@/components/ui/container";


console.log('MENU_DATA in header.ui.tsx:', MENU_DATA);
console.log('AUTH_DATA in header.ui.tsx:', AUTH_DATA);

interface Props {
    id?: string;
    data?: IMenu[],
    className?: string;
}

export const HeaderUi: React.FC<Props> = ({ id, className, data = MENU_DATA }) => {
    return (
        <header className={`${className} `} id={String(id)}>
            <Container className="w-full flex items-center justify-between">
                <Logo />
                <Navigation data={data} />
                <Auth data={AUTH_DATA} />
            </Container>
        </header>
    );
}