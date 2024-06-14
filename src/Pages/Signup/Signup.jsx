import React, { useContext, useState } from 'react';
import signupimg from '../../assets/Photos/register.png'
import { Form, Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContex } from '../../Providers/AuthProviders/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";



const Signup = () => {
    const [error,setError] = useState("")

    const {handleSignUp,handleSignUpByGoogle,handleSignupWithGithub} = useContext(AuthContex)

    const handleSignup=(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const newPassword= event.target.newPassword.value;
        const confirmPassword= event.target.confirmPassword.value;

        if(newPassword===confirmPassword){
            handleSignUp(email,newPassword)
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
                setError("Password or email is not valid");
            });
        }else{
            setError("Password doesn't match")
        }
    }

    const handleGoogleLogin=(event)=>{
        event.preventDefault();
        const provider = new GoogleAuthProvider();
        handleSignUpByGoogle(provider)
        .then(()=>{
            toast.success('Signup successful', {
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
            setError("Fail to signup with google");
        })
    }

    const handleGithubLogin=(event)=>{
        event.preventDefault();
        const provider = new GithubAuthProvider();
        handleSignupWithGithub(provider)
        .then(()=>{
            toast.success('Signup successful', {
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
        }).catch(()=>{
            setError("Fail to signup with github");
        })
    }

    return (
        <div className='bg-[#D1D8EA]'>
            <div className='flex md:flex-row-reverse flex-col py-5 justify-center items-center'>
                <img src={signupimg} className='w-2/4' alt="login" />
                <Form onSubmit={handleSignup} className='flex flex-col gap-5'>
                    <h1 className='text-4xl text-center font-bold'>Register</h1>
                    <p className='text-center text-gray-500'>Signup using social network</p>
                    <div className='flex gap-5 justify-center'>
                        <button onClick={handleGoogleLogin} className='btn rounded-full border-none'><FcGoogle className='text-xl'/></button>
                        <button onClick={handleGithubLogin} className='btn rounded-full border-none'><FaGithub className='text-xl'/></button>
                    </div>
                    <div>
                        <label htmlFor='email'>Email*</label>
                        <input type="text" name='email' id='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="password">New Password*</label>
                        <input type="password" name='password' id='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="password">Confirm Password*</label>
                        <input type="password" name='password' id='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <p className='text-red-500'>{error}</p>
                    <div>
                        <input type="submit" className='btn text-white bg-[#007CFD] hover:bg-[#007afdd5] border-none px-10' value="Signup" />
                    </div>
                    <p>If you already have an account ! Please <Link to="/login" className='text-[#007cfd]'>login</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Signup;