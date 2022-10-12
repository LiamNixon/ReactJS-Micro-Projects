// Import dependencies
const mongoose = require('mongoose');

// Create schema for database
const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Export schema for use
const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;