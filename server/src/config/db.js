import mongose from 'mongoose';

const connectDB = async () => {
  try {
     const connect = await mongose.connect(process.env.MONGO_URI);
     console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
     console.error(`Error: ${error.message}`);
     process.exit(1);
  }
};

export default connectDB;