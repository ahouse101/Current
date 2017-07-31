var { app, BrowserWindow } = require('electron');
var mainWindow; // Global mainWindow reference prevents garbage collection.

app.on('ready', initialize);
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
	if (mainWindow === null) createMainWindow();
});

function initialize() {
	createTrayIcon();
	createMainWindow();
}

function createTrayIcon() {
	
}

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
