const express = require('express');
const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.send(`
        <form action="product" method="POST">
        <input name="title" type="text"></input>
        <button type="submit">Submit</button>  
        </form>
    `);
});

router.post('/product',(req, res, next) => { 
    console.log(req.body);
    res.redirect('/');
 })

module.exports = router;