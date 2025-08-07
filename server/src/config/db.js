import mongose from 'mongoose';
import { configDotenv } from 'dotenv';

configDotenv();

const MONGO_URI = process.env.MONGODB_URI 
if (!MONGO_URI) {
  throw new Error('MONGODB_URI is not defined in .env file');
}

const connectDB = async () => {
  try {
     const connect = await mongose.connect(MONGO_URI);
     console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
     console.error(`Error: ${error.message}`);
     process.exit(1);
  }
};

export default connectDB;