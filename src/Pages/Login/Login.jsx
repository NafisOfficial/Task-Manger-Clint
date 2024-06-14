import React from 'react';
import login from '../../assets/Photos/login.png'
import { Form, Link } from 'react-router-dom';

const Login = () => {

    const handleLogin=(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password= event.target.password.value;

        console.log(email,password);
    }




    return (
        <div className='bg-[#D1D8EA]'>
            <div className='flex md:flex-row flex-col py-5 justify-center items-center'>
                <img src={login} className='w-2/4' alt="login" />
                <Form onSubmit={handleLogin} className='flex flex-col gap-5'>
                    <h1 className='text-4xl text-center font-bold'>Login</h1>
                    <div>
                        <label htmlFor='email'>Email*</label>
                        <input type="text" name='email' id='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="password">Password*</label>
                        <input type="password" name='password' id='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="submit" className='btn text-white bg-[#007CFD] hover:bg-[#007afdd5] border-none px-10' value="Login" />
                    </div>
                    <p>If you don't have an account ! Please <Link to="/signup" className='text-[#007cfd]'>register</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Login;