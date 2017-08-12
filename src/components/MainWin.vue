<template>
	<div id="main-win">
		<!-- App UI -->
		
	</div>
</template>

<script>
	const remote = require('electron').remote;
	const Path = require('path');
	const Fs = require('fs-extra');
	const klaw = require('klaw');
	const Git = require('nodegit');
	const findit = require('findit');
	const abs = require('abs');

	const Preloader = require('./Preloader.vue.js');

	// The view state of the application.
	const Views = {
		Loading: 'loading',
		Repos: 'repos',
	}

	module.exports = {
		name: 'main-win',
		components: {
			'preloader': Preloader
		},
		data: () => {
			return {
				currentView: Views.Loading,
				Views: Views,
				repoDirs: []
			};
		},
		computed: {
			
		},
		methods: {
			
		},
		created: function() {
			findit('C:/DevProjects')
			.on('directory', (dir, stat, stop) => {
				var cDir = Path.dirname(dir);
				var base = Path.basename(dir);
				if (base === ".git") this.repoDirs.push(cDir);
			})
			.on('err', (err) => {
				console.log(err);
			})
			.on('end', () => {
				console.log(this.repoDirs.length + ' repositories found.');
				for (var dir of this.repoDirs) {
					console.log(dir);
				}
				Git.Repository.open(this.repoDirs[0])
					.then((repo) => {
						return repo.getStatus();
					})
					.then((status) => {
						console.log(status[0]);
					});
			});
			
		}
	}
</script>

<style>

</style>