import LogoSipo from "@/assets/img/logo.svg";
import { useState, useContext } from "react";
import Context from "../../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingButton from "../icons/LoadingButton";

const LogInMain = () => {
  const { setUsuario: setUsuarioGlobal } = useContext(Context);
  const navigate = useNavigate();
  const [usuarioLocal, setUsuarioLocal] = useState({
    email: "jbennell5@netvibes.com",
    password: "12345",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const toSignUp = () => navigate("/signup");

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuarioLocal, ...field });
  };

  const url = "https://sipoback.onrender.com";

  const inicioSesion = async () => {
    setLoading(true);
    const endpoint = "/login";
    const { email, password } = usuarioLocal;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const { data: token } = await axios.post(url + endpoint, usuarioLocal);
      alert("Usuario identificado con éxito 😀");
      localStorage.setItem("token", token);
      getUserData();
      navigate("/tienda");
    } catch (e) {
      setError(e.response.data);
    } finally {
      setLoading(false);
    }
  };

  const getUserData = async () => {
    const endpoint = "/users";
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get(url + endpoint, {
        headers: { Authorization: "Bearer " + token },
      });
      const favEndpoint = `/users/${data.user_id}/favorites`;
      const { data: favorites } = await axios.get(url + favEndpoint);
      const result = {
        data,
        favorites,
      };
      setUsuarioGlobal(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setError(null);
  }

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
        {error ? (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={handleClick}>
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        ) : (
          <div></div>
        )}
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
            {!loading ? (
              <button
                onClick={inicioSesion}
                className="hover:cursor-pointer bg-sky-400 hover:bg-sky-500 font-medium rounded-xl text-white p-4 mt-5 hover:scale-[1.02] ease-in-out duration-300"
              >
                Iniciar sesión
              </button>
            ) : (
              <LoadingButton className="hover:cursor-not-allowed text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl p-4 mt-5 text-center dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-500 items-center hover:scale-[1.02] ease-in-out duration-300" />
            )}
            <p className="text-center text-sky-400 hover:text-sky-500 font-medium text-base mt-5 hover:cursor-pointer">
              ¿Has olvidado la contraseña?
            </p>
            <div className="border-solid border-t-2 border-gray-300 mt-5"></div>
            <button
              onClick={toSignUp}
              className="bg-green-400 hover:bg-green-500 self-center px-6 font-medium rounded-xl text-white p-4 mt-8 hover:scale-[1.02] ease-in-out duration-300"
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
