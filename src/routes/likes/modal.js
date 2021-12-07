import mongoose from "mongoose";

const { Schema, modal } = mongoose;


const LikeSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title_short: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    md5_image: {
      type: String,
      required: true,
    },
    artist: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    album: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: false,
  }
);



export default modal("Like", LikeSchema);