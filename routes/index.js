const router = require('express').Router();
var bodyParser = require('body-parser');
const {check, validationResult}=require('express-validator');
const session = require('express-session')

// bodyparser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/',(req,res,next) => {
    res.render('index', {title :'Homepage'})
})

router.post('/sapa', urlencodedParser, function (req, res) {
    console.log(req.body.sapaan);
    res.render('menyapa',{output:req.body.sapaan})
})

// register form dan validasi
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:false}))

router.get('/register',(req,res,next) => {
  res.render('register',{title: 'Register Page'});
  // req.session.errors=null;
})

router.post('/register-submit', [check('email').isEmail(), check('password').equals('confirmPassword')], (req,res,next)=> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.render('register',{title: 'Register Page'})
  } else {
    return res.render('index', {title :'Homepage'})
  }
})

module.exports=router