const {shell} = require('electron');

exports.helpMenuTemplate = {
  label: "Help",
  submenu: [
    {
      label: 'About Electron',
      accelerator: 'CmdOrCtrl + Shift + H',
      click: () => {
        shell.openExternal('http://electronjs.org');
      }
    }
  ]
};