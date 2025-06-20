const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log(" Database connected successfully");
    } catch (error) {
        console.error(" Database connection error:", error);
        process.exit(1); 
    }
};

module.exports = connectToDb;
