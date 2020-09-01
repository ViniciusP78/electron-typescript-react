const { app, BrowserWindow } = require('electron');

var mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile(`${__dirname}/dist/index.html`);

  mainWindow.webContents.openDevTools();

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
})