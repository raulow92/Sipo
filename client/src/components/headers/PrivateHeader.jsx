import LogoSipo from "@/assets/img/logo.svg";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Context from "../../Context";

const PrivateHeader = () => {
  const navigate = useNavigate();
  const { setUsuario } = useContext(Context);
  const [navClass, setNavClass] = useState(
    "hidden md:static md:flex md:pr-0 md:max-w-fit md:bg-transparent md:flex-row md:gap-8 md:pt-0 md:items-center md:font-medium md:text-base"
  );

  const logout = () => {
    setUsuario({});
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
      <Link to="/">
        <img src={LogoSipo} alt="Logo Sipo" className="w-32 md:w-40" />
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
          className="md:font-normal hover:text-sky-400"
          onClick={handleCloseMenu}
        >
          Tienda
        </Link>
        <Link
          to="/dashboard"
          className="md:font-normal hover:text-sky-400"
          onClick={handleCloseMenu}
        >
          Dashboard
        </Link>
        <Link
          to="/vender"
          className="md:bg-sky-400 md:text-white md:px-5 md:py-3 md:rounded-xl md:hover:bg-sky-500"
          onClick={handleCloseMenu}
        >
          Publicar venta
        </Link>
        <button
          onClick={logout}
          className="md:bg-red-500 md:text-white md:px-5 md:py-3 md:rounded-xl md:hover:bg-red-800"
        >
          Salir
        </button>
      </nav>
    </header>
  );
};

export default PrivateHeader;
