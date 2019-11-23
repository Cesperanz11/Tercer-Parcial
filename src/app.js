const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const indexRoutes = require('./routes/index');
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
//const port = 3000;
//importando rutas

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//conectando base de datos
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('Db connected'))
.catch(err => console.log("la cagaste"));

//promises


//routes
app.use('/',indexRoutes);

//iniciando servidor
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}!`);
});
