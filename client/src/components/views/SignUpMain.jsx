import LogoSipo from "@/assets/img/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpMain = () => {
  const navigate = useNavigate();
  const [usuarioLocal, setUsuarioLocal] = useState({});

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
      alert(error);
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
              className="hover:cursor-pointer bg-green-400 hover:bg-green-600 font-medium rounded-xl text-white p-4 mt-5"
            ></input>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUpMain;
