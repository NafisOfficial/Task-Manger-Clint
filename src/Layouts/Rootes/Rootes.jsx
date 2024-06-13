import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Banner from "../../Components/Home/Banner/Banner";
import Features from "../../Components/Home/Features/Features";
import Users from "../../Components/Home/Users/Users";

const Rootes = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Features/>
            <Users/>
        </div>
    );
};

export default Rootes;