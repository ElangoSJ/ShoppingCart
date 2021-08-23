require('dotenv').config();
const mongoose = require('mongoose');
const env = require('../../environment');

const connectDB = async() => {
    try {
        await mongoose.connect(env.MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connect success");
    } catch (err) {
        console.log(process.env.mongoUri);
        console.error('MongoDB connection Fail');
        process.exit(1);
    }
}


module.exports = connectDB;