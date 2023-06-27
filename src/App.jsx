import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import EditsData from './EditsData';

function App() {

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/edit" element={<EditsData/>} />
          {/*<Route path="/upcoming" element={<UpComing />} />
          <Route path="/popular/:id" element={<SingleMovie />} /> */}
        </Routes>

      </div>
    </>
  )
}

export default App
