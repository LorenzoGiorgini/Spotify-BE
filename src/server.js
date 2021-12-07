import express from "express";
import cors from "cors"
import mongoose from "mongoose"

import TopFiveSongsRouter from "../src/routes/topFive/index.js"

const server = express();



server.use(express.json());
server.use(cors())



const port = process.env.PORT || 3001;

server.use("/topFive", TopFiveSongsRouter)


mongoose.connect(process.env.MONGO_URL)

mongoose.connection.on("connected", () => {
    server.listen(port , () => {
        console.log(`Server is running on port ${port}`)
    })
})