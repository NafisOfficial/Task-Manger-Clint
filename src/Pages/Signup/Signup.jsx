import React from 'react';
import signupimg from '../../assets/Photos/register.png'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='bg-[#D1D8EA]'>
            <div className='flex md:flex-row-reverse flex-col py-5 justify-center items-center'>
                <img src={signupimg} className='w-2/4' alt="login" />
                <div className='flex flex-col gap-5'>
                    <h1 className='text-4xl text-center font-bold'>Register</h1>
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
                    <div>
                        <input type="submit" className='btn text-white bg-[#007CFD] hover:bg-[#007afdd5] border-none px-10' value="Signup" />
                    </div>
                    <p>If you already have an account ! Please <Link to="/login" className='text-[#007cfd]'>login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;