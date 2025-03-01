import React, { useEffect, useState } from 'react'
import '../Css/Browsebooks.css'
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import { toast } from 'react-toastify';
function BrowseBooks() {
    const books = useSelector((state) => state.bookdata.value) // Accessing the state

    const [filter, setFilter] = useState('');
    const [fbooks, setfbooks] = useState([]); //filtered books
    function handelSearch() {
        if (filter.length < 3) {
            return toast.error("invalid input")
        }
        setfbooks(books.filter((book) => book.title.toLowerCase().includes(filter.toLowerCase()) || book.author.toLowerCase().includes(filter.toLowerCase()) || book.category.toLowerCase().includes(filter.toLowerCase())))
        setFilter('')
        toast.success("Fetched Data")
    }


    return (
        <>
            <div className='searchCont'>
                <img src="https://i.pinimg.com/originals/55/01/60/5501609ee45d514d1f2c4a63502045e2.gif" alt="" />
                <div className='overSearch'>
                    <input type="text" placeholder='Search Books' value={filter} onChange={(e) => setFilter(e.target.value)} />
                    <button onClick={handelSearch}><i className="ri-search-line"></i></button>
                </div>
            </div>
            <div className='cards bg-red w-full p-6 flex justify-evenly flex-wrap gap-5'>
                {fbooks.length ? <>
                    {fbooks.map((book) => {
                        return <BookCard key={book.id} book={book} />
                    })}
                </> : <div className='flex flex-col items-center'>
                    <h1 className='text-3xl'>Results will be shown here</h1>
                    <img className='w-56' src="https://i.pinimg.com/originals/0a/42/2d/0a422d0fdcc496a9a64e7484fe22c365.gif" alt="" />
                </div>}
            </div>
        </>
    )
}

export default BrowseBooks
