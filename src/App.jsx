import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/blogs/Blogs'


function App() {

  const [bookmarked, setBookmarked] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookMarked = (blog) =>{
    setBookmarked([...bookmarked, blog]);
  }

  const handleMarkAsRead = (time, id) =>{
      setReadingTime(readingTime+time);
      handleRemoved(id);
  }

  const handleRemoved = (id) => {
    const remainingBook = bookmarked.filter(mark => mark.id !== id);
    setBookmarked(remainingBook);
  }

  return (
    <>
      <Navbar></Navbar>     

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookMarked={handleBookMarked} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>reading time : {readingTime}</h1>
          <h1>Booked mark count : {bookmarked.length}</h1>
          {
            bookmarked.map(book => <p className='font-bold'>{book.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
