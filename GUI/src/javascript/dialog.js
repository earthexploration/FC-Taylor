const {ipcMain, dialog, BrowserWindow} = require('electron');

// Open file dialog to open file
ipcMain.on('open-file-dialog', (event)=>
{
  dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), 
      {properties: ['openFile']}, 
      (files)=>
  {
      if(files)
      {
          event.sender.send('SelectedFile', files);
      }
  });
});

// Open save file dialog to save file
ipcMain.on('save-file-dialog', (event)=>
{
  dialog.showSaveDialog(BrowserWindow.getFocusedWindow(), 
      {}, 
      (files)=>
  {
      if(files)
      {
          event.sender.send('SaveFile', files);
      }
  });
});

// Opens an error dialog message
ipcMain.on('open-error-dialog', (event)=>
{
    dialog.showErrorBox('Error', 'Could not execute the FC-Taylor program!');
});
// Opens an error dialog message
ipcMain.on('open-errorKilled-dialog', (event)=>
{
    dialog.showErrorBox('Error', 'An error occured while executing the program!\nSee the ouput for details.');
});

// Opens a warning dialog message
ipcMain.on('check-input-dialog', (event)=>
{
    const options = 
    {
        type:"info",
        title:"Warning",
        message:"Please check your input!\nMake sure that the supplied input values are positive or non negative numbers!\n",
        buttons:['Ok']
    };
    dialog.showMessageBox(BrowserWindow.getFocusedWindow(), options);
})

// Opens a success dialog message
ipcMain.on('open-successfulTermination-dialog', (event)=>
{
    const options = 
    {
        type:"info",
        title:"Success",
        message:"Application terminated successfully",
        buttons:['Ok']
    };
    dialog.showMessageBox(BrowserWindow.getFocusedWindow(), options);
})