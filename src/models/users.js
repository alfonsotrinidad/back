const { Schema , model} = require ('mongoose');


//modelo de datos
const userSchema = new Schema({
  user:String,
  password: String
},{
    timestamps : true
}
);

module.exports = model('User', userSchema,'user');