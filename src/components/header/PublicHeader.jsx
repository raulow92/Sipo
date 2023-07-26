import LogoSipo from "@/assets/img/logo.svg";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";

const PublicHeader = () => {
    const [navClass, setNavClass] = useState("hidden md:static md:flex md:pr-0 md:max-w-fit md:bg-transparent md:flex-row md:gap-8 md:pt-0 md:items-center md:font-medium md:text-base");

    const handleOpenMenu = () => {
        setNavClass("w-2/3 absolute gap-y-5 font-medium text-2xl pr-12 text-right h-full top-0 right-0 bg-white flex flex-col md:static md:flex md:pr-0 md:max-w-fit md:bg-transparent md:flex-row md:gap-8 md:pt-0 md:items-center md:font-medium md:text-base")
    };
    const handleCloseMenu = () => {
        setNavClass("hidden md:static md:flex md:pr-0 md:max-w-fit md:bg-transparent md:flex-row md:gap-8 md:pt-0 md:items-center md:font-medium md:text-base")
    }

    return (
        <header className="flex mx-auto py-4 px-6 container items-center justify-between bg-slate-300">
            <img src={LogoSipo} alt="Logo Sipo" className="w-52" />
            <button className="md:hidden" onClick={handleOpenMenu}>
                <MenuIcon />
            </button>
            <nav className={navClass}>
                <button className=" md:hidden self-end pt-10 pb-20" onClick={handleCloseMenu}>
                    <CloseIcon />
                </button>
                <a href="#">Crear cuenta</a>
                <a href="#">Iniciar sesión</a>
                <a
                    href="#"
                    className="md:bg-sky-400 md:text-white md:px-4 md:py-2 md:rounded-xl"
                >
                    Publicar venta
                </a>
            </nav>
        </header>
    );
};

export default PublicHeader;