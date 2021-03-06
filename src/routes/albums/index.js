import express from "express";
import AlbumSchema from "../albums/modal.js";
const { Router } = express;

const router = Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const albums = await AlbumSchema.find({});
      if (albums) {
        res.status(200).send({ success: true, data: albums });
      } else {
        res.status(404).send({ success: false, message: "No albums found" });
      }
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const alreadyThere = await AlbumSchema.find({ id: req.body.id });
      if (alreadyThere.length > 0) {
        const toggleAlbum = await AlbumSchema.findOneAndDelete({ id: req.body.id})
        res.status(204).send({ success: true, data: "Toggled" });
      } else {
        const album = new AlbumSchema(req.body);
        if (album) {
          await album.save();
          res.status(201).send({ success: true, data: album });
        } else {
          res.status(400).send({ success: false, message: "Bad request" });
        }
      }
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  });



export default router;