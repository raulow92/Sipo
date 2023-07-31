import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SellerCard from "@/components/cards/SellerCard";


const Purchased = () => {
    const url = "http://localhost:3000/tienda";
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    const getData = async () => {
        try {
            const response = await fetch(url);
            let productList = await response.json();
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
            const selectedProduct = products.find((product) => product.product_id == id);
            setProduct(selectedProduct)
        } catch (error) {
            console.log(error);
        }

    }, [id, products]);

    if (!product) return <p>Loading...</p>;

    const { titulo } = product

    return (
        <div className="p-8 mx-16">
            <div className="bg-white rounded-lg shadow-md p-8 text-center w-full">
                <h2 className="font-bold text-2xl text-sky-400">¡Felicidades! Compraste el artículo:</h2>
                <p className="text-xl font-medium my-5">{titulo}</p>
                <p className="font-medium">Ponte en contacto con el vendedor para gestionar el pago y el envío del artículo.</p>
            </div>
            <div className="mx-auto w-2/3 my-6">
                <SellerCard />
            </div>
            <div className="flex justify-center">
                <button onClick={handleClick} className="bg-green-400 px-6 py-3 rounded-lg text-white">Volver a la tienda</button>
            </div>
        </div>
    )
}

export default Purchased