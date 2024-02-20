import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const Connection= async ()=>{
    const url="mongodb+srv://Yash_Kshatriya:Yash%402001@tech-database.k2nfq46.mongodb.net/BooksDB"
    try{
        await mongoose.connect(url,{useNewUrlParser:true})
        console.log("Database Connected Successfully")
    }catch(error){
        console.log("Error while connecting",error)
    }
}

export default Connection;