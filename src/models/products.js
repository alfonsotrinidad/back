const { Schema , model} = require ('mongoose');


//modelo de datos
const productSchema = new Schema({

  nombre:String,
  caracteristicas: String,
  email: String,
  precio: Number,
  pais :String, 
  vendidas: Number,
  disponibles:Number
},{
  //  timestamps : true
}
);

module.exports = model('Product', productSchema,'product');