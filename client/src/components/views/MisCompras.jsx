import ProductCard from "@/components/cards/ProductCard";
import { useContext, useEffect, useState } from "react";
import Context from "../../Context";
import axios from "axios";

const MisCompras = () => {
    const { usuario, setUsuario: setUsuarioGlobal, userBuys, setUserBuys } = useContext(Context);
    const [loaded, setLoaded] = useState(false);

    const url = "http://localhost:3000";

    const getData = async () => {
        const endpoint = `/buys/${usuario.data.user_id}`;
        try {
            const { data: productList } = await axios.get(url + endpoint);
            setUserBuys(productList);
        } catch (error) {
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
            const favEndpoint = `/user/${data.user_id}/favorites`;
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
        const endpoint = "/favorites";
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

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mx-auto mt-6">
            <h2 className="text-center font-medium text-2xl mb-8">
                Mis Compras
            </h2>
            {loaded ? (
                <div className="mx-6 lg:mx-16 mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {userBuys.map(
                        ({
                            product_id,
                            image,
                            titulo,
                            descripcion,
                            precio,
                        }) => (
                            <ProductCard
                                id={product_id}
                                key={product_id + "A"}
                                img={image}
                                titulo={titulo}
                                descripcion={descripcion}
                                precio={precio}
                                handleFavorite={handleFavorite}
                            />
                        )
                    )}
                </div>
            ) : (
                <div className="alert alert-secondary">
                    <p>Cargando data!!!</p>
                    <p>Por favor espere...</p>
                </div>
            )}
        </div>
    );
};

export default MisCompras;
