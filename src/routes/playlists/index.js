import express from 'express';
import Playlist from './schema.js'


const router = express.Router();

router.post('/song/:id', async (req, res) => {

    console.log('get')
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



router.delete('/:id', async (req, res) => {
    Playlist.findByIdAndRemove(req.params.id, (err, playlist) => {
        if (err) {
        console.log(err);
        res.status(500).send('Error');
        } else {
        res.json(playlist);
        }
    });
})

router.delete('/song/:playlistId/:songId', async (req, res) => {
    Playlist.findByIdAndUpdate(req.params.playlistId, 
        {$pull: {songs: {_id: req.params.songId}}}, (err, playlist) => {
        if (err) {
        console.log(err);
        res.status(500).send('Error');
        } else {
        res.json(playlist);
        }
    });

})


export default router;