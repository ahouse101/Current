<template>
	<div class='project-details'>
		<template v-if='project === null'>
			<i class="fa fa-hand-o-left wiggle"></i> Select a project to see details.
		</template>
		<template v-else>
			<h4 class='header'>Project: <span class='project-title'>{{ project.name }}</span></h4>
			<span>Full Path: {{ project.path }}</span>
		</template>
	</div>
</template>

<script>
	const { Project } = require('../classes.js')

	module.exports = {
		name: 'project-details',
		props: {
			project: {
				type: Project
			}
		},
		data: () => {
			return {
				
			};
		},
		computed: {
			
		},
		methods: {
			
		},
		created: function() {
			
		}
	}
</script>

<style>
.project-details {
	padding: 10px 20px;
}

.project-details .project-title {
	font-weight: bold;
	color: white;
}

.wiggle {
	position: relative;
	margin-right: 10px;
	animation: wiggle 2s infinite;
}

@keyframes wiggle {
	0% { left: 0; }
	25% { left: -10px; }
	50% { left: 0; }
}
</style>