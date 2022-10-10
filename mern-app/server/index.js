// Import dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

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

// POST method
app.post('/add-user', async(req,res) => {
    // Creates a new user object from submitted body content
    const newUser = new User(req.body);
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

// PATCH method
app.patch('/update-user/:id', async (req,res) => {
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
app.get('/get-users', async(req,res) => {
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
app.get('/get-user/:id', async(req,res) => {
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
app.delete('/delete-user/:id', async(req,res) => {
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