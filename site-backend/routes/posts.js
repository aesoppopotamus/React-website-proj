const express = require('express');
const router = express.Router();
const {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
}
const postsController = require('../controllers/posts);

router.post('/', postsController.createPost);
router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);

module.exports = router;