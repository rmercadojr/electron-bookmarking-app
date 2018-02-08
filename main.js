const {app, BrowserWindow, Menu, Tray} = require('electron');
const path = require('path');
const url = require('url');
const iconPath = path.join(__dirname, './assets/logo.png');

// For global shortcuts
const {globalShortcut} = require('electron');

// Require menus
const {mainMenuTemplate} = require('./menu/mainMenuTemplate');
const {contextMenuTemplate} = require('./menu/contextMenuTemplate');

let mainWindow;
let tray;

/**
 * Create the new window
 */
function createWindow() {
  // Register global shortcut
  globalShortcut.register('Alt + 1', () => {
    mainWindow.show();
  });

  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // Render index.html which will contain our root Vue component
  // TODO: use path and url
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Dereference the mainWindow object when the window is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  
  // Set application menu
  Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate));

  /**
   * Create context menu
   */
  mainWindow.webContents.on('context-menu', (e, params) => {
    contextMenu = Menu.buildFromTemplate(contextMenuTemplate);
    contextMenu.popup(mainWindow, params.x, params.y);
  });
}



/**
 * Call the createWindow() method when Electron has finished initializing
 */
app.on('ready', () => {
  createWindow();
  
  tray = new Tray(iconPath);
  tray.setToolTip('Bookmarking App');
  const contextMenu = Menu.buildFromTemplate(mainMenuTemplate);
  tray.setContextMenu(contextMenu);
});

/**
 * Unregister global shortcuts
 */
app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

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