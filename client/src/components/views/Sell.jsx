import DownIcon from "@/components/icons/DownIcon";
import CategoriesIcon from "@/components/icons/CategoriesIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import Context from "../../Context";

const Sell = () => {
    const navigate = useNavigate();
    const url = "https://sipoback.onrender.com";
    const { usuario } = useContext(Context);

    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        precio: "",
        image: "",
        categoria: "",
        region: "",
        vendido: false,
        user_id: usuario.data.user_id,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSell = async (e) => {
        e.preventDefault();
        const endpoint = "/sell";
        const { titulo, descripcion, precio, image, categoria, region } = formData;
        try {
            if (!titulo || !descripcion || !precio || !image || !categoria || !region) return alert("Todos los campos son obligatorios");
            const { data: response } = await axios.post(url + endpoint, formData);
            navigate("/agregado");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mx-auto">
            <form className="bg-white mx-6 my-8 p-8 xl:w-1/2 xl:mx-auto rounded-xl md:drop-shadow-md">
                <div className="flex flex-col">
                    <h2 className="text-center text-lg mb-6 font-medium">
                        Publica tu producto
                    </h2>
                    <div className="flex flex-col xl:flex-row items-center justify-between mb-6">
                        <label htmlFor="title" className="hidden xl:block">
                            Título
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="titulo"
                            placeholder="Título"
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label htmlFor="category" className="hidden xl:block">
                            Categoría
                        </label>
                        <div className="relative flex items-center w-full xl:w-5/6">
                            <CategoriesIcon className="absolute w-5 ml-5 pointer-events-none" />
                            <select
                                name="categoria"
                                id="categoria"
                                onChange={handleInputChange}
                                required
                                className="appearance-none border border-gray-300 rounded-xl pl-14 text-gray-600 h-12 pr-20 w-full bg-white"
                            >
                                <option value="" defaultChecked hidden>
                                    Categoría
                                </option>
                                <option value="tecnologia">Tecnología</option>
                                <option value="hogar">Hogar</option>
                                <option value="deportes">Deportes</option>
                                <option value="libros">Libros</option>
                                <option value="mascotas">Mascotas</option>
                                <option value="automotriz">Automotriz</option>
                                <option value="juguetes">Juguetes</option>
                            </select>
                            <DownIcon className="absolute w-5 pointer-events-none right-0 mr-5" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label htmlFor="category" className="hidden xl:block">
                            Región
                        </label>
                        <div className="relative flex items-center w-full xl:w-5/6">
                            <LocationIcon className="absolute w-4 ml-5 pointer-events-none" />
                            <select
                                name="region"
                                id="region"
                                onChange={handleInputChange}
                                required
                                className="appearance-none border border-gray-300 rounded-xl pl-14 text-gray-600 h-12 pr-20 w-full bg-white"
                            >
                                <option value="chile">Todo Chile</option>
                                <option value="metropolitana">
                                    Metropolitana
                                </option>
                                <option value="arica">
                                    Arica y Parinacota
                                </option>
                                <option value="tarapaca">Tarapacá</option>
                                <option value="antofagasta">Antofagasta</option>
                                <option value="atacama">Atacama</option>
                                <option value="coquimbo">Coquimbo</option>
                                <option value="valparaiso">Valparaíso</option>
                                <option value="ohiggins">O&apos;Higgins</option>
                                <option value="maule">Maule</option>
                                <option value="nuble">Ñuble</option>
                                <option value="biobio">Biobío</option>
                                <option value="araucania">Araucanía</option>
                                <option value="losrios">Los Ríos</option>
                                <option value="loslagos">Los Lagos</option>
                                <option value="aysen">Aysén</option>
                                <option value="magallanes">
                                    Magallanes y Antártica
                                </option>
                            </select>
                            <DownIcon className="absolute w-5 pointer-events-none right-0 mr-5" />
                        </div>
                    </div>
                    <div className="flex justify-between mb-6">
                        <label
                            htmlFor="description"
                            className="pt-4 hidden xl:block"
                        >
                            Descripción
                        </label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            placeholder="Descripción"
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 rounded-xl p-4 pl-6 h-36 w-full xl:w-5/6"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label htmlFor="price" className="hidden xl:block">
                            Precio
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="precio"
                            placeholder="Precio"
                            onChange={handleInputChange}
                            required
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
                            required
                            className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
                        />
                    </div>
                    <input
                        onClick={handleSell}
                        type="submit"
                        value="Publicar producto"
                        className="hover:cursor-pointer bg-green-400 hover:bg-green-600 font-medium rounded-xl text-white p-4"
                    ></input>
                </div>
            </form>
        </div>
    );
};

export default Sell;
