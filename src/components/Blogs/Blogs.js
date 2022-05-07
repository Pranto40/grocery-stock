import React from 'react';
import useBlog from '../../Hook/useBlog';
import BlogDetails from '../BlogDetails/BlogDetails';

const Blogs = () => {
    const [blogs] = useBlog([]);
    return (
        <div className='container'>
            <div className="row mt-5">
            <h1 className='text-center text-primary'>Blogs</h1>
                {
                    blogs.map(blog => <BlogDetails
                    key = {blog._id}
                    blog = {blog}
                    ></BlogDetails>)
                }         
            </div>
        </div>
    );
};

export default Blogs;