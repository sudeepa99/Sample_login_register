//this file defines the routes realated to user operations such as user reagistration.Routes define the endpoints that client can call to intercat with the server.
const express = require('express'); //importing express to create a router.
const router = express.Router(); //creating new router object. 
const { registerUser,loginUser } = require('../Controller/UserController'); //importing the registeruser function from controller.

router.post('/register', registerUser); //defining a POST router for user registration.4
router.post('/login', loginUser); //defining a POST router for user login.

module.exports = router; //exporting router module, so it can be used by server.js
