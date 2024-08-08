//contains logic for handling user realted operations.
const User = require('../Model/User'); //importing the user model
const bcrypt = require('bcryptjs'); //importing bycryptjs for hashing password.

//asynchronous function for handling user registration
const registerUser = async (req, res) => {
  const { name, address, email, password, confirm_password } = req.body;  //extracting user data from the requset body.
  
  // Check if password and confirm_password match
  if (password !== confirm_password) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); //hashing the password with a salt of 10 rounds.
    const user = new User({ name, address, email, password: hashedPassword, confirm_password: hashedPassword }); //creating a new user instance with hashed password.
    await user.save();
    res.status(201).json({ message: 'User registered successfully' }); //sending a success response.
  } catch (error) {
    res.status(500).json({ message: 'Server error', error }); //sending an error message in case of server error.
  }
};

const loginUser = async(req,res) => {
    const {email,password} = req.body;

    try{
        //find the user by email

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message: 'Invalid email or password'});
        }

        //comparing the password with hashed password in the database.
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid email or password'});
        }

        //if the credentials are valid, send a success message

        res.status(200).json({message: 'Login Successfull'});


    } catch(error){
        res.status(500).json({message: 'Server error'});

    }
}

//exporting the register user so it can use in routes.
module.exports = {
  registerUser,
  loginUser  
};

//bcrypt - a library to hash passwords and ensuring they are securely stored.
//bycrypt.hash - hashes the password before storing it in the database.
