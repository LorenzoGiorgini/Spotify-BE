
import express, { response } from 'express';
import LikeSchema from "../likes/modal.js";



const router = express.Router();


router.get('/', async(req, res) => {
    try {
        const likes = await LikeSchema.find();
        res.send(likes);
    } catch (error) {
        console.log("eror")
        res.status(500).send(error);
    }
})



router.post('/', async(req, res) => {
    try{
        const checkLike = await LikeSchema.findOne({id: req.body.id})
        console.log(checkLike)
        if(checkLike){
            res.status(400).send("already liked")
        }else{
            const newLike =  new LikeSchema(req.body)
            const {_id} = await newLike.save()
            res.status(201).send(_id)
        }

        
    }catch(error){
        res.status(500).send(error);
    }
    
})


router.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params        
        console.log(id)

        const deletedLike = await LikeSchema.findOneAndDelete({_id:id})
        // console.log(deletedLike)
        res.status(201).send("deleted")
    }catch(error){
    
        res.status(500).send(error)
    }
})


export default router;

