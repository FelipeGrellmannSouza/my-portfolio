import { NavItem } from "./NavItem"

export const Header = () => {
    return (
        <header>
            <nav className="flex container m-auto items-center justify-between">
                <h3 className="font-kanit text-2xl transition-all duration-500 hover:cursor-pointer 
                              text-neutral-300 hover:text-orange-400 
                              hover:drop-shadow-[0_0_15px_rgba(217,119,6,0.7)] "
                >
                    Felipe Grellmann
                </h3>
                <div className="flex justify-around text-neutral-300 font-poppins font-medium">
                    <NavItem>About Me</NavItem>
                    <NavItem>Graduation</NavItem>
                    <NavItem>Certifieds</NavItem>
                    <NavItem>Projects</NavItem>
                </div>
            </nav>
        </header>
    )
}
