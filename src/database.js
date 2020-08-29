const mongoose = require("mongoose");
//const URL = "mongodb://localhost/database";
const URL = "mongodb+srv://admin:123456ab@database.jzwtz.mongodb.net/database?retryWrites=true&w=majority";
mongoose.connect(URL,{
  useNewUrlParser : true,
  useUnifiedTopology: true,
  useNewUrlParser: true
})
    .then(db => console.log("conectado a la base de datos on line"))
    .catch(err => console.log(err));

    module.exports =  mongoose;
