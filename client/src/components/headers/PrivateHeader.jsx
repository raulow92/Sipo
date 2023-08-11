import LogoSipo from "@/assets/img/logo.svg";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import LogOutIcon from "@/components/icons/LogOutIcon";
import UserIcon from "@/components/icons/UserIcon";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Context from "../../Context";

const PrivateHeader = () => {
    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(Context);
    const [navClass, setNavClass] = useState(
        "hidden md:static md:flex md:pr-0 md:max-w-fit md:bg-transparent md:flex-row md:gap-8 md:pt-0 md:items-center md:font-medium md:text-base"
    );

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("token");
        navigate("/");
    };

    const handleOpenMenu = () => {
        setNavClass(
            "w-2/3 absolute gap-y-5 font-medium text-2xl pr-12 text-right h-screen top-0 right-0 bg-white flex flex-col md:static md:flex md:pr-0 md:max-w-fit md:bg-transparent md:flex-row md:gap-8 md:pt-0 md:items-center md:font-medium md:text-base z-50"
        );
    };
    const handleCloseMenu = () => {
        setNavClass(
            "hidden md:static md:flex md:pr-0 md:max-w-fit md:bg-transparent md:flex-row md:gap-8 md:pt-0 md:items-center md:font-medium md:text-base"
        );
    };

    return (
        <header className="flex mx-auto py-4 px-6 container items-center justify-between">
            <Link to="/tienda">
                <img
                    src={LogoSipo}
                    alt="Logo Sipo"
                    className="w-32 md:w-40 hover:scale-[1.05] ease-in-out duration-300"
                />
            </Link>
            <button className="md:hidden" onClick={handleOpenMenu}>
                <MenuIcon />
            </button>

            <nav className={navClass}>
                <button
                    className=" md:hidden self-end mt-10 mb-20"
                    onClick={handleCloseMenu}
                >
                    <CloseIcon />
                </button>
                <Link
                    to="/tienda"
                    className="md:font-normal hover:text-sky-400 hover:scale-[1.05] ease-in-out duration-300"
                    onClick={handleCloseMenu}
                >
                    Tienda
                </Link>
                <Link
                    to="/dashboard"
                    className="md:font-normal hover:text-sky-400 hover:scale-[1.05] ease-in-out duration-300"
                    onClick={handleCloseMenu}
                >
                    Dashboard
                </Link>
                <Link to="/mis-datos" className="hidden md:flex">
                  {usuario.data.image != null ? (
                      <div className="w-8 h-8 hidden md:block">
                          <img
                              src={usuario.data.image}
                              alt="..."
                              className="object-cover w-full h-full rounded-full border-2 border-sky-400 hover:opacity-80 hover:scale-110 ease-in-out duration-300"
                          />
                      </div>
                  ) : (
                      <UserIcon className="w-8 hidden md:block hover:opacity-80 hover:scale-110 ease-in-out duration-300" />
                  )}
                </Link>
                <Link
                    to="/"
                    onClick={[logout, handleCloseMenu]}
                    className="hidden md:flex"
                >
                    <LogOutIcon className="w-6 cursor-pointer hover:opacity-80 hover:scale-110 ease-in-out duration-300" />
                </Link>
                <Link
                    to="/"
                    className="md:font-normal hover:text-sky-400 md:hidden hover:scale-[1.05] ease-in-out duration-300"
                    onClick={[logout, handleCloseMenu]}
                >
                    Cerrar sesión
                </Link>
                <Link
                    to="/vender"
                    className="md:bg-sky-400 md:text-white md:px-5 md:py-3 md:rounded-xl hover:text-sky-400 md:hover:text-white md:hover:bg-sky-500 hover:scale-[1.05] ease-in-out duration-300"
                    onClick={handleCloseMenu}
                >
                    Publicar venta
                </Link>
            </nav>
        </header>
    );
};

export default PrivateHeader;
