import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from './pages/Home'
import Movies from './pages/Movies'
import Details from './pages/Details'

const App : React.FC = () => {
  return (
    <div className=''>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/moviedetails/:id" element={<Details/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
