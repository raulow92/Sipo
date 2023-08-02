import SellerProductCard from "@/components/cards/SellerProductCard";
import { useContext, useEffect, useState } from "react";
import Context from "../../Context";
import axios from "axios";

const MisVentas = () => {
  const { usuario, userSells, setUserSells } = useContext(Context);
  const [loaded, setLoaded] = useState(false);

  const url = "http://localhost:3000";

  const getData = async () => {
    const endpoint = `/users/${usuario.user_id}/ventas`;
    try {
      const { data: productList } = await axios.get(url + endpoint);
      setUserSells(productList);
    } catch (error) {
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
        <div className="alert alert-secondary">
          <p>Cargando data!!!</p>
          <p>Porfavor espere...</p>
        </div>
      )}
    </div>
  );
};

export default MisVentas;
