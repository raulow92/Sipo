import { useState, useEffect } from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import CategoriesIcon from "@/components/icons/CategoriesIcon";
import DownIcon from "@/components/icons/DownIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import Loader from "@/components/icons/Loader";
import ProductCard from "@/components/cards/ProductCard";
import axios from "axios";
import { useContext } from "react";
import Context from "../../Context";

const Tienda = () => {
  const url = "http://localhost:3000";
  const [selectedRegion, setSelectedRegion] = useState("Todo Chile");
  const [products, setProducts] = useState([]);
  const [filters, setFilter] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { usuario, setUsuario: setUsuarioGlobal } = useContext(Context);

  const getData = async () => {
    const endpoint = "/tienda";
    try {
      const { data: productList } = await axios.get(url + endpoint);
      setProducts(productList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoaded(true);
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
    finally{
      getData();
    }
  };

  const handleFilters = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setFilter({ ...filters, ...field });
  };

  const getFilteredData = async () => {
    let filter = [];
    const values = [];

    const addFilter = (campo, valor) => {
      values.push(valor);
      filter.push(`${campo}=${valor}`);
    };
    if (filters.categoria != undefined && filters.categoria != "all")
      addFilter("categoria", filters.categoria);
    if (filters.region != undefined && filters.region != "chile")
      addFilter("region", filters.region);
    if (filters.buscador) addFilter("buscador", filters.buscador);

    let endpoint = "/tienda/filters?";

    if (filter.length > 0) {
      filter = filter.join("&");
      endpoint += `${filter}`;
    } else if (filter.length == 0) {
      endpoint = "/tienda";
    }
    try {
      const { data: productList } = await axios.get(url + endpoint);
      setProducts(productList);
      handleRegionChange();
    } catch (error) {
      console.log(error);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleRegionChange = () => {
    const regionSelect = document.getElementById("region");
    setSelectedRegion(regionSelect.options[regionSelect.selectedIndex].text);
  };

  const handleFavorite = async (id) => {
    const endpoint = "/favorites";
    const userEndpoint = `/${usuario.data.user_id}/${id}`;
    try {
      const { data: userFavorites } = await axios.get(
        url + endpoint + userEndpoint
      );
      if (!userFavorites) {
        const { data: response } = await axios.post(url + endpoint, {
          user_id: usuario.data.user_id,
          product_id: id,
        });
        console.log(response);
        getUserData();
      } else {
        try {
          const { data: response } = await axios.delete(
            url + endpoint + userEndpoint
          );
          console.log(response);
          getUserData();
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter((product) => {
    return product.user_id != usuario.data.user_id && product.vendido === false;
  });

  return (
    <div className="container mx-auto mt-6">
      <div className="flex flex-col xl:flex-row justify-center bg-white mx-6 lg:mx-16  p-6 rounded-xl shadow-md">
        <div className="flex items-center mr-4 w-full xl:w-2/5">
          <SearchIcon
            className="absolute w-5 ml-5 pointer-events-none"
            color="#38bdf8"
          />
          <input
            name="buscador"
            id="buscador"
            type="text"
            placeholder="Estoy buscando..."
            className="border border-gray-300 rounded-xl pl-14 h-12 pr-20 w-full hover:bg-gray-100 ease-in-out duration-300"
            onChange={handleFilters}
          />
        </div>
        <div className="relative flex items-center mr-4 mt-3 w-full xl:mt-0 xl:w-1/5">
          <CategoriesIcon className="absolute w-5 ml-5 pointer-events-none" />
          <select
            name="categoria"
            id="categoria"
            className="appearance-none border border-gray-300 rounded-xl pl-14 text-gray-600 h-12 pr-20 w-full bg-white hover:cursor-pointer hover:bg-gray-100 ease-in-out duration-300"
            onChange={handleFilters}
          >
            <option value="all" defaultChecked hidden>
              Categoría
            </option>
            <option value="all">Todo</option>
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
            onChange={handleFilters}
            name="region"
            id="region"
            className="appearance-none border border-gray-300 rounded-xl pl-14 text-gray-600 h-12 pr-20 w-full bg-white hover:cursor-pointer hover:bg-gray-100 ease-in-out duration-300"
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
          onClick={getFilteredData}
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
        <p>Mostrando: {selectedRegion}</p>
      </div>
      {loaded ? (
        <div className="mx-6 lg:mx-16 mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(
            ({ product_id, image, titulo, descripcion, precio }) => (
              <ProductCard
                id={product_id}
                key={product_id + "A"}
                img={image}
                titulo={titulo}
                descripcion={descripcion}
                precio={precio}
                handleFavorite={handleFavorite}
              />
            )
          )}
        </div>
      ) : (
        <Loader className="inline w-20 h-20 mt-4 mr-2 text-gray-200 animate-spin dark:text-gray-400 fill-sky-400" />
      )}
    </div>
  );
};

export default Tienda;
