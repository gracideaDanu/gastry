const express = require("express");
const mongoose = require("mongoose");
// it will allow us to take requests and get data from the body
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express();

// BodyParser Middleware
app.use(bodyParser.json())

// Connect to Mongo
mongoose.connect('mongodb://mongo:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

// Use Routes
app.use('/api/items', items)

app.get('/', (req, res) => {
    res.send('BACKEND')
})

const port = process.env.PORT || 4000

app.listen(port, function() {
    console.log(`Server is running on Port: ${port}`);
})