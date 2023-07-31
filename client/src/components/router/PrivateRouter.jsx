import { Route, Routes } from "react-router-dom";
import Tienda from "@/components/views/Tienda";
import SignUpMain from "@/components/views/SignUpMain";
import LogInMain from "@/components/views/LogInMain";
import ProductDetail from "@/components/views/ProductDetail";
import Purchased from "@/components/views/Purchased";
import Sell from "@/components/views/Sell";

const PrivateRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Tienda />} />
                <Route path="/" element={<SignUpMain />} />
                <Route path="/" element={<LogInMain />} />
                <Route path="/vender" element={<Sell />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/purchased/:id" element={<Purchased />} />
            </Routes>
        </>
    );
};

export default PrivateRouter;