import React, { useState } from 'react';
import { addbook } from '../Utils/bookdataSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Add() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(1);
    const [category, setCategory] = useState('Fiction'); // default category is 'Fiction'
    const dispatch = useDispatch();
    function generateUniqueId(length = 10) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let uniqueId = '';
        for (let i = 0; i < length; i++) {
            uniqueId += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return uniqueId;
    }
    function handleSubmit(e) {
        e.preventDefault(); // Prevent form submission refresh
        dispatch(
            addbook({ title, author, description, rating, category, id: generateUniqueId(10) })
        )
        console.log({ title, author, description, rating, category });
        toast.success('Book addded Successfully')
        navigate('/');
    }

    return (
        <div className='w-full pt-8 flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='bg-gray-100 p-6 rounded-md shadow-md w-full max-w-md mt-10 '>
                <h1 className='w-full text-center text-3xl'>Add Book Details</h1>
                <div className="mb-4">
                    <label className='block mb-2 text-gray-700'>Title</label>
                    <input
                        type="text"
                        placeholder='Enter Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className='block mb-2 text-gray-700'>Author</label>
                    <input
                        type="text"
                        placeholder='Enter Author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className='block mb-2 text-gray-700'>Description</label>
                    <input
                        type="text"
                        placeholder='Enter Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className='block mb-2 text-gray-700'>Rating (1-5)</label>
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        min={1}
                        max={5}
                        step="0.1"  // This allows decimal values
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className='block mb-2 text-gray-700'>Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                        required
                    >
                        <option value="Fiction">Fiction</option>
                        <option value="Non-fiction">Non-fiction</option>
                        <option value="Horror">Horror</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Self-Help">Self-Help</option>
                        <option value="Historical Fiction">Historical Fiction</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300'
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Add;
