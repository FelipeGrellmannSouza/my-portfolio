import { scrollToTarget } from "@/utils/scrollUtils";

type Props = {
    children: string;
    onClick?: () => void;
}

export const NavItem = ({ children, onClick }: Props) => {
    return (
        <button className="mx-2 group hover:cursor-pointer" onClick={() => {
            scrollToTarget(children.toLowerCase().replaceAll(' ', ''));
            onClick?.();
        }}>
            <span className="group-hover:text-amber-700 transition-colors duration-300">
                {children}
            </span>
            <span
                className="flex w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full">
            </span>
        </button>
    );
}
