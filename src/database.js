const mongoose = require("mongoose");
const URL = "mongodb://localhost/database";
mongoose.connect(URL,{
  useNewUrlParser : true,
  useUnifiedTopology: true,
  useNewUrlParser: true
})
    .then(db => console.log("conectado a la base de datos"))
    .catch(err => console.log(err));

    module.exports =  mongoose;
