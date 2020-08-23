const express = require("express");
const app = express();
const cors = require("cors");
require('./database');


app.use(express.json());
app.use(cors());
app.use(require('./routes/index'));

app.set("port", process.env.PORT ||  3000);



app.listen(3000);
console.log("server:  " + app.get("port"));