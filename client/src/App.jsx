import PublicHeader from "@/components/headers/PublicHeader";
import PrivateHeader from "@/components/headers/PrivateHeader";
import PublicRouter from "@/components/router/PublicRouter";
import PrivateRouter from "@/components/router/PrivateRouter";
import Footer from "@/components/views/Footer";
import Context from "./Context";
import { useState } from "react";

const App = () => {
    const [usuario, setUsuario] = useState(null)
    const [userSells, setUserSells] = useState(null)
    const [userBuys, setUserBuys] = useState(null)

    return (
        <>
            <Context.Provider value = {{usuario, setUsuario, userSells, setUserSells, userBuys, setUserBuys }} >
                {usuario ? <PrivateHeader /> : <PublicHeader />}
                {usuario ? <PrivateRouter /> : <PublicRouter />}
            </Context.Provider>
            <Footer />
        </>
    );
};

export default App;
