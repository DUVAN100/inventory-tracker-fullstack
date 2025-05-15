const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    }catch(err){
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}
module.export = connectDB;