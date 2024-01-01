const Post = require('../models/post');

exports.createPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        if (!title || !content || !author) {
            return res.status(400).json({ message: 'Title, content, and author are required fields' })
        }
        
        const newPost = await Post.create({
            title,
            content,
            author
        });
    
        return res.status(201).json(newPost);    
    }   catch(error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();

        return res.status(200).json(posts);
    }   catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findByPk(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        return res.status(200).json(post);
    }   catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const post = await Post.findByPk(id);

        
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.title = title || post.title;
        post.content = content || post.content;
        await post.save();

        return res.status(200).json(post);
    }   catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error '});
    }
}

exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        cont post = await Post.findByPk(id);

        if (!post) {
            return res.status (404).json({ message: 'Post not found '});
        }

        await post.destroy();

        return res.status(204).send();
    }   catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

// const express = require('express');
// const router = express.Router();
// const postsController = require('../controllers/posts')

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.get('/api/posts', (req, res) => {
//     const posts = [
//         { title: 'Post 1', content: 'Content of post 1' },
//         { title: 'Post 2', content: 'Content of post 2'},
//     ];
//     res.json(posts);
// })

// app.post('/api/posts', (req,res) => {
//     const { title, content, author} = req.body;

//     const newPost = await Post.create({
//         title,
//         content,
//         author
//     })
// })