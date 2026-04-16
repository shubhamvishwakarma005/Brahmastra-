import mongoose from "mongoose";

// always use db with with async

const connectDB = async()=>{
  const connec =   await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
  console.log('mongoDB connected ', connec.connection.host)
}

export default connectDB