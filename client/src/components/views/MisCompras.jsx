import ProductCard from "@/components/cards/ProductCard";
import Loader from "@/components/icons/Loader";
import { useContext, useEffect, useState } from "react";
import Context from "../../Context";
import axios from "axios";

const MisCompras = () => {
  const {
    usuario,
    setUsuario: setUsuarioGlobal,
    userBuys,
    setUserBuys,
  } = useContext(Context);
  const [loaded, setLoaded] = useState(false);
  const url = "http://localhost:3000";

  const getData = async (data) => {
    const endpoint = `/buys/${data.user_id}`;
    try {
      const { data: productList } = await axios.get(url + endpoint);
      if(productList === '')
      {
        setUserBuys([])
      }
      else
      setUserBuys(productList);
    } catch (e) {
      console.log(e);
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
      getData(data);
    } catch (error) {
      console.log(error);
    }
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
        getUserData();
      } else {
        try {
          const { data: response } = await axios.delete(
            url + endpoint + userEndpoint
          );
          getUserData();
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-center font-medium text-2xl mb-8">Mis Compras</h2>
      {loaded ? (
        <div className="mx-6 lg:mx-16 mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {userBuys.map(
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
        <Loader className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-400 fill-sky-400" />
      )}
    </div>
  );
};

export default MisCompras;
