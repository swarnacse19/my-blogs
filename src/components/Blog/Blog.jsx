import React from 'react';
import { FaBookmark } from "react-icons/fa";

function Blog({blog, handleBookMarked, handleMarkAsRead}) {
    //console.log(blog);
  return (
    <div>
      <div className="card bg-amber-100 w-96 h-72 shadow-sm">
  <figure>
    <img
      src={blog.coverPhoto}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-red-500 font-semibold">{blog.title}</h2>
    
    <div className='flex justify-around font-bold'>
        {
            blog.hashtags.map(has => <p>{has}</p>)
        }
    </div>
    <div className="card-actions flex justify-between items-center">
    <button onClick={() => handleBookMarked(blog)}><FaBookmark size={25} /></button>
      <button onClick={() => handleMarkAsRead(blog.readingTime, blog.id)} className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>
    </div>
  );
}

export default Blog;