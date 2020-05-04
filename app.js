const express =require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars')

// import router
const routes= require('./routes/index')

// views engine
app.engine('hbs', hbs({extname: 'hbs',defaultLayout: 'layout', layoutsDir: __dirname + '/views/layout'}));
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')

// pages
app.use('/',routes)
// untuk tahu template css ada dimana
app.use(express.static(path.join(__dirname, 'public')));


// listen server
app.listen(1997,()=>{
    console.log("go.. go.. go..")
})