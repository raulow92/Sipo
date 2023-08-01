import LogoSipo from "@/assets/img/logo.svg";
import { useState, useContext } from "react";
import Context from "../../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const LogInMain = () => {
  const { setUsuario } = useContext(Context);
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  const url = "http://localhost:3000/login";

  const loginOK = (e) => {
    e.preventDefault();
    navigate("/vender");
  };

  const inicioSesion = async () => {
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const {data: token} = await axios.post(url, usuario);
      alert("Usuario identificado con éxito 😀");
      localStorage.setItem("token", token);
      console.log(localStorage.getItem("token"))
      setUsuario();
      loginOK;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="container mx-auto grid grid-cols-1 xl:grid-cols-2 md:items-center px-6 py-6 md:px-24 md:py-20">
      <section className="hidden xl:flex flex-col mx-auto md:pl-12">
        <img
          src={LogoSipo}
          alt="Logo Sipo"
          className="mx-auto w-52 md:w-72 md:mx-0"
        />
        <h2 className="md:text-lg font-medium text-center pt-4 pb-4 md:text-left">
          Sipo te ayuda a encontrar ese producto que necesitas y a vender eso
          que ya no utilizas.
        </h2>
      </section>
      <section className="xl:mx-full xl:ml-12 2xl:ml-24 2xl:mr-12">
        <form className="bg-white p-8 w-auto text-lg rounded-xl md:drop-shadow-md">
          <div className="flex flex-col">
            <input
              value={usuario.email}
              onChange={handleSetUsuario}
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="border border-gray-300 rounded-xl p-4 pl-6"
            />
            <input
              value={usuario.password}
              onChange={handleSetUsuario}
              type="password"
              name="password"
              placeholder="Contraseña"
              className="border border-gray-300 rounded-xl p-4 pl-6 mt-5"
            />
            <button
              onClick={inicioSesion}
              className="hover:cursor-pointer bg-sky-400 hover:bg-sky-500 font-medium rounded-xl text-white p-4 mt-5"
            >
                Iniciar sesión
            </button>
            <p className="text-center text-sky-400 hover:text-sky-500 font-medium text-base mt-5 hover:cursor-pointer">
              ¿Has olvidado la contraseña?
            </p>
            <div className="border-solid border-t-2 border-gray-300 mt-5"></div>
            <button className="bg-green-400 hover:bg-green-500 self-center px-6 font-medium rounded-xl text-white p-4 mt-8">
              Crear cuenta nueva
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default LogInMain;
