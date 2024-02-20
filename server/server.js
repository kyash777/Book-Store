import express from "express"
import dotenv from "dotenv";
import Connection from "./database/db.js";
import cors from "cors"
import bodyParser from "body-parser";
import Router from "./router/route.js";
dotenv.config();


const app=express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(Router)


app.listen(8000,()=>{
    console.log("server started at port 8000")
})

const url=process.env.MONGODB_URI;

Connection()