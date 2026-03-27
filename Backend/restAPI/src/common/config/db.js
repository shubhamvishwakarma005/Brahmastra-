import mongoose from "mongoose"

const connectDB = async ()=>{
   const connect =  await mongoose.connect(process.env.MONGODB_URI);
//    what's inside
console.log(`mongoDb connection:${connect.connection.port()}`);

}


export default connectDB