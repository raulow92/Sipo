import SellerProductCard from "@/components/cards/SellerProductCard";
import Loader from "@/components/icons/Loader";
import { useContext, useEffect, useState } from "react";
import Context from "../../Context";
import axios from "axios";

const MisVentas = () => {
  const { usuario, userSells, setUserSells } = useContext(Context);
  const [loaded, setLoaded] = useState(false);

  const url = "http://localhost:3000";

  const getData = async () => {
    const endpoint = `/users/${usuario.data.user_id}/ventas`;
    try {
      const { data: productList } = await axios.get(url + endpoint);
      setUserSells(productList);
    } catch (error) {
      setUserSells([]);
      console.log(error);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-center font-medium text-2xl mb-8">Mis Ventas</h2>
      {loaded ? (
        <div className="mx-6 lg:mx-16 mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {userSells.map(
            ({ product_id, image, titulo, descripcion, precio }) => (
              <SellerProductCard
                id={product_id}
                key={product_id + "A"}
                img={image}
                titulo={titulo}
                descripcion={descripcion}
                precio={precio}
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

export default MisVentas;
