import HeartIcon from "@/components/icons/HeartIcon";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Context";

const priceFormat = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

const ProductCard = ({
  id,
  img,
  titulo,
  descripcion,
  precio,
  handleFavorite,
}) => {
  const { usuario } = useContext(Context);
  const navigate = useNavigate();
  const [heartFill, setHeartFill] = useState("none");
  const [heartStroke, setHeartStroke] = useState("white");

  const handleClick = (e) => {
    navigate(`/product/${e.currentTarget.id}`);
  };

  const handleHeartFill = () => {
    const findFav = (producto) => {
      return producto.product_id === id;
    };
    if (usuario.favorites.find(findFav)) {
      setHeartFill("red");
      setHeartStroke("red");
    } else {
      setHeartFill("none");
      setHeartStroke("white");
    }
  };

  useEffect(() => {
    handleHeartFill();
  }, []);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setHeartFill(heartFill === "none" ? "red" : "none");
    setHeartStroke(heartStroke === "white" ? "red" : "white");
    handleFavorite(id);
  };

  return (
    <div
      className="flex flex-col justify-between bg-white h-90 p-3 rounded-xl relative hover:cursor-pointer shadow-md"
      id={id}
      onClick={handleClick}
    >
      <div>
        <img className="rounded-xl xl:h-44 w-full" src={img} alt="img" />
        <HeartIcon
          id={id}
          className="w-6 absolute right-6 top-6 hover:text-red-600"
          filled={heartFill}
          stroke={heartStroke}
          onClick={handleHeartClick}
        />
        <h3 className="text-lg font-medium my-2 mx-2">{titulo}</h3>
        <p className="text-sm mx-2 h-24">{descripcion}</p>
      </div>
      <div>
        <p className="text-xl font-extrabold mt-2 mx-2 bg-white text-sky-400">
          {priceFormat.format(precio)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
