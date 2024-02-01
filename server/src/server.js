require("dotenv").config();

const express = require("express");
const ConnectDb = require("./database/db")
const cors = require("cors");

const muaa = express();

muaa.use(express.json());
muaa.use(express.urlencoded({extended:false}));
muaa.use(cors());

const postApi = require("./API/postAPI");
const getApi = require("./API/getAPI");
const deleteApi = require("./API/deleteAPI");

muaa.use("/muaa",postApi);
muaa.use("/muaa/get",getApi);
muaa.use("/muaa/delete",deleteApi);

muaa.listen(8080,(req,res) =>{
    ConnectDb().then(() => console.log("Successfully Connected"))
    .catch(() => console.log("Connection Failed"))
});