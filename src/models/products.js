const { Schema , model} = require ('mongoose');


//modelo de datos
const productSchema = new Schema({
  id:Number,
  nombre:String,
  caracteristicas: String,
  email: String,
  pais :String, 
  vendidas: Number,
  disponibles:Number
},{
  //  timestamps : true
}
);

module.exports = model('Product', productSchema,'product');