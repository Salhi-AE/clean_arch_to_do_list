import  mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    
    if (!uri) {
        console.error("❌ Error: MONGO_URI is not defined in .env file");
        process.exit(1);
    }

    try {
        await mongoose.connect(uri);
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
        process.exit(1);
    }
};


export default connectDB;