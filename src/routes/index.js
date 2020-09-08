const products = require("../models/products");
const{ Router } = require('express');
const users = require("../models/users");
const jwt = require('jsonwebtoken');
const router = Router();
 const config = require('../config');


router.get('/', (req , res ) =>{
 res.send("<h1>Bienvenidos  de nuevo</h1>");
});


router.get('/products', async (req , res ) => {
        const p = await products.find();
        res.json(p);
});
        
router.get('/users', async (req , res ) => {
    const u= await users.find();
    res.json(u);
});

//signin
router.post('/signin', async (req , res ) => {
    const {user,password} = req.body;
   const u = await users.findOne({user: user});
  // return res.json(u);
   if(!u) return res.send("No encontrado")
   if (u.password  !== password ) return  res.send("Algo va mal")
    const token= jwt.sign(
        {           _id: u._id,
        //    user: u.user
         }
            ,config.secret);
    console.log(({token}) );
    return res.json({token}) 
   
});
   

// registrar usuario
router.post('/signup',  async(req , res ) =>{ 
    const {user ,password } = req.body;
    const newUser = new users({ user, password  });
  //  newUser.password = await newUser.encrypt(newUser.password);
   // console.log(newUser);
    await newUser.save();
    
   const token =  jwt.sign({_id:newUser._id },config.secret);
    res.json({
        user:newUser.user,
        auth:true,
        message:"Saved",
        token});
    //console.log(newUser.password);
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











