import express from "express";
import PurchaseModel from "../models/purchase.model.js";

const purchaseRoute = express.Router();

purchaseRoute.post('/create',async (req,res) => {
    try {
        const newPurchase = await PurchaseModel.create(req.body);

        return res.status(201).json(newPurchase);
    } catch (e) {
        console.log(e);
        return res.status(500).json({msg: 'Algo deu errado'})
    }
})

purchaseRoute.get('/:purchaseId',async (req,res) => {
    try {
        const { purchaseId } = req.params
        const purchase = await PurchaseModel.findById(purchaseId).populate("album");

        return res.status(200).json(purchase);
    } catch (e) {
        console.log(e);
        return res.status(500).json({msg: 'Algo deu errado'})
    }
})

export default purchaseRoute;

