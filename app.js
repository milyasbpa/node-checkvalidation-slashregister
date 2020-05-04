const app = require ('express')();
const path = require('path');
const hbs = require('express-handlebars')

// import router
const routes= require('./routes/index')

// views engine
app.engine('hbs', hbs({extname: 'hbs',defaultLayout: 'index', layoutsDir: __dirname + '/views/'}));
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')

// pages
app.use('/',routes)

// listen server
app.listen(1997,()=>{
    console.log("go.. go.. go..")
})