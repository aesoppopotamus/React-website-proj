const express = require('express')
const { sequelize } = require('./models');


const app = express();
app.use(express.json());

const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

const port = process.env.PORT || 3001; // Use the port specified in dockercompose
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        await sequelize.sync();
    } catch (error) {
        console.error('Unable to connect to database:', error);
    }

});