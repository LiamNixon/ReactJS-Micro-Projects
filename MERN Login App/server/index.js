// Import dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Process .env file
dotenv.config({path:'./config.env'});
const port = process.env.PORT || 5000;
const DB = process.env.ATLAS_URI;

// Create app
const app = express();

// Set up app
app.use(express.json());
app.use(cors());

// Launch express server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}...`);
});

// Connect to MongoDB Atlas cluster
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected...');
});

// Define HTTP routes
const User = require('./model/Users');

// POST method (Create new user)
app.post('/api/add-user', async(req,res) => {
    let { username, password } = req.body;
    // Hash password
    const hashPassword = bcrypt.hashSync(password, 10);
    // Creates a new user object from submitted body content
    const newUser = new User({
        username: username,
        password: hashPassword
    });
    try {
        // Save new record of user to database
        await newUser.save();
        // Return HTTP status (Created success)
        res.status(201).json({
            status: 'Success',
            data: {
                newUser
            }
        });
    } catch(err) {
        // Return HTTP status (Failed)
        res.status(500).json({
            status: 'Failed',
            message: err
        });
    };
});

// Check existing username
app.post('/api/new-user', async(req,res) => {
    await User.findOne(req.body)
    .then(user => {
        if(!user) {
            return res.status(200).json({
                status: 'Username available'
            });
        } else {
            return res.status(409).json({
                error: 'Username already taken'
            });
        };
    });
});

// Authenticate method
app.post('/api/auth', async(req,res) => {
    let { username, password } = req.body;
    
    await User.findOne({username})
    .then(user => {
        if(!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        } else {
            const validPassword = bcrypt.compareSync(password, user.password);
            if (validPassword) {
                return res.status(200).json({
                    status: 'Successful'
                });
            } else {
                return res.status(401).json({
                    error: 'Incorrect password'
                });
            };
        };
    });
});

// PATCH method
app.patch('/api/update-user/:id', async (req,res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true
    });
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                updatedUser
            }
        });
    } catch(err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        });
    };
});

// GET all method
app.get('/api/get-users', async(req,res) => {
    // Create a list of ALL users in database
    const users = await User.find({});
    try {
        // Return HTTP status (Success)
        res.status(200).json({
            status: 'Success',
            data: {
                users
            }
        });
    } catch(err) {
        // Return HTTP status (Failed)
        res.status(500).json({
            status: 'Failed',
            message: err
        });
    };
});

// GET single method
app.get('/api/get-user/:id', async(req,res) => {
    const user = await User.findById(req.params.id);
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                user
            }
        });
    } catch(err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        });
    };
});

// DELETE method
app.delete('/api/delete-user/:id', async(req,res) => {
    await User.findByIdAndDelete(req.params.id);
    try {
        res.status(204).json({
            status: 'Success',
            data: {}
        });
    } catch(err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        });
    };
});