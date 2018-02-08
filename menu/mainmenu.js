const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const shell = electron.shell;

menuTemplate = [
  {
    label: "File",
    submenu: [
      {label: 'file 1', click: function() { console.log("file 1 clicked")}},
      {label: 'File 2'},
      {type: 'separator'}
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {role: 'reload'},
      // {role: 'forcereload'},
      {role: 'toggledevtools'},
      {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    label: 'Window',
    submenu: [
      {role: 'minimize'},
      // {role: 'maximize'},
      {role: 'close'}
    ]
  },
  {
    label: "Help",
    submenu: [
      {
        label: 'Learn More',
        click: () => {
          shell.openExternal('http://electronjs.org');
        }
      }
    ]
  }
];

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })

  // Edit menu
  template[1].submenu.push(
    {type: 'separator'},
    {
      label: 'Speech',
      submenu: [
        {role: 'startspeaking'},
        {role: 'stopspeaking'}
      ]
    }
  )

  // Window menu
  template[3].submenu = [
    {role: 'close'},
    {role: 'minimize'},
    {role: 'zoom'},
    {type: 'separator'},
    {role: 'front'}
  ]
}

// Build menu from template.
const menu = Menu.buildFromTemplate(menuTemplate);
// Set menu as the application menu on macOS.
// On Windows and Linux, the menu will be set as each window's top menu.
Menu.setApplicationMenu(menu);