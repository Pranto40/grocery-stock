import React from 'react';

const BlogDetails = ({blog}) => {
    const {title, description} = blog
    return (
        <div className='col-md-6 col-lg-4 card-group my-3'>
            <article className='border px-3 rounded'>
                <p className='mt-3'><strong>{title}</strong></p>
                <p>{description}</p>
            </article>
        </div>
    );
};

export default BlogDetails;