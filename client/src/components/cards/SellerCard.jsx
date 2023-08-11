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
    <div className="bg-white p-6 rounded-lg shadow-md">
      {loaded ? (
        <div className="flex justify-between">
          <div className="basis-2/3">
            <h2 className="text-xl font-medium mb-1">Detalles del vendedor</h2>
            <div className="border-solid border-t-2 border-sky-300 mb-4"></div>
            <p className="mb-1">
              {seller.nombre} {seller.apellidos}
            </p>
            <p className="mb-1">{seller.email}</p>
            <p>{betterName(region)}</p>
            <p>Vendedor desde el {formatDate(seller.fecha)}</p>
          </div>
          {seller.image != null ? (
            <div className="w-20 h-20 mx-auto my-auto">
              <img
                src={seller.image}
                alt="..."
                className="object-cover w-full h-full rounded-full border border-sky-400"
              />
            </div>
          ) : (
            <UserIcon className="w-20 mx-auto" />
          )}
        </div>
      ) : (
        <button type="button" class="bg-indigo-500 ..." disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            <></>
          </svg>
          Cargando...
        </button>
      )}
    </div>
  );
};

export default SellerCards;
