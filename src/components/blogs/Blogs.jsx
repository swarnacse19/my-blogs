import React, { useEffect, useState } from 'react';
import Blog from '../Blog/blog';

function Blogs({handleBookMarked, handleMarkAsRead}) {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    //console.log(blogs);
  return (
    <div>
      <h1 className='text-3xl font-semibold'>Total : {blogs.length}
      </h1>
      <div className="all-blogs grid grid-cols-2 mt-4 gap-4">
        {
          blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookMarked={handleBookMarked} handleMarkAsRead={handleMarkAsRead}></Blog>)
        }
      </div>
    </div>
  );
}

export default Blogs;