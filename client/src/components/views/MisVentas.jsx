import SellerProductCard from "@/components/cards/SellerProductCard";
import Loader from "@/components/icons/Loader";
import { useContext, useEffect, useState } from "react";
import Context from "../../Context";
import axios from "axios";

const MisVentas = () => {
    const {
        usuario,
        setUsuario: setUsuarioGlobal,
        userSells,
        setUserSells,
    } = useContext(Context);
    const [loaded, setLoaded] = useState(false);

    const url = "https://sipoback.onrender.com";

    const getData = async (data) => {
        const endpoint = `/users/${data.user_id}/ventas`;
        try {
            const { data: productList } = await axios.get(url + endpoint);
            if (productList === "") {
                setUserSells([]);
            } else setUserSells(productList);
        } catch (error) {
            setUserSells([]);
            console.log(error);
        } finally {
            setLoaded(true);
        }
    };

    const getUserData = async () => {
        const endpoint = "/users";
        const token = localStorage.getItem("token");
        try {
            const { data } = await axios.get(url + endpoint, {
                headers: { Authorization: "Bearer " + token },
            });
            const favEndpoint = `/users/${data.user_id}/favorites`;
            const { data: favorites } = await axios.get(url + favEndpoint);
            const result = {
                data,
                favorites,
            };
            setUsuarioGlobal(result);
            getData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="container mx-auto mt-6">
            <h2 className="text-center font-medium text-2xl mb-8">
                Mis Ventas
            </h2>
            {(!userSells || userSells.length === 0) && loaded && (
                <div className="bg-white rounded-lg shadow-md p-8 mx-auto my-6 text-center w-5/6">
                <h2 className="font-bold text-xl text-sky-400">
                        No tienes ventas aún.
                    </h2>
                </div>
            )}
            {loaded ? (
                <div className="mx-6 lg:mx-16 mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {userSells.map(
                        ({
                            product_id,
                            image,
                            titulo,
                            descripcion,
                            precio,
                        }) => (
                            <SellerProductCard
                                id={product_id}
                                key={product_id + "A"}
                                img={image}
                                titulo={titulo}
                                descripcion={descripcion}
                                precio={precio}
                            />
                        )
                    )}
                </div>
            ) : (
                <Loader className="inline w-20 h-20 mt-12 mr-2 text-gray-200 animate-spin dark:text-gray-400 fill-sky-400" />
            )}
        </div>
    );
};

export default MisVentas;
