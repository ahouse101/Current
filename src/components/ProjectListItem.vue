<template>
	<div class='project-list-item' :class='{ selected: isSelected }'>
		<h6 class='project-title'>{{ project.name }}</h6>
	</div>
</template>

<script>
	const { Project } = require('../classes.js')

	module.exports = {
		name: 'project-list-item',
		props: {
			project: {
				type: Project
			},
			isSelected: {
				type: Boolean
			}
		},
		data: () => {
			return {};
		},
		computed: {
			
		},
		methods: {
			
		},
		created: function() {
			
		}
	}
</script>