import PublicHeader from "@/components/header/PublicHeader";
import WelcomeMain from "@/components/main/WelcomeMain";
import SignUpMain from "@/components/main/SignUpMain";
import LogInMain from "@/components/main/LogInMain";

const App = () => {
    return (
        <>
          <PublicHeader />
          <LogInMain />
          <SignUpMain />
          {/* <WelcomeMain /> */}
        </>
    );
};

export default App;
