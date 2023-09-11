import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js"


 

const app=express();
app.use(bodyParser.json({limit:"30mb",extended:true})); //for accesing files larger in size
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use("/posts",postRoutes); //using this to acess route req through routes file

//connection with mongodb`
const password = encodeURIComponent("kapil123");
const CONNECTION_URL=`mongodb+srv://kapilkapse007:${password}@cluster0.p39pqat.mongodb.net/` 

const PORT = process.env.PORT|| 5000

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true})
.then(()=>{app.listen(PORT,()=>{console.log(`App is running on port : ${PORT}` )})}) //show sucess when sucessfull
.catch((error)=>{console.log(error)});//show error if not connected succesfully


