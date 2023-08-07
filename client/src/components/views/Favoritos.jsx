import ProductCard from "@/components/cards/ProductCard";
import { useContext, useEffect, useState } from "react";
import Context from "../../Context";
import axios from "axios";

const Favoritos = () => {
  const { usuario } = useContext(Context);
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const url = "http://localhost:3000";

  const getData = async () => {
    const endpoint = `/favorites/${usuario.data.user_id}`;
    try {
      const { data: favoriteList } = await axios.get(url + endpoint);
      setFavorites(favoriteList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return loaded ? (
    <div className="container mx-auto mt-6">
      <h2 className="text-center font-medium text-2xl mb-8">Favoritos</h2>
      <div className="mx-6 lg:mx-16 mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {favorites.map(({ product_id, image, titulo, descripcion, precio }) => (
          <ProductCard
            id={product_id}
            key={product_id + "A"}
            img={image}
            titulo={titulo}
            descripcion={descripcion}
            precio={precio}
          />
        ))}
      </div>
    </div>
  ) : (
    <h1>Cargando bitch 💅🏻</h1>
  );
};

export default Favoritos;
