import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Notes from "./Notes";
import Details from "./Details";
import AddNote from "./Addnote";
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<Details/>}/>
        <Route path="/addnote" element={<AddNote/>}/>
        <Route path="*" element={<h1 className='text-3xl text-center mt-8 bg-red-500 py-2 text-gray-50 font-bold animate-bounce'>404 Page Not Found :/</h1>}/>
      </Routes>
    </Router>
  )
}
