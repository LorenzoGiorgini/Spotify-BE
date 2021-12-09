import mongoose from "mongoose";

const { Schema, model } = mongoose;



const AlbumSchema = new Schema({
    artist: { 
        name: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    },
    cover_medium: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})


export default model("Album", AlbumSchema);