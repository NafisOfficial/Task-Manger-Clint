import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";

const Rootes = () => {
    const location = useLocation();
    const loginOrSignUp = location.pathname==="/login" || location.pathname==="/signup"

    return (
        <div>
            <Navbar/>
            <Outlet/>
            {loginOrSignUp ||<Footer/>}
        </div>
    );
};

export default Rootes;