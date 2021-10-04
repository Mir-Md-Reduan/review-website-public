import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Blog.css'

const Blog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.slice(0, 10)))
    }, [])
    return (
        <div>
            <div className="post-container">
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Blog;