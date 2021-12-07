import express from "express";
import fetch from "node-fetch";

const { Router } = express;

const router = Router();

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(
      `https://api.deezer.com/artist/${id}/top?limit=10`
    );

    if (response.ok) {
      const data = await response.json();
      res.status(200).send(data.data)
    } else {
      console.log("error fetching top five songs");
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;