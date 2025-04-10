import { useState } from "react";
import { NavItem } from "./NavItem"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/1 backdrop-blur-md">
            <nav className="flex container m-auto items-center justify-between px-4 py-3">
                <h3
                    className="font-kanit text-2xl transition-all duration-500 hover:cursor-pointer text-neutral-300 hover:text-orange-400 hover:drop-shadow-[0_0_15px_rgba(217,119,6,0.7)] "
                >
                    Felipe Grellmann
                </h3>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-neutral-300 text-3xl md:hidden"
                >
                    {isOpen ? 'x' : '≡'}
                </button>

                <div className="hidden md:flex space-x-6 text-neutral-300 font-poppins font-medium">
                    <NavItem>Sobre</NavItem>
                    <NavItem>Graduações</NavItem>
                    <NavItem>Tecnologias</NavItem>
                    <NavItem>Projetos</NavItem>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden flex flex-col items-start gap-4 p-3 text-neutral-300 rounded-md font-poppins font-medium">
                    <NavItem onClick={() => setIsOpen(false)}>Sobre</NavItem>
                    <NavItem onClick={() => setIsOpen(false)}>Graduações</NavItem>
                    <NavItem onClick={() => setIsOpen(false)}>Tecnologias</NavItem>
                    <NavItem onClick={() => setIsOpen(false)}>Projetos</NavItem>
                </div>
            )}
        </header>
    )
}
