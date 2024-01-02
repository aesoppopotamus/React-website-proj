// models/post.js
const { Sequelize, DataTypes} = require('sequelize');
const sequilize = require('../sequelize-config');

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