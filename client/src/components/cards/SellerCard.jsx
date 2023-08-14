import UserIcon from "@/components/icons/UserIcon";
import Loader from "@/components/icons/Loader";
import { useState, useEffect } from "react";
import axios from "axios";

const SellerCards = ({ id, region }) => {
  const [seller, setSeller] = useState();
  const [loaded, setLoaded] = useState(false);
  const url = "https://sipoback.onrender.com";

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getSellerData = async () => {
    const endpoint = `/seller/${id}`;
    try {
      const { data: sellerData } = await axios.get(url + endpoint);
      setSeller(sellerData[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoaded(true);
    }
  };

  const betterName = (lugar) => {
    switch (lugar) {
      case "arica":
        return "Arica y Parinacota";
      case "tarapaca":
        return "Tarapacá";
      case "antofagasta":
        return "Antofagasta";
      case "atacama":
        return "Atacama";
      case "coquimbo":
        return "Coquimbo";
      case "valparaiso":
        return "Valparaíso";
      case "ohiggins":
        return "O'Higgins";
      case "maule":
        return "Maule";
      case "biobio":
        return "Biobío";
      case "araucania":
        return "Araucanía";
      case "loslagos":
        return "Los Lagos";
      case "aysen":
        return "Aysén";
      case "magallanes":
        return "Magallanes y Antártica";
      case "metropolitana":
        return "Metropolitana";
      case "losrios":
        return "Los Ríos";
      case "nuble":
        return "Ñuble";
    }
  };

  useEffect(() => {
    getSellerData();
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md relative">
      {loaded ? (
        <div className="flex justify-between">
          <div className="w-full">
            <h2 className="text-xl font-medium mb-1">Detalles del vendedor</h2>
            <div className="border-solid border-t-2 border-sky-300 mb-4 w-3/5"></div>
            <p className="mb-1">
              {seller.nombre} {seller.apellidos}
            </p>
            <p className="mb-1">{seller.email}</p>
            <p className="mb-1">{betterName(region)}</p>
            <p>Vendedor desde el {formatDate(seller.fecha)}</p>
          </div>
          {seller.image != null ? (
            <div className="w-20 h-20 mx-auto my-auto absolute top-8 right-10">
              <img
                src={seller.image}
                alt={seller.nombre}
                className="object-cover w-full h-full rounded-full border-2 border-sky-400"
              />
            </div>
          ) : (
            <UserIcon className="w-16 mx-auto absolute top-8 right-10" />
          )}
        </div>
      ) : (
        <Loader className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-400 fill-sky-400" />
      )}
    </div>
  );
};

export default SellerCards;
