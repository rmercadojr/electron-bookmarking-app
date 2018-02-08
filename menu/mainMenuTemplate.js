const {fileMenuTemplate} = require('./fileMenuTemplate');
const {editMenuTemplate} = require('./editMenuTemplate');
const {viewMenuTemplate} = require('./viewMenuTemplate');
const {windowMenuTemplate} = require('./windowMenuTemplate');
const {helpMenuTemplate} = require('./helpMenuTemplate');
const {devMenuTemplate} = require('./devMenuTemplate');

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
