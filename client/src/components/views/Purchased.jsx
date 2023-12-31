import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SellerCard from "@/components/cards/SellerCard";
import axios from 'axios';

const Purchased = () => {
    const url = "https://sipoback.onrender.com";
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate('/tienda')
    }

    const getProduct = async () => {
        try {
            const endpoint = `/product/${id}`;
            const response = await axios.get(url + endpoint);
            const productData = response.data
            setProduct(productData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    if (!product) return <p>Loading...</p>;

    const { titulo } = product

    return (
        <div className="container p-8 mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center w-full">
                <h2 className="font-bold text-2xl text-sky-400">¡Felicidades! Compraste el artículo:</h2>
                <p className="text-xl font-medium my-5">{titulo}</p>
                <p className="font-medium">Ponte en contacto con el vendedor para gestionar el pago y el envío del artículo.</p>
            </div>
            <div className="mx-auto w-2/3 my-6">
            <SellerCard id={id} region={product.region} />
            </div>
            <div className="flex justify-center">
                <button onClick={handleClick} className="bg-green-400 px-6 py-3 rounded-lg text-white hover:bg-green-500">Volver a la tienda</button>
            </div>
        </div>
    )
}

export default Purchased