import { useState, useEffect, useContext } from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import CategoriesIcon from "@/components/icons/CategoriesIcon";
import DownIcon from "@/components/icons/DownIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import ProductCard from "@/components/cards/ProductCard";
import Context from "../../Context";
import axios from "axios";

const Tienda = () => {
  const { usuario } = useContext(Context)

  const url = "http://localhost:3000/tienda";
  const [region, setRegion] = useState("Todo Chile");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(url);
      let productList = await response.json();
      setProducts(productList);
      console.log(productList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleBuscar = () => setRegion(selectedRegion);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.options[e.target.selectedIndex].text);
  };

  console.log(usuario.email)

  return (
    <div className="container mx-auto mt-6">
      <div className="flex flex-col xl:flex-row justify-center bg-white mx-6 lg:mx-16  p-6 rounded-xl shadow-md">
        <div className="flex items-center mr-4 w-full xl:w-2/5">
          <SearchIcon
            className="absolute w-5 ml-5 pointer-events-none"
            color="#38bdf8"
          />
          <input
            type="text"
            placeholder="Estoy buscando..."
            className="border border-gray-300 rounded-xl pl-14 h-12 pr-20 w-full"
          />
        </div>
        <div className="relative flex items-center mr-4 mt-3 w-full xl:mt-0 xl:w-1/5">
          <CategoriesIcon className="absolute w-5 ml-5 pointer-events-none" />
          <select
            name="category"
            id="category"
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
        <div className="relative flex items-center mr-4 mt-3 w-full xl:mt-0 xl:w-3/12">
          <LocationIcon className="absolute w-4 ml-5 pointer-events-none" />
          <select
            onChange={handleRegionChange}
            name="region"
            id="region"
            className="appearance-none border border-gray-300 rounded-xl pl-14 text-gray-600 h-12 pr-20 w-full bg-white"
          >
            <option value="chile">Todo Chile</option>
            <option value="metropolitana">Metropolitana</option>
            <option value="arica">Arica y Parinacota</option>
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
            <option value="magallanes">Magallanes y Antártica</option>
          </select>
          <DownIcon className="absolute w-5 pointer-events-none right-0 mr-5" />
        </div>
        <div
          className="relative flex items-center mt-3 xl:mt-0"
          onClick={handleBuscar}
        >
          <SearchIcon
            color="white"
            className="absolute w-5 ml-6 pointer-events-none"
          />
          <button className="bg-sky-400 hover:bg-sky-500 text-white font-medium px-5 py-3 rounded-xl pl-14 pr-8 w-full">
            Buscar
          </button>
        </div>
      </div>
      <div className="mx-16 mt-8 font-medium text-lg">
        <p>Mostrando: {region}</p>
      </div>
      {loaded ? (

        <div className="mx-6 lg:mx-16 mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map(({ product_id, image, titulo, descripcion, precio }) => (
                    <ProductCard
                      id={product_id}
                      key={product_id + "A"}
                      img={image}
                      titulo={titulo}
                      descripcion={descripcion}
                      precio={precio}
                      filled={false}
                    />
                  ))}
        </div>
      ) : (
        <div className="alert alert-secondary">
          <p>Cargando data!!!</p>
          <p>Porfavor espere...</p>
        </div>
      )}
    </div>
  );
};

export default Tienda;
