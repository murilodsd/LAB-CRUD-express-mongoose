import express from "express";
import AlbumModel from "../models/album.model.js";

const albumRoute = express.Router();

//ROUTES
albumRoute.get("/", async (req,res)=>{
    try{ 
        const albums = await AlbumModel.find();
        return res.status(200).json(albums)
    } catch(e) {
        console.log(e.errors);
        return res.status(500).json({msg:'Algo deu errado'}) 
    }
})

albumRoute.post("/create", async (req,res)=>{
    console.log(req.body);
    try{
        const newAlbum = await AlbumModel.create(req.body);
        return res.status(201).json(newAlbum);
    } catch(e) {
        console.log(e.errors);
        return res.status(500).json({msg:'Algo deu errado'}) 
    }
})

albumRoute.get("/:albumId", async (req,res) => {
    try {
        const {albumId} = req.params
        const album = await AlbumModel.findById(albumId)

        return res.status(200).json(album)
        
    } catch(e) {
        console.log(e.erros)
        return res.status(500).json({msg:'Algo deu errado'}) 
    }
})

albumRoute.put('/:albumId', async (req,res) => {
    try {
        const {albumId} = req.params;
        const updatedAlbum = await AlbumModel.findByIdAndUpdate(
            albumId,
            req.body,
            {new:true,runValidators:true}
        );
        return res.status(200).json(updatedAlbum);
        
    } catch (error) {
        console.log(error.errors);
        return res.status(500).json({msg:'Algo deu errado'})        
    }
})

albumRoute.delete('/:albumId', async (req,res) => {
    try { 
        const {albumId} = req.params;
        await AlbumModel.findByIdAndDelete(albumId);
        return res.status(204).json({msg:'status 204'})
        
    } catch (e) { 
        console.log(e);
        return res.status(500).json({msg:'Algo deu errado'})      
    }
})


export default albumRoute;