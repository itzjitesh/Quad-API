const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: "./.env"});

const db = process.env.MONGO_URI;

mongoose.set('strictQuery', false);
mongoose.connect(db,  {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{console.log(`connected to mongodb...`);})
    .catch((err)=>{console.log(`Not connected to mongodb..., ${err}`);});
