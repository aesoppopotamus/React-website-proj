const express = require('express')
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

const port = process.env.PORT || 3001; // Use the port specified in dockercompose
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // should probably kill this later
        await sequelize.sync({ alter:true });
    } catch (error) {
        console.error('Unable to connect to database:', error);
    }

});