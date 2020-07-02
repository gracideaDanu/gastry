const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const supplierRouter = require('./routers/api/supplier.router');
const customerRouter = require('./routers/api/customer.router');
const userRouter = require('./routers/api/user.router')


//Added to prevent use of deprecated method
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


// Passport config

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/", (req, res) => res.json({ message: "Server is running." }));

console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL)
    .catch(err => console.log(err));
const connectione = mongoose.connection;

connectione.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.use('/supplier',supplierRouter);
app.use('/customer',customerRouter);
app.use('/user',userRouter);




module.exports = app;
