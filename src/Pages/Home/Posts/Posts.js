import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5000/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);
    console.log(posts);
    return (
        <div>
            {posts.map((post) => (
                <Post post={post} key={post?._id}></Post>
            ))}
        </div>
    );
};

export default Posts;