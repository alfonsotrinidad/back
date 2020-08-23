const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/database",{
  useNewUrlParser : true,
  useUnifiedTopology: true,
  useNewUrlParser: true
})
    .then(db => console.log("conectado a la base de datos"))
    .catch(err => console.log(err));
