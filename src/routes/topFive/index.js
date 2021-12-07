import express from "express";
import fetch from "node-fetch";

const { Router } = express;

const router = Router();

router.route("/album/:search/").get(async (req, res) => {
  const { search } = req.params;
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`
    );
    if (response.ok) {
      const data = await response.json();

      let topFiveAlbums = [];

      data.data.forEach((element) => {
        if (!topFiveAlbums.some((elem) => elem.id === element.album.id)) {
          topFiveAlbums.push(element.album);
        }
      });
      res.status(200).send(topFiveAlbums)
    }
  } catch (error) {
    console.log(error);
  }
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(
      `https://api.deezer.com/artist/${id}/top?limit=10`
    );

    if (response.ok) {
      const data = await response.json();
      res.status(200).send(data.data);
    } else {
      console.log("error fetching top five songs");
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
