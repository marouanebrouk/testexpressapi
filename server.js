import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());

// fetching .env variables to server
dotenv.config();
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

// create connection with mongodb database using mongoose
mongoose.connect(MONGOURL).then(()=>{
    app.listen(PORT,() => {
        console.log(`✅Mongodb Server is running on ${PORT}`)
    });
}).catch((error)=>{
    console.log("❌ Mongo connection failed:", error);
});

// declare the basic route for the app
app.use("/api/client", route);