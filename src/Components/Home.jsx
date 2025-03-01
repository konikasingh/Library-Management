import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addbook } from '../Utils/bookdataSlice';
import Allbooks from './Allbooks';
import Hero from './Hero';


function Home() {

    const books = useSelector((state) => state.bookdata.value) // Accessing the state
    const dispatch = useDispatch(); // Hook to dispatch actions
    // useEffect(() => {
    //     dispatch(addbook({
    //         id: 67,
    //         name: "Kuldeep"
    //     })); // Dispatching the action to update state
    // }, []); // Empty    console.log(books); // Logs the state after the update (will still show old value until the next render)
    function generateUniqueId(length = 10) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let uniqueId = '';
        for (let i = 0; i < length; i++) {
            uniqueId += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return uniqueId;
    }
    return (
        <>
            <Hero></Hero>
            <Allbooks books={books}></Allbooks>
        </>
    );
}

export default Home;
