import PublicHeader from "@/components/headers/PublicHeader";
import PrivateHeader from "@/components/headers/PrivateHeader";
import PublicRouter from "@/components/router/PublicRouter";
import PrivateRouter from "@/components/router/PrivateRouter";
import Context from "./Context";
import { useState } from "react";

const App = () => {
    const login = false;
    const [usuario, setUsuario] = useState({})

    return (
        <>
        <Context.Provider value = {{usuario, setUsuario }} >
            {login ? <PrivateHeader /> : <PublicHeader />}
            {login ? <PrivateRouter /> : <PublicRouter />}
        </Context.Provider>
        </>
    );
};

export default App;
