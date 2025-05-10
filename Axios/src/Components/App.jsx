import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Layout from './Layout';
import Contact from './Contact';
import About from './About';

function App() {

  return (

    <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='about' element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
