const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (request, response) => {
    response.send(`<h1 style="color:blue">Bienvenidos al servidor express</h1>`)
})

let visitas = 0;
app.get('/visitas', (request, response) => {
    visitas++;
    response.send(`Contador de visitas: ${visitas}`)
})

app.get('/fyh', (request, response) => {    
    response.send({fyh: new Date().toLocaleString()})
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
})