import { useState, useEffect } from "react";
import axios from "axios";

const SellerCards = ({ id }) => {
    const [seller, setSeller] = useState();
    const [loaded, setLoaded] = useState(false);
    const url = "http://localhost:3000";

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
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

    useEffect(() => {
        getSellerData();
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            {loaded ? (
                <>
                    <h2 className="text-xl font-medium mb-1">
                        Detalles del vendedor
                    </h2>
                    <div className="border-solid border-t-2 border-sky-300 mb-4"></div>
                    <p className="mb-1">{seller.nombre} {seller.apellidos}</p>
                    <p className="mb-1">{seller.email}</p>
                    <p>Vendedor desde el {formatDate(seller.fecha)}</p>
                </>
            ) : (
                <div className="alert alert-secondary">
                    <p>Cargando data!!!</p>
                    <p>Por favor espere...</p>
                </div>
            )}
        </div>
    );
};

export default SellerCards;
