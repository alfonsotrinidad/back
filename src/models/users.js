const { Schema , model} = require ('mongoose');
const bc = require('bcrypt');


//modelo de datos
const userSchema = new Schema({
  user:String,
  password: String
},{
    timestamps : true
}
);

userSchema.methods.encrypt = async(password) => {
  const salt = await bc.genSalt(10);
  return bc.hash(password,salt);
}

module.exports = model('User', userSchema,'user');