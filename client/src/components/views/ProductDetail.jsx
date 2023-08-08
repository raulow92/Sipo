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
    const url = "http://localhost:3000/tienda";
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const { usuario } = useContext(Context);

    const handleClick = async (e) => {
        e.preventDefault();
        const endpoint = `/buy`;
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

    const getData = async () => {
        try {
            const response = await axios.get(url);
            const productList = response.data
            setProducts(productList);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        try {
            const selectedProduct = products.find(
                (product) => product.product_id == id
            );
            setProduct(selectedProduct);
        } catch (error) {
            console.log(error);
        }
    }, [id, products]);

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
                    <SellerCard />
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
                            onClick={handleClick}
                            className="bg-sky-400 hover:bg-sky-500 w-5/6 py-3 text-white font-medium rounded-lg"
                        >
                            Comprar
                        </button>
                        <HeartIcon
                            filled="none"
                            stroke="white"
                            className="w-10 mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
