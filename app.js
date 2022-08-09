const express = require('express');

const app = express();

const Productos = require('./contenedor/Contenedor');

const productos = new Productos('./models.txt');

const PORT = 8080;

app.get('/allModels', (req, res) => {
    productos.getAll()
    .then((data) => {
        res.send(data)
    })
    .catch((error) => {
        res.send([]);
    })
})

app.get('/randomModel', (req, res) => {
    productos.getRandom()
    .then((data) => {
        res.send(data)
    })
    .catch((error) => {
        res.send([])
    })
})

const server = app.listen(PORT, () => {
    console.log(`Se esta escuchando por el puerto ${PORT}`);
})

server.on('error', error => console.log(`Error en el servidor: ${error}`))  