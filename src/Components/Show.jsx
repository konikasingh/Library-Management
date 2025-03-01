import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import BookCard from './BookCard';


function Show() {
    const navigate = useNavigate();
    const books = useSelector((state) => state.bookdata.value); // Accessing the state
    const { id } = useParams();
    const [currBook, setCurrbook] = useState(null);

    useEffect(() => {
        const book = books.filter((el) => el.id === id)[0];
        setCurrbook(book);
    }, [id, books]);

    return (
        <div className='pt-20 px-4 lg:px-20'>
            <button onClick={() => navigate(-1)} className='bg-black m-2 p-2 rounded-xl text-white'>
                <i className="ri-arrow-left-line"></i> Back
            </button>
            {currBook ? (<>
                <div className='bg-white rounded-lg shadow-lg p-6 lg:p-10 max-w-4xl mx-auto'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-4'>{currBook.title}</h1>
                    <p className='text-lg text-gray-600 mb-2'>
                        <span className='font-semibold'>Author:</span> {currBook.author}
                    </p>
                    <p className='text-lg text-gray-600 mb-2'>
                        <span className='font-semibold'>Category:</span> {currBook.category}
                    </p>
                    <p className='text-lg text-gray-600 mb-4'>
                        <span className='font-semibold'>Rating:</span> ⭐ {currBook.rating}
                    </p>
                    <p className='text-gray-700 leading-relaxed'>{currBook.description}</p>
                </div>

                <h1 className='w-full text-center m-6'>More {currBook.category} books</h1>
                <div className='w-full flex flex-wrap items-center justify-evenly gap-6 pb-8'>
                    {books.filter((el) => el.category === currBook.category).map((book) => {
                        return <BookCard key={book.id} book={book} />
                    })}

                </div>
            </>

            ) : (
                <h1 className='text-2xl font-bold text-red-500 text-center'>
                    No book found with this ID
                </h1>
            )}
        </div>
    );
}

export default Show;
