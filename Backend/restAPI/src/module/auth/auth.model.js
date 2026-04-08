import { required, string } from "joi";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: string,
        trim: true,
        minlength: 2,
        maxlength: 50,
        required: [true, "Name is required"],
        unique: true,
        lowercase: true
    },
    password: {
        type: string,
        required: [true, "password is required"],
        minlength: 9,
        select:false
    },
    role: {
        type: string,
        enum: ["customer", "seller", "admin"],
        default: "customer"
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationToken:{type:string, 
        select:false
    },
    refreshtoken:{type:string, 
        select:false
    },
    resetPasswordtoken:{type:string, 
        select:false
    },
    resetPasswordExpires:{type:string, 
        select:false
    }


}, {timestamps:true})




export default mongoose.model("user", userSchema)