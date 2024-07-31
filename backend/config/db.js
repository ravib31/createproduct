import mongoose from "mongoose";


export const connectedDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb Connected : ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}