const products = require("../models/products");
const{ Router } = require('express');
const users = require("../models/users");

const router = Router();

router.get('/', (req , res ) =>{
 res.send("<h1>Bienvenidos  de nuevo</h1");
});


router.get('/products', async (req , res ) => {
        const p = await products.find();
        res.json(p);
});
        
router.get('/users', async (req , res ) => {
    const u= await users.find();
    res.json(u);
});
router.post('/signup',  async(req , res ) =>{ 
    const {email ,password } = req.body;
    const newUser = new products({ email, password  });
    await newUser.save();
    res.send(req.body);
   
});


router.delete('/products/delete/:id',  async(req , res ) =>{ 
    const {id } = req.params ;
    await products.remove({_id: id});
    
});

router.post('/products/guardar',  async(req , res ) =>{ 
   const {nombre,caracteristica,email,precio,pais,disponibles,vendidas } = req.body;
   const newProduct = new products({ nombre, caracteristica,email,precio,pais,disponibles,vendidas});
    await newProduct.save();
    res.send("Producto guardado;:   "+newProduct);
   
   
});

// paises

// editar
router.put('/products/update', function (req, res) {
    const {nombre,caracteristica,email,precio,pais,disponibles,vendidas } = req.body;
 
    if(!req.body.nombre || !req.body.caracteristica || !req.body.email || !req.body.precio || !req.body.pais|| !req.body.disponibles || !req.body.vendidas) {
     respuesta = {
      error: true,
      codigo: 502,
      mensaje: 'El campo nombre y apellido son requeridos'
     };
    } else {
      usuario = {
       nombre: req.body.nombre,
       apellido: req.body.apellido
      };
      respuesta = {
       error: false,
       codigo: 200,
       mensaje: 'Usuario actualizado',
       respuesta: usuario
      };
     }
    
    
    res.send(respuesta);
   });

//return  console.log( ));
module.exports = router;











