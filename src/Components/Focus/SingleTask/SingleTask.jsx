import React from 'react';

const SingleTask = ({data}) => {

    return (
        <div className='boroder border-2 text-left p-3 border-gray-500 m-5 rounded-md'>
            <h1>Tittle: {data?.title}</h1>
            <p className='text-yellow-500'>Priority: {data?.priority}</p>
            <p>Discription: {data?.description}</p>
            <p>Date: {data?.date}</p>
        </div>
    );
};

export default SingleTask;