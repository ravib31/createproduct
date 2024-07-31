import express from "express";
import dotenv from "dotenv" ;
import path from "path";
import { connectedDb } from "./config/db.js";
import productRoutes from "./routes/product.route.js"



dotenv.config();

// console.log(process.env.MONGO_URL)
const app = express();
app.use(express.json()); /*allows us to accept the JSON data in the body*/
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use("/api/products",productRoutes);
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}



app.listen(PORT,()=>{
    connectedDb()
    console.log("I am your server running on the port:"+PORT)
})
