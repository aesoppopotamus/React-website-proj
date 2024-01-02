// models/post.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./index.js')

const Post = sequelize.define('post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Post;