const express = require("express");
const Crypto = require("../models/cryptoModel");
const path = require("path");

const router = express.Router();

router.get("/cryptos", async(req, res)=>{
    try{
        const crypto = await Crypto.find({});
        res.send(crypto);
    }
    catch(error){
        console.log(error);
        res.status(500).send(`${error}`);
    }
});

router.get("/cryptos/result", async(req, res)=>{
    try{
        res.sendFile(path.join(__dirname, "../index.html"));
    }
    catch(error){
        console.log(error);
        res.status(404).send(`${error}`)
    }
});

module.exports = router;