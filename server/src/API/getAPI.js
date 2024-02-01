const express = require("express");

const DataModel = require("../database/dataModel");

const Router = express.Router();

//Get all
Router.get("/", async (req, res) => {
  try {
    const data = await DataModel.find();

    return res.json({ data });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//get specific
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const data = await DataModel.findOne({ _id: _id });

    return res.json({ data });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = Router;
