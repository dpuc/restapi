const express = require('express');
const conectDb = require('./config/db');

const app = express();
//conectDb();
//definir rutas
app.use('/personas', require('./routes/web'))

app.listen(4000, () =>{
    console.log('el servidor esta corriendo bien')
})