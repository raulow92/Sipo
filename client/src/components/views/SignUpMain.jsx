import LogoSipo from "@/assets/img/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpMain = () => {
  const navigate = useNavigate();
  const [usuarioLocal, setUsuarioLocal] = useState({});
  const [error, setError] = useState(null);

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuarioLocal, ...field });
  };

  const url = "http://localhost:3000";

  const registroUsuario = async () => {
    const endpoint = "/users";
    const { nombre, apellidos, email, password } = usuarioLocal;
    try {
      if (!nombre || !apellidos || !email || !password)
        return alert("Todos los campos son obligatorios");
      await axios.post(url + endpoint, usuarioLocal);
      alert("Usuario registrado con éxito 😀");
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
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
      {error ? (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">
              {error}
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
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
        <form onSubmit={(e) => e.preventDefault()} className="bg-white p-8 w-auto text-lg rounded-xl md:drop-shadow-md">
          <div className="flex flex-col">
            <input
              value={usuarioLocal.nombre}
              onChange={handleSetUsuario}
              name="nombre"
              type="text"
              id="name"
              placeholder="Nombre"
              className="border border-gray-300 rounded-xl p-4 pl-6"
            />
            <input
              value={usuarioLocal.apellidos}
              onChange={handleSetUsuario}
              name="apellidos"
              type="text"
              id="last-name"
              placeholder="Apellidos"
              className="border border-gray-300 rounded-xl p-4 pl-6 mt-5"
            />
            <input
              value={usuarioLocal.email}
              onChange={handleSetUsuario}
              name="email"
              type="email"
              id="email"
              placeholder="Correo electrónico"
              className="border border-gray-300 rounded-xl p-4 pl-6 mt-5"
            />
            <input
              value={usuarioLocal.password}
              onChange={handleSetUsuario}
              name="password"
              type="password"
              id="password"
              placeholder="Contraseña"
              className="border border-gray-300 rounded-xl p-4 pl-6 mt-5"
            />
            <input
            onClick={registroUsuario}
              type="submit"
              value="Regístrate"
              className="hover:cursor-pointer bg-green-400 hover:bg-green-600 font-medium rounded-xl text-white p-4 mt-5 hover:scale-[1.02] ease-in-out duration-300"
            ></input>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUpMain;
