import LogoSipo from "@/assets/img/logo.svg";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import { Link } from "react-router-dom";

const PublicHeader = () => {
    const [navClass, setNavClass] = useState("hidden md:static md:flex md:pr-0 md:max-w-fit md:bg-transparent md:flex-row md:gap-8 md:pt-0 md:items-center md:font-medium md:text-base");

    const handleOpenMenu = () => {
        setNavClass("w-2/3 absolute gap-y-5 font-medium text-2xl pr-12 text-right h-screen top-0 right-0 bg-white flex flex-col md:static md:flex md:pr-0 md:max-w-fit md:bg-transparent md:flex-row md:gap-8 md:pt-0 md:items-center md:font-medium md:text-base z-50")
    };
    const handleCloseMenu = () => {
        setNavClass("hidden md:static md:flex md:pr-0 md:max-w-fit md:bg-transparent md:flex-row md:gap-8 md:pt-0 md:items-center md:font-medium md:text-base")
    }

    return (
        <header className="flex mx-auto py-4 px-6 container items-center justify-between">
            <Link to="/"><img src={LogoSipo} alt="Logo Sipo" className="w-32 md:w-40 hover:scale-[1.05] ease-in-out duration-300" /></Link>
            <button className="md:hidden" onClick={handleOpenMenu}>
                <MenuIcon />
            </button>
            <nav className={navClass}>
                <button className=" md:hidden self-end mt-10 mb-20" onClick={handleCloseMenu}>
                    <CloseIcon />
                </button>
                <Link to="/signup" className="md:font-normal hover:text-sky-400 hover:scale-[1.05] ease-in-out duration-300" onClick={handleCloseMenu}>Crear cuenta</Link>
                <Link to="/login" className="md:font-normal hover:text-sky-400 hover:scale-[1.05] ease-in-out duration-300" onClick={handleCloseMenu}>Iniciar sesión</Link>
                <Link
                    to="/login"
                    className="md:bg-sky-400 md:hover:bg-sky-500 md:text-white md:px-5 md:py-3 md:rounded-xl hover:scale-[1.05] ease-in-out duration-300"
                    onClick={handleCloseMenu}
                >
                    Publicar venta
                </Link>
            </nav>
        </header>
    );
};

export default PublicHeader;
