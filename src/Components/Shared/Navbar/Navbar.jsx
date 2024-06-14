import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-[#7469B6] sticky top-0 z-20">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl text-white">Focus</Link>
            </div>
            <div className="navbar-end gap-3">
                <Link to="/focus" className="md:px-5 px-2 text-white">Goto Focus</Link>
                <Link to="/login" className="btn bg-[#007CFD] hover:bg-[#007afdd5] border-none md:btn-md btn-sm md:px-5 px-2 text-white">Login</Link>
                <Link to="/signup" className="btn bg-[#007CFD] hover:bg-[#007afdd5] border-none md:flex hidden md:btn-md btn-sm md:px-5 px-2 text-white">Signup</Link>
            </div>
        </div>
    );
};

export default Navbar;