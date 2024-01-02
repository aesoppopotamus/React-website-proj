// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';

function Home() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                setError(error.message);
            }
        };

        getPosts();
    }, []);

    if (error) {
        return <div>Error: (error)</div>;
    }   

    return (
        <div>
            <h1>Home Page</h1>
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Home;