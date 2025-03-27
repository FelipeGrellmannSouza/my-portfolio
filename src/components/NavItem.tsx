import { ReactNode } from "react";


type Props = {
    children: ReactNode;
}

export const NavItem = ({ children }: Props) => {
    return (
        <div className="mx-2 group hover:cursor-pointer">
            <span className="group-hover:text-amber-700 transition-colors duration-300">
                {children}
            </span>
            <span
                className="flex w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full">
            </span>
        </div>
    );
}
