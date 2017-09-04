<template>
	<div id='main-win'>
		<h4 class='app-heading'>{{ homeFolder }}<span class='sub-heading'>{{ projects.length }} repositories detected.</span></h4>
		<div class='app-body'>
			<split-container :initial-split-position='150'>
				<div slot='split1' class='project-list'>
					<project-list-item v-for='(project, i) in projects' :key='i' :project='project' @click.native='selectedProjectIndex = i' :is-selected='selectedProjectIndex == i'></project-list-item>
				</div>
				<div slot='split2' class='main-area'>
					<project-details :project='selectedProject'></project-details>
				</div>
			</split-container>
		</div>
	</div>
</template>

<script>
	const remote = require('electron').remote;
	const Path = require('path');
	const Fs = require('fs-extra');
	const klaw = require('klaw');
	const findit = require('findit');
	const abs = require('abs');

	const { Project } = require('../classes.js');

	const Titlebar = require('./Titlebar.vue.js');
	const SplitContainer = require('./SplitContainer.vue.js');
	const Preloader = require('./Preloader.vue.js');
	const ProjectListItem = require('./ProjectListItem.vue.js');
	const ProjectDetails = require('./ProjectDetails.vue.js');

	// The view state of the application.
	const Views = {
		Projects: 'Projects',
	}

	module.exports = {
		name: 'main-win',
		components: {
			'titlebar': Titlebar,
			'split-container': SplitContainer,
			'preloader': Preloader,
			'project-list-item': ProjectListItem,
			'project-details': ProjectDetails,
		},
		data: () => {
			return {
				currentView: Views.Projects,
				Views: Views,
				homeFolder: 'C:\\DevProjects\\',
				projects: [],
				selectedProjectIndex: -1
			};
		},
		computed: {
			selectedProject() {
				return this.selectedProjectIndex < 0 ? null : this.projects[this.selectedProjectIndex];
			}
		},
		methods: {
		},
		created: function() {
			findit(this.homeFolder)
			.on('directory', (dir, stat, stop) => {
				var cDir = Path.dirname(dir);
				var base = Path.basename(dir);
				if (base === ".git") {
					this.projects.push(new Project(cDir));
					this.projects.sort((a, b) => {
						return a.name.localeCompare(b.name);
					});
				}
			})
			.on('err', (err) => { console.log(err); })
			.on('end', () => { });
		}
	}
</script>