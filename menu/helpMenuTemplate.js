const {shell} = require('electron');

exports.helpMenuTemplate = {
  label: "Help",
  submenu: [
    {
      label: 'Learn More',
      click: () => {
        shell.openExternal('http://electronjs.org');
      }
    }
  ]
};