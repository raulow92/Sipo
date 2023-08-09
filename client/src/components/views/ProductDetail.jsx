import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeartIcon from "@/components/icons/HeartIcon";
import SellerCard from "@/components/cards/SellerCard";
import axios from "axios";
import { useContext } from "react";
import Context from "../../Context";

const priceFormat = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
});

const ProductDetail = () => {
    const url = "http://localhost:3000/";
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const { usuario, setUsuario: setUsuarioGlobal } = useContext(Context);
    const [heartFill, setHeartFill] = useState("none");
    const [heartStroke, setHeartStroke] = useState("white");

    const handleBuy = async (e) => {
        e.preventDefault();
        const endpoint = `buy`;
        try {
            const { data: response } = await axios.post(url + endpoint, {
                product_id: id,
                user_id: usuario.data.user_id,
            });
            console.log(response);
            navigate(`/purchased/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    const getProduct = async () => {
        try {
            const endpoint = `product/${id}`;
            const response = await axios.get(url + endpoint);
            const productData = response.data;
            setProduct(productData);
        } catch (error) {
            console.log(error);
        }
    };

    const handleHeartFill = () => {
        const findFav = (producto) => {
            return producto.product_id == id;
        };
        if (usuario.favorites.find(findFav)) {
            setHeartFill("red");
            setHeartStroke("red");
        } else {
            setHeartFill("none");
            setHeartStroke("white");
        }
    };

    const getUserData = async () => {
        const endpoint = "users";
        const token = localStorage.getItem("token");
        try {
            const { data } = await axios.get(url + endpoint, {
                headers: { Authorization: "Bearer " + token },
            });
            const favEndpoint = `user/${data.user_id}/favorites`;
            const { data: favorites } = await axios.get(url + favEndpoint);
            const result = {
                data,
                favorites,
            };
            setUsuarioGlobal(result);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFavorite = async (id) => {
        const endpoint = "favorites";
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

    const handleHeartClick = (e) => {
        e.stopPropagation();
        setHeartFill(heartFill === "none" ? "red" : "none");
        setHeartStroke(heartStroke === "white" ? "red" : "white");
        handleFavorite(id);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getProduct();
        getUserData();
        handleHeartFill();
    }, []);


    if (!product) return <p>Loading...</p>;

    const { product_id, image, titulo, descripcion, precio } = product;

    return (
        <div className="container mx-auto mt-6 px-6 lg:px-16">
            <h1 className="text-2xl font-medium mb-4">{titulo}</h1>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="">
                    <img
                        className="w-full rounded-lg"
                        src={image}
                        alt={titulo}
                    />
                </div>
                <div>
                    <SellerCard id={id} />
                    <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-medium mb-1">
                            Detalles del producto
                        </h2>
                        <div className="border-solid border-t-2 border-sky-300 mb-4"></div>
                        <p className="mb-4">{descripcion}</p>
                        <p className="text-2xl font-bold text-sky-400">
                            {priceFormat.format(precio)}
                        </p>
                    </div>
                    <div className="flex justify-between item-center my-6">
                        <button
                            id={product_id}
                            onClick={handleBuy}
                            className="bg-sky-400 hover:bg-sky-500 w-5/6 py-3 text-white font-medium rounded-lg"
                        >
                            Comprar
                        </button>
                        <HeartIcon
                            filled={heartFill}
                            stroke={heartStroke}
                            onClick={handleHeartClick}
                            className="w-10 mx-auto cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
