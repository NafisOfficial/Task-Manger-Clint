import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

const AddTask = () => {

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${year}-${month}-${day}`;


    const {register, handleSubmit} = useForm();

    const onSubmit = data =>{
        fetch("https://task-manager-server-rouge.vercel.app/todo",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(()=>{
            toast.success('Todo added', {
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
            toast.error('Failed to added data', {
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

    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-5'>Add your task in the list.</h1>
            <Form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 justify-center items-center'>
                <div className='flex gap-3 mx-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="title">Title</label>
                        <input type="text" {...register('title')} id='title' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="title">Priority</label>
                        <select {...register('priority')} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select the priority</option>
                            <option defaultValue="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="title">Deadline</label>
                        <input type="date" {...register('date')} min={formattedToday} name='date' id='date' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="title">Description</label>
                    <textarea {...register('description')} className="textarea textarea-bordered md:w-[592px] md:h-64  w-96 h-40" placeholder="Description"></textarea>
                </div>
                <input type="submit" className='btn btn-info my-5' value="Submit" />
            </Form>
        </div>
    );
};

export default AddTask;