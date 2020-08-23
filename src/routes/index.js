const products = require("../models/products");
const{ Router } = require('express');

const router = Router();

router.get('/', (req , res ) => res.send("Bienvenidos  de nuevo"));


router.get('/products', (req , res ) => {
        res.send("Lista de productos");
});
        

router.post('/signup',  async(req , res ) =>{ 
    const {email ,password } = req.body;
    const newUser = new products({ email, password  });
    await newUser.save();
    res.send(req.body);
   
});



module.exports = router;