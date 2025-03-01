import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for the default styling


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Header from './Components/Header'
import Show from './Components/Show'
import Nav from './Components/Nav'
import BrowseBooks from './Components/BrowseBooks'
import NotFound from './Components/NotFound'
import Add from './Components/Add'
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/show/:id' element={<Show />} />
        <Route path='/browsebooks' element={< BrowseBooks />} />
        <Route path='/addbook' element={< Add />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer autoClose={2000} /> {/* Toast container must be included */}
    </>
  )
}
export default App
