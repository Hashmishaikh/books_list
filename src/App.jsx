import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/popular/:id" element={<SingleMovie />} /> */}
        </Routes>

      </div>
    </>
  )
}

export default App
