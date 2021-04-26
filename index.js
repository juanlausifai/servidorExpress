const express = require('express');
const app = express();

/*middleware url:http://localhost:3000/api/contactos?valid=si */
/*app.use((req,res,next)=>{
    if(req.query.valid==='si'){
        next();
    }else{
        res.send('No permitido');
    }
});*/

app.get('/api/contactos', (req, res) => {
  res.send('listado de contactos!');
});

app.post('/api/contactos', (req, res) => {
    res.send('cargando contacto!');
});

app.put('/api/contactos/{id}', (req, res) => {
    res.send('editando contacto!');
});

app.delete('/api/contactos/{id}', (req, res) => {
    res.send('eliminando contacto!');
});



app.listen(3000, () => {
  console.log('Atendiendo en el puerto 3000!');
});

