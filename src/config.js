const mongoose = require('mongoose');
require('dotenv').config(); // This loads variables from .env into process.env

// Connect to MongoDB
const uri = process.env.MONGODB_URI; // Replace with your MongoDB URI
mongoose.connect(uri)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((e) => {
        console.log("Database cannot be connected");
        console.log(e.message);
    });

// User Login Schema
const userLoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
});


// Agent Login Schema
const agentLoginSchema = new mongoose.Schema({
    agentId: {
        type: String, // agent email
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Use different model names to avoid OverwriteModelError
const UserModel = mongoose.models.User || mongoose.model("User", userLoginSchema);
const AgentModel = mongoose.models.Agent || mongoose.model("Agent", agentLoginSchema);

// Export both models
module.exports = {
    UserModel,
    AgentModel
};
