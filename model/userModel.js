import mongoose from "mongoose";

//the schema which the client model is defined with
const clientSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    age:{
        type:Number,
        required : true
    },
    city:{
        type:String,
        required:true
    }
});

export default mongoose.model("clients",clientSchema);