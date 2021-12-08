import express from 'express';
import Playlist from './schema.js'


const router = express.Router();




router.get('/', async (req, res) => {

    Playlist.find({}, (err, playlists) => {
        if (err) {
        console.log(err);
        res.status(500).send('Error');
        } else {
        res.json(playlists);
        }
    });
})


router.get('/:id', async (req, res) => {
    Playlist.findById(req.params.id, (err, playlist) => {
        if (err) {
        console.log(err);
        res.status(500).send('Error');
        } else {
        res.json(playlist);
        }
    });
})

router.post('/', async (req, res) => {
    const playlist = new Playlist(req.body);
    await playlist.save();
    res.status(201).send(playlist.name);
})

router.post('/addSong/:id', async (req, res) => {


    Playlist.findByIdAndUpdate(req.params.id, 
        {$push: {songs: req.body}}, (err, playlist) => {
        if (err) {
        console.log(err);
        res.status(500).send('Error');
        } else {
        res.json(playlist);
        }
    });
})


export default router;