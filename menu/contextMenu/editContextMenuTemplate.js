exports.editContextMenuTemplate = {
  label: 'Edit',
  submenu: [
    {
      label: 'Hello',
      click: () => { console.log('Clicked Hello'); }
    },
    {type: 'separator'},
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
};