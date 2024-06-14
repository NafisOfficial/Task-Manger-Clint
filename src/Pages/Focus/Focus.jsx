import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleTask from '../../Components/Focus/SingleTask/SingleTask';

const Focus = () => {

    const datas = useLoaderData();



    return (
        <div className='flex flex-col gap-5 mx-5 mt-5'>
            <h1 className='text-center text-2xl font-bold'>Your task is appear here</h1>
            <Link to="/add-task" className='mx-auto'><button className="btn btn-active text-center btn-primary">Add task</button></Link>
            <div className='grid grid-cols-3 gap-10 text-center'>
                <div className='mb-5'>
                    <h1 className='border-b-2 border-blue-700 font-bold'>Todo List</h1>
                    <div>
                        {datas?.map(data=><SingleTask key={data?._id} data={data}></SingleTask>)}
                    </div>
                </div>
                <div>
                    <h1 className='border-b-2 border-blue-700 font-bold'>Ongoing List</h1>
                    <div>
                        Currently no task is appear
                    </div>
                </div>
                <div>
                    <h1 className='border-b-2 border-blue-700 font-bold'>Completed List</h1>
                    <div>
                        Currently no task is appear
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Focus;