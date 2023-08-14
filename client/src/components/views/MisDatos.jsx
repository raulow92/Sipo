import { useContext, useState, useEffect } from "react";
import Loader from "@/components/icons/Loader";
import Context from "../../Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const MisDatos = () => {
    const navigate = useNavigate()
    const { setUsuario: setUsuarioGlobal } = useContext(Context);
    const [loaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        nombre: '',
        apellidos: '',
        email: '',
        password: '',
        image: '',
    });
    const url = "https://sipoback.onrender.com";

    const getUserData = async () => {
        const endpoint = "/users";
        const token = localStorage.getItem("token");
            try {
            const { data } = await axios.get(url + endpoint, {
                headers: { Authorization: "Bearer " + token },
            });
            setFormData({
                ...formData,
                id: data.user_id,
                nombre: data.nombre,
                apellidos: data.apellidos,
                email: data.email,
                password: data.password,
                image: data.image,
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
        finally{
            setLoaded(true);
        }
        };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateData = async (e) => {
        e.preventDefault();
        const endpoint = `/update/${formData.id}`;
        const { nombre, apellidos, email, password, image } = formData;
        try {
            if (!nombre || !apellidos || !email || !password || !image) return alert("Todos los campos son obligatorios");
            await axios.patch(url + endpoint, formData);
            alert("Datos actualizados exitosamente")
            getUserData()
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
      }, []);

    return (
        <div className="container mx-auto">
            {loaded ? (
            <form
                onSubmit={handleUpdateData}
                className="bg-white mx-6 my-8 p-8 xl:w-1/2 xl:mx-auto rounded-xl md:drop-shadow-md"
            >
                <div className="flex flex-col">
                    <h2 className="text-center text-lg mb-6 font-medium">
                        Mis Datos
                    </h2>
                    <div className="flex flex-col xl:flex-row items-center justify-between mb-6">
                        <label htmlFor="name" className="hidden xl:block">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="nombre"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleInputChange} 
                            className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label htmlFor="surname" className="hidden xl:block">
                            Apellidos
                        </label>
                        <input
                            type="text"
                            id="surname"
                            name="apellidos"
                            placeholder="Apellidos"
                            value={formData.apellidos}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label htmlFor="email" className="hidden xl:block">
                            Correo
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            readOnly
                            className="border text-gray-400 border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label
                            htmlFor="pass"
                            className="hidden xl:block mr-[-33px]"
                        >
                            Nueva <br /> Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            placeholder="Nueva Contraseña"
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label htmlFor="image" className="hidden xl:block">
                            Imagen
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={formData.image}
                            placeholder="URL imagen"
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
                        />
                    </div>
                    <input
                        onClick={handleUpdateData}
                        type="submit"
                        value="Guardar cambios"
                        className="hover:cursor-pointer bg-green-400 hover:bg-green-600 font-medium rounded-xl text-white p-4 hover:scale-[1.02] ease-in-out duration-300"
                    ></input>
                </div>
            </form>
            ) : (
                <Loader className="inline w-20 h-20 mt-12 text-gray-200 animate-spin dark:text-gray-400 fill-sky-400" />
            )}
        </div>
    );
};

export default MisDatos;
