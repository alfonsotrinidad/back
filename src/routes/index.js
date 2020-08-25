const products = require("../models/products");
const{ Router } = require('express');

const router = Router();

router.get('/', (req , res ) => res.send("Bienvenidos  de nuevo"));


router.get('/products', async (req , res ) => {
        const p = await products.find();
        res.json(p);
});
        

router.post('/signup',  async(req , res ) =>{ 
    const {email ,password } = req.body;
    const newUser = new products({ email, password  });
    await newUser.save();
    res.send(req.body);
   
});


router.post('/products/guaradar',  async(req , res ) =>{ 
    const {nombre,caracteristica,email,pais,vendidas,disponibles } = req.body;
   
    const newProduct = new products({ nombre, caracteristica,email,pais ,precio,disponibles,
                                      vendidas});
    await newProduct.save();
    res.send(newProduct);
   
});


module.exports = router;