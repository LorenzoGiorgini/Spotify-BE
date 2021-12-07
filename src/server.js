import express from "express";
import cors from "cors"
import mongoose from "mongoose"


const server = express();



server.use(express.json());
server.use(cors())



const port = process.env.PORT || 3001;




mongoose.connect(process.env.MONGO_URL)

mongoose.connection.on("connected", () => {
    server.listen(port , () => {
        console.log(`Server is running on port ${port}`)
    })
})