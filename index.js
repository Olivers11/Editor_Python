const { app } = require('electron');
const { CrearVentana } = require('./init');
app.whenReady().then(CrearVentana)
