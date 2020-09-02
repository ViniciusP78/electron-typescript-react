import { app, BrowserWindow, ipcMain, dialog } from 'electron';

var mainWindow: BrowserWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');

  // mainWindow.webContents.openDevTools();

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
})

const OpenTrackFromUser = () => {
  const files = dialog.showOpenDialogSync({
    properties: ['openFile'],
    title: 'Open .mp3 Music',
    filters: [
      {name: 'MP3 File', extensions: ['mp3']},
      {name: 'FLAC File', extensions: ['flac']}
    ]
  });

  if (!files) return;

  const file = files[0];

  return file;
}

ipcMain.handle('open-track', (event, args) => {
  const trackURI = OpenTrackFromUser();
  return trackURI;
})