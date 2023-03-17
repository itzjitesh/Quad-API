const express = require('express');
const cors = require("cors");
const routes = require("./routes/cryptoRoutes");
require("./config/db");
require("./data/cryptoData");

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use("/", routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
