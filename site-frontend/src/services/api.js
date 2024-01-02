// src/services/api.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${API_URL}/api/posts`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }   catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};