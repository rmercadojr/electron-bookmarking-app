exports.fileMenuTemplate =  {
  label: "File",
  submenu: [
    {label: 'file 1', click: function() { console.log("file 1 clicked")}},
    {label: 'File 2'},
    {type: 'separator'}
  ]
};