import PublicHeader from "@/components/headers/PublicHeader";
import PrivateHeader from "@/components/headers/PrivateHeader";
import PublicRouter from "@/components/router/PublicRouter";
import PrivateRouter from "@/components/router/PrivateRouter";

const App = () => {
    const login = true;

    return (
        <>
            {login ? <PrivateHeader /> : <PublicHeader />}
            {login ? <PrivateRouter /> : <PublicRouter />}
        </>
    );
};

export default App;
