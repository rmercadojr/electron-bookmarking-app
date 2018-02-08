const {app, BrowserWindow, Menu} = require('electron');

const {mainMenuTemplate} = require('./menu/mainMenuTemplate');

let mainWindow;

/**
 * Create the new window
 */
function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // Render index.html which will contain our root Vue component
  // TODO: use path and url
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Dereference the mainWindow object when the window is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  
  // Set application menu
  Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate));
}

/**
 * Call the createWindow() method when Electron has finished initializing
 */
app.on('ready', createWindow);

/**
 * When all windows are closed, quit the application on Windows/Linux
 */
app.on('window-all-closed', () => {
  // Only quit the application on OS X if the user hits cmd + q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/**
 * Re-create the mainWindow if the dock icon is clicked in OS X
 * and no other windows were open
 */
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});