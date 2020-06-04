const app = require('./app');
const PORT = process.env.SERVER_PORT;

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});