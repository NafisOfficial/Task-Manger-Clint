import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Banner from "../../Components/Home/Banner/Banner";
import Features from "../../Components/Home/Features/Features";
import Users from "../../Components/Home/Users/Users";
import Footer from "../../Components/Shared/Footer/Footer";

const Rootes = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Features/>
            <Users/>
            <Footer/>
        </div>
    );
};

export default Rootes;