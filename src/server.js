import express from "express";
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import LikesRouter from "./routes/likes/index.js"
import listEndpoints from "express-list-endpoints";

dotenv.config()

const server = express();



server.use(express.json());
server.use(cors())



const port = process.env.PORT || 3001;


server.use("/likes", LikesRouter)



mongoose.connect(process.env.MONGO_URL)

mongoose.connection.on("connected", () => {
    server.listen(port , () => {
        console.log(`Server is running on port ${port}`)
        console.table(listEndpoints(server));
    })
})