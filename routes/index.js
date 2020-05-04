const router = require('express').Router();
var bodyParser = require('body-parser');

// bodyparser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/',(req,res,next) => {
    res.render('index', {title :'Homepage'})
})

router.post('/sapa', urlencodedParser, function (req, res) {
    res.render('menyapa',{output:req.body.sapaan})
  })

module.exports=router