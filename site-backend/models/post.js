// models/post.js
const Sequilize = require('sequilize');
const sequilize = require('../config/database');

const Post = sequilize.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Post;