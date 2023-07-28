import { Route, Routes } from "react-router-dom";
import Tienda from "@/components/views/Tienda";
import SignUpMain from "@/components/views/SignUpMain";
import LogInMain from "@/components/views/LogInMain";

const PrivateRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Tienda />} />
                <Route path="/" element={<SignUpMain />} />
                <Route path="/" element={<LogInMain />} />
            </Routes>
        </>
    );
};

export default PrivateRouter;