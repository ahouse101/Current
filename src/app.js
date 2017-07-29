var { app, BrowserWindow } = require('electron');

var mainWindow; // Global mainWindow reference prevents garbage collection.
function createMainWindow() {
	// Create the main window.
	mainWindow = new BrowserWindow({
		width: 500,
		height: 400,
		backgroundColor: '#111111',
		autoHideMenuBar: true,
		darkTheme: true, // For some GTK+3 systems.
	});
	mainWindow.loadURL('file://' + __dirname + '/main-win.html');

	mainWindow.on('closed', () => {
		mainWindow = null; // Allows garbage collection.
	});
};

// Open mainWindow when Electron is ready.
app.on('ready', createMainWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createMainWindow();
	}
});
