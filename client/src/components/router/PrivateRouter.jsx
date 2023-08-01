import { Route, Routes } from "react-router-dom";
import Tienda from "@/components/views/Tienda";
import SignUpMain from "@/components/views/SignUpMain";
import LogInMain from "@/components/views/LogInMain";
import ProductDetail from "@/components/views/ProductDetail";
import Purchased from "@/components/views/Purchased";
import Sell from "@/components/views/Sell";
import WelcomeMain from "@/components/views/WelcomeMain";

const PrivateRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<WelcomeMain />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/signup" element={<SignUpMain />} />
                <Route path="/login" element={<LogInMain />} />
                <Route path="/vender" element={<Sell />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/purchased/:id" element={<Purchased />} />
            </Routes>
        </>
    );
};

export default PrivateRouter;