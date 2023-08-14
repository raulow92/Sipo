import { Route, Routes } from "react-router-dom";
import Tienda from "@/components/views/Tienda";
import ProductDetail from "@/components/views/ProductDetail";
import Purchased from "@/components/views/Purchased";
import Sell from "@/components/views/Sell";
import WelcomeMain from "@/components/views/WelcomeMain";
import AddedProduct from "@/components/views/AddedProduct";
import Dashboard from "@/components/views/Dashboard";
import MisDatos from "@/components/views/MisDatos";
import MisCompras from "@/components/views/MisCompras";
import Favoritos from "@/components/views/Favoritos";
import MisVentas from "@/components/views/MisVentas";
import Loader from "@/components/icons/Loader";

const PrivateRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<WelcomeMain />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/vender" element={<Sell />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/agregado" element={<AddedProduct />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/purchased/:id" element={<Purchased />} />
                <Route path="/mis-datos" element={<MisDatos />} />
                <Route path="/mis-compras" element={<MisCompras />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/mis-ventas" element={<MisVentas />} />
                <Route path="*" element={<Loader className="inline w-20 h-20 mt-12 text-gray-200 animate-spin dark:text-gray-400 fill-sky-400"/>} /> 
            </Routes>
        </>
    );
};

export default PrivateRouter;