const products = require("../models/products");
const{ Router } = require('express');
const users = require("../models/users");

const router = Router();

router.get('/', (req , res ) =>
 res.send("<h1>Bienvenidos  de nuevo</h1"));


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


router.post('/products/guardar',  async(req , res ) =>{ 
   const {nombre,caracteristica,email,precio,pais,disponibles,vendidas } = req.body;
   const newProduct = new products({ nombre, caracteristica,email,precio,pais,disponibles,vendidas});
    await newProduct.save();
    res.send("Producto guardado;:   "+newProduct);
    res.send(newProduct);
   
   
});

// paises


//return  console.log( ));
module.exports = router;