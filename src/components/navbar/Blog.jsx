import React, { useEffect, useState } from 'react';

function Blog() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    console.log(blogs);
  return (
    <div>
      <h1 className='text-3xl font-semibold'>Total : {blogs.length}</h1>
    </div>
  );
}

export default Blog;