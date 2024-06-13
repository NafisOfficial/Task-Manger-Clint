import React from 'react';
import { PiStudentBold } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";
import { FaHouseUser } from 'react-icons/fa';

const Users = () => {
    return (
        <div className='bg-[#D1D8EA]'>
            <div className='p-12 '>
                <h1 className='font-bold text-4xl'>Our Consumers</h1>
                <p className='text-gray-500 my-2'>Each and every classes people can benefit by this application.</p>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                    <div className='shadow-xl p-5 rounded bg-white'>
                        <PiStudentBold className='text-8xl' />
                        <div>
                            <h3 className='text-xl font-bold'>Students</h3>
                            <p className='text-gray-500'>Students has to manage their home or assignment everyday.They have to handle a lot of task.Most of the time they forgot some task. They can not finish right task in right time.So the can make a great benefit using it</p>
                        </div>
                    </div>
                    <div className='shadow-xl p-5 rounded bg-white'>
                        <FaUserDoctor className='text-7xl' />
                        <div>
                            <h3 className='text-xl font-bold'>Doctors</h3>
                            <p className='text-gray-500'>Doctors are one of the most busiest person. They have to handle a lot of patient. It will help them to manage their task. Assemble their task. And perform right task in right time.</p>
                        </div>
                    </div>
                    <div className='shadow-xl p-5 rounded bg-white'>
                        <FcBusinessman className='text-7xl' />
                        <div>
                            <h3 className='text-xl font-bold'>Business Holder</h3>
                            <p className='text-gray-500'>Every Business holder have to handle a lot of task. They user analog note pad to write their daily task. Here we discovered a great solution to them.</p>
                        </div>
                    </div>
                    <div className='shadow-xl p-5 rounded bg-white'>
                        <FaHouseUser className='text-7xl' />
                        <div>
                            <h3 className='text-xl font-bold'>House Makers</h3>
                            <p className='text-gray-500'>House makers are the key to stat a day of all classes people. Every professional person start their day from a house. So house makers has a great role to make their day easy.So they can also benefit by using the app.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;