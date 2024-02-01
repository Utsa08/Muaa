const express = require("express");

const DataModel = require("../database/dataModel");

const Router = express.Router();

Router.post("/add",async (req,res) => {
    try{
        const data = req.body;
        await DataModel.create(data);

        return res.json({  message : "Succesfully Uploaded" });
    }catch(error)
    {
        return res.status(400).json({error: error.message});
    }
});

module.exports = Router