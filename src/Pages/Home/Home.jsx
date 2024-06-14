import React from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import Features from '../../Components/Home/Features/Features';
import Users from '../../Components/Home/Users/Users';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Features/>
            <Users/>
        </div>
    );
};

export default Home;