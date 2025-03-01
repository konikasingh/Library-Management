import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='w-full bg-black flex justify-between p-4 items-center text-white'>
            <h1>LIBRARY</h1>
            <div className='flex gap-3'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </div>
        </div>
    )
}

export default Header
