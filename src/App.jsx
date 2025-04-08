import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Blog from './components/navbar/blog'

function App() {

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blog></Blog>
        </div>
        <div className="right-container w-[30%]">
          <h1>reading time : 0</h1>
          <h1>Booked mark count : 0</h1>
        </div>
      </div>
    </>
  )
}

export default App
