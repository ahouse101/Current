const path = require('path');
const Vue = require('../node_modules/vue/dist/vue.common.js');
const vueCompiler = require('vue-single-file-component-compiler');
const Mousetrap = require('mousetrap');
const remote = require('electron').remote;

document.addEventListener("DOMContentLoaded", initApp);

function compileComponents() {
	new vueCompiler({fileName: path.join(__dirname, '/components/Preloader.vue'), enableCaching: true}).compile();
	return WindowComponent = require((new vueCompiler({
		fileName: path.join(__dirname, '/components/MainWin.vue'),
		enableCaching: true
	})).compile());
}

function initApp() {
	// Create Vue instance for the global event bus.
	global.eventBus = new Vue();
	
	// Add keyboard shortcuts.
	//Mousetrap.bind(['esc', 'enter'], dispatchShortcut);
	Mousetrap.bind('ctrl+r', refreshWindow);
	Mousetrap.bind('f11', toggleFullscreen);
	Mousetrap.bind('f12', openDevTools);
	
	initComponent(compileComponents());
}

function initComponent(ShoeboxComponent) {
	const WindowVue = Vue.extend(WindowComponent);
	
	// This is the real app initialization, all other initialization is within
	// the Shoebox component.
	windowVue = new WindowVue({
		el: '#vue'
	});
}

function dispatchShortcut(ev, combo) {
	ev.preventDefault();
	eventBus.$emit('shortcut', combo);
}

function refreshWindow() {
	let win = remote.getCurrentWindow();
	win.reload();
}

function toggleFullscreen(ev) {
	let win = remote.getCurrentWindow();
	win.setFullScreen(!win.isFullScreen());
}

function openDevTools(ev) {
	let win = remote.getCurrentWindow();
	win.webContents.openDevTools();
}