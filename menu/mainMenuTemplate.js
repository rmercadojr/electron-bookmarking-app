const {fileMenuTemplate} = require('./mainMenu/fileMenuTemplate');
const {editMenuTemplate} = require('./mainMenu/editMenuTemplate');
const {viewMenuTemplate} = require('./mainMenu/viewMenuTemplate');
const {windowMenuTemplate} = require('./mainMenu/windowMenuTemplate');
const {helpMenuTemplate} = require('./mainMenu/helpMenuTemplate');
const {devMenuTemplate} = require('./mainMenu/devMenuTemplate');

exports.mainMenuTemplate = [
  fileMenuTemplate,
  editMenuTemplate,
  viewMenuTemplate,
  windowMenuTemplate,
  helpMenuTemplate,
  devMenuTemplate
];

// // Add dev tools menu if not in production
// if (process.env.NODE_ENV !== 'production') {
//     menuTemplate.push(devMenuTemplate);
// }
