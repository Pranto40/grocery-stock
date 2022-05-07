import { useEffect, useState } from "react";

const useBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://salty-wave-28243.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);
    return (
        [blogs, setBlogs]
    );
};

export default useBlog;