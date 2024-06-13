import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Banner from "../../Components/Home/Banner/Banner";

const Rootes = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default Rootes;