const express = require("express");

const DataModel = require("../database/dataModel");

const Router = express.Router();

//delete specific
Router.delete("/:title", async (req, res) => {
  try {
    const { title } = req.params;

    await DataModel.findOneAndDelete({title: title});

    return res.json({ message: "Deleted" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = Router;
