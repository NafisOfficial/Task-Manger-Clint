import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Providers/AuthProviders/AuthProviders';

const Navbar = () => {

    const { user } = useContext(AuthContex)

    const handleLogout =(event)=>{
        event.preventDefault();
        handleLogOut()
        .then(()=>{
            toast.success('signup successful', {
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        })
        .catch(()=>{
            toast.error('signup successful', {
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        })
    }

    const userProfile = <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img alt={user?.displayName} src={user?.photoURL} />
            </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li><Link>History</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
    </div>

    const loginSingup = <><Link to="/login" className="btn bg-[#007CFD] hover:bg-[#007afdd5] border-none md:btn-md btn-sm md:px-5 px-2 text-white">Login</Link>
        <Link to="/signup" className="btn bg-[#007CFD] hover:bg-[#007afdd5] border-none md:flex hidden md:btn-md btn-sm md:px-5 px-2 text-white">Signup</Link></>

    return (
        <div className="navbar bg-[#7469B6] sticky top-0 z-20">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl text-white">Focus</Link>
            </div>
            <div className="navbar-end gap-3">
                <Link to="/focus" className="md:px-5 px-2 text-white">Goto Focus</Link>
                {user ? userProfile : loginSingup}
            </div>
        </div>
    );
};

export default Navbar;