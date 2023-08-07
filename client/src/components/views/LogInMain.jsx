import LogoSipo from "@/assets/img/logo.svg";
import { useState, useContext } from "react";
import Context from "../../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogInMain = () => {
  const { setUsuario: setUsuarioGlobal } = useContext(Context);
  const navigate = useNavigate();
  const [usuarioLocal, setUsuarioLocal] = useState({
    email: "jbennell5@netvibes.com",
    password: "12345",
  });

  const toSignUp = () => navigate("/signup");

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuarioLocal, ...field });
  };

  const url = "http://localhost:3000";

  const inicioSesion = async () => {
    const endpoint = "/login";
    const { email, password } = usuarioLocal;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const { data: token } = await axios.post(url + endpoint, usuarioLocal);
      alert("Usuario identificado con éxito 😀");
      localStorage.setItem("token", token);
      getUserData();
      navigate("/tienda");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const getUserData = async () => {
    const endpoint = "/users";
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get(url + endpoint, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(data.user_id);
      const favEndpoint = `/user/${data.user_id}/favorites`;
      const { data: favorites } = await axios.get(url + favEndpoint);
      const result = {
        data,
        favorites,
      };
      setUsuarioGlobal(result);
      console.log(result);
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
        <form
          className="bg-white p-8 w-auto text-lg rounded-xl md:drop-shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col">
            <input
              value={usuarioLocal.email}
              onChange={handleSetUsuario}
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="border border-gray-300 rounded-xl p-4 pl-6"
            />
            <input
              value={usuarioLocal.password}
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
            <button
              onClick={toSignUp}
              className="bg-green-400 hover:bg-green-500 self-center px-6 font-medium rounded-xl text-white p-4 mt-8"
            >
              Crear cuenta nueva
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default LogInMain;
