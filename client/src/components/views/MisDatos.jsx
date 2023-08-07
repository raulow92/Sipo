import { useContext, useState } from "react";
import Context from "../../Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const MisDatos = () => {
    const navigate = useNavigate()
    const { usuario, setUsuario } = useContext(Context);
    const { data: userData } = usuario; 
    const url = "http://localhost:3000";

    const [formData, setFormData] = useState({
        id: userData.user_id,
        nombre: userData.nombre,
        apellidos: userData.apellidos,
        email: userData.email,
        pass: userData.pass,
        image: userData.image,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateData = async (e) => {
        e.preventDefault();
        console.log(formData);
        const endpoint = "/update";
        try {
            await axios.patch(url + endpoint, formData);
            alert("Datos actualizados exitosamente")
            setUsuario({ ...usuario, data: formData });
            navigate("/dashboard");
            console.log("Datos actualizados exitosamente");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mx-auto">
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
                            htmlFor="email"
                            className="hidden xl:block mr-[-33px]"
                        >
                            Nueva <br /> Contraseña
                        </label>
                        <input
                            type="password"
                            id="pass"
                            name="pass"
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
                            placeholder="URL imagen"
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
                        />
                    </div>
                    <input
                        onClick={handleUpdateData}
                        type="submit"
                        value="Guardar cambios"
                        className="hover:cursor-pointer bg-green-400 hover:bg-green-600 font-medium rounded-xl text-white p-4"
                    ></input>
                </div>
            </form>
        </div>
    );
};

export default MisDatos;
