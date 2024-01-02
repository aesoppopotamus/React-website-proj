const express = require('express')
const app = express();
const { Sequelize, DataTypes} = require('sequelize');

app.use(express.json());

const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

const port = process.env.PORT || 3001; // Use the port specified in dockercompose
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});