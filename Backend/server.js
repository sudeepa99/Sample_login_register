//server.js use to run the server. server.js is the main entry point for the application.
const express = require('express'); // importing express, a web framework for nodejs.
const mongoose = require('mongoose'); //importing mongoose to interact with mongodb.
const dotenv = require('dotenv'); //importing dotenv to load environmental variables from .env file.

dotenv.config(); //loading environment variables from .env file into process.env

const app = express(); // create an express application.
const port = process.env.PORT || 5000; //sets the port to the .env file value or 5000.

//connecting to mongodb using mongoose.
mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB'); //logs a message when successfully login to the system.
}).catch(err => {
  console.error('MongoDB connection error:', err); //logs an error when connection fails.
});

app.use(express.json()); //middleware to parse JSON bodies in incoming requests. make it easy to access data from req.body.

//importing user routes from the Routes directory.
const userRoutes = require('./Routes/route');
app.use('/api/users', userRoutes); //use the user routes prefixed with /api/users

//starting the server and listening on the specified port. 
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // logs the mesaage when server starts on.
});



//mongoose - an ODM library for MongoDB and Nodejs. it provides a schema based solution to model your system.
//dotenv - a module that loads system variables from .env to process.env.Helps to keep sensitive data out from the source code.
