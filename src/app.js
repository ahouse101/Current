const { app, Menu, BrowserWindow } = require('electron');
const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer');

var isDevMode = true; // TODO: Add detection or an environment variable for this.
var mainWindow; // Global mainWindow reference prevents garbage collection.

app.on('ready', initialize);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (mainWindow === null) createMainWindow(); });

function initialize() {
	Menu.setApplicationMenu(null);
	createTrayIcon();
	createMainWindow();
}

function createTrayIcon() {
	// TODO: Add tray implementation.
}

function createMainWindow() {
	mainWindow = new BrowserWindow({
		width: 650,
		height: 600,
		minWidth: 500,
		minHeight: 400,
		backgroundColor: '#282828',
		//frame: false
	});
	mainWindow.loadURL('file://' + __dirname + '/main-win.html');
	if (isDevMode) installExtension(VUEJS_DEVTOOLS);

	mainWindow.on('closed', () => {
		mainWindow = null; // Allows garbage collection.
	});
};
