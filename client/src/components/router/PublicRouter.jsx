import { Route, Routes } from "react-router-dom";
import WelcomeMain from "@/components/views/WelcomeMain";
import SignUpMain from "@/components/views/SignUpMain";
import LogInMain from "@/components/views/LogInMain";
import Tienda from "@/components/views/Tienda";

const PublicRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<WelcomeMain />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/signup" element={<SignUpMain />} />
                <Route path="/login" element={<LogInMain />} />
            </Routes>
        </>
    );
};

export default PublicRouter;