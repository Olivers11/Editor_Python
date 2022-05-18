const {BrowserWindow} = require('electron-acrylic-window');

function CrearVentana(){
    let win = new BrowserWindow({
        width: 900,
        height: 600,
        title: 'OlsterCode',
        minWidth: 600,
    	autoHideMenuBar: true,
	vibrancy: {
	    theme: 'dark',
	    effect: 'blur',
	    disableOnBlur: false
	},
	visualEffectState: true,
	icon: './assets/icons/win/icono.ico',
	webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            contextIsolation: false
        }
    })

    win.loadFile('src/index.html');
}
module.exports = {
    CrearVentana
}
