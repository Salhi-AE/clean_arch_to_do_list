import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;
    
    if (!uri) {
        console.error("❌ Error: MONGODB_URI is not defined. Check Render Environment Variables.");
        process.exit(1);
    }

    try {
        await mongoose.connect(uri);
        console.log("✅ MongoDB Connected Successfully to Atlas");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
        setTimeout(connectDB, 5000); 
    }
};

export default connectDB;