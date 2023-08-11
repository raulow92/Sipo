import UserIcon from "@/components/icons/UserIcon";
import { useState, useEffect } from "react";
import axios from "axios";

const SellerCards = ({ id, region }) => {
  const [seller, setSeller] = useState();
  const [loaded, setLoaded] = useState(false);
  const url = "http://localhost:3000";

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
        break;
      case "tarapaca":
        return "Tarapacá";
        break;
      case "antofagasta":
        return "Antofagasta";
        break;
      case "atacama":
        return "Atacama";
        break;
      case "coquimbo":
        return "Coquimbo";
        break;
      case "valparaiso":
        return "Valparaíso";
        break;
      case "ohiggins":
        return "O'Higgins";
        break;
      case "maule":
        return "Maule";
        break;
      case "biobio":
        return "Biobío";
        break;
      case "araucania":
        return "Araucanía";
        break;
      case "loslagos":
        return "Los Lagos";
        break;
      case "aysen":
        return "Aysén";
        break;
      case "magallanes":
        return "Magallanes y Antártica";
        break;
      case "metropolitana":
        return "Metropolitana";
        break;
      case "losrios":
        return "Los Ríos";
        break;
      case "nuble":
        return "Ñuble";
        break;
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
        <button type="button" className="bg-indigo-500 ..." disabled>
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            <></>
          </svg>
          Cargando...
        </button>
      )}
    </div>
  );
};

export default SellerCards;
