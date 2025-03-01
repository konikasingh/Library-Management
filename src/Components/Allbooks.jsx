import React from 'react'
import BookCard from './BookCard'
import '../Css/Allbooks.css'

function Allbooks({ books }) {
    return (
        <div className='AllBooks w-full bg-red flex flex-col  gap-5 p-6'>
            <h1 className='lh'>Fictional Books <img src="https://i.pinimg.com/564x/eb/c2/1d/ebc21d4d83c00cbe5f4963d39cc97e70.jpg" alt="" /></h1>
            <div className='cards'>
                {books
                    .filter((book) => book.category === "Fiction") // Correctly returning filtered books
                    .map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
            </div>
            <h1 className='rh'><img src="https://i.pinimg.com/originals/4f/8f/48/4f8f4849d7ca6c6d81964c3c61f9d085.gif" alt="" /> Non Fictional Books</h1>
            <div className='cards'>
                {books
                    .filter((book) => book.category === "Non-Fiction") // Correctly returning filtered books
                    .map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
            </div>
            <h1 className='lh'>Mystery Books <img src="https://i.pinimg.com/originals/e3/b7/ec/e3b7eccfc4e1132329e6e2639e95b447.gif" alt="" /></h1>
            <div className='cards '>
                {books
                    .filter((book) => book.category === "Mystery") // Correctly returning filtered books
                    .map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
            </div>
            <h1 className='rh'><img src="https://i.pinimg.com/originals/27/53/fd/2753fd4ad89b6e837654c400886cd437.gif" alt="" /> Horror Books</h1>
            <div className='cards '>
                {books
                    .filter((book) => book.category === "Horror") // Correctly returning filtered books
                    .map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
            </div>
            <h1 className='lh'>Self-Help Books <img src="https://i.pinimg.com/originals/5b/f0/a3/5bf0a3e0601d35349c5451fa52138ea6.gif" alt="" /></h1>
            <div className='cards '>
                {books
                    .filter((book) => book.category === "Self-Help") // Correctly returning filtered books
                    .map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
            </div>
            <h1 className='rh'><img src="https://i.pinimg.com/originals/6b/80/ba/6b80ba90a39ca931f31762a5b46fec6e.gif" alt="" /> Historical Fiction Books</h1>
            <div className='cards '>
                {books
                    .filter((book) => book.category === "Historical Fiction") // Correctly returning filtered books
                    .map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
            </div>
        </div>

    )
}

export default Allbooks
