const express = require('express');
const connectDB = require('./config/db')

const app = express();

//connect database

connectDB();

app.get('/', (req, res) => res.send('API running'));

// Define route

app.use('/api/users', require('./routes/api/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/api/profile'));
app.use('/api/posts', require('./routes/api/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server start on port ${PORT}`));