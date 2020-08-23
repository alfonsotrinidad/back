const { Schema , model} = require ('mongoose');


//modelo de datos
const productSchema = new Schema({
  id:Number,
  email: String,
  caracteristicas: String,
  fecha_lanzamineto: Date,
  pais :String, 
  password: String,  //moneda
  uVendidas: Number,
  uDisponibles:Number
},{
  //  timestamps : true
}
);

module.exports = model('Product', productSchema,'product');