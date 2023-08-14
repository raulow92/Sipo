import { Route, Routes } from "react-router-dom";
import WelcomeMain from "@/components/views/WelcomeMain";
import SignUpMain from "@/components/views/SignUpMain";
import LogInMain from "@/components/views/LogInMain";
import Loader from "@/components/icons/Loader";


const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeMain />} />
        <Route path="/signup" element={<SignUpMain />} />
        <Route path="/login" element={<LogInMain />} />
        <Route path="*" element={<Loader className="inline w-20 h-20 mt-12 text-gray-200 animate-spin dark:text-gray-400 fill-sky-400"/>} /> 
      </Routes>
    </>
  );
};

export default PublicRouter;
