import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express()
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

// console.log(process.env.MONGO_URL) 
mongoose.connect(MONGOURL).then(()=>{
    
    console.log("Database is connected successfully.")

    app.listen(PORT,() => {
        console.log(`✅Mongodb Server is running on ${PORT}`)
    });
    
}).catch((error)=>{
    console.log("❌ Mongo connection failed:", error);
});


const clientSchema = new mongoose.Schema({
    name:String,
    age:Number,
    city:String,
})

const clientModel = mongoose.model("clients",clientSchema)


app.get("/",(req,res)=>{
    res.send("enter /getAllC to fetch all client Data.");
})

app.get("/getAllC", async(req,res)=>{
    const clientData = (await clientModel.find());
    res.json(clientData);
});