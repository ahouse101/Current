<template>
	<div class='titlebar'>
		<h4 class='titlebar-title'>
			<slot></slot>
		</h4>
		<div class='titlebar-buttons'>
			<button><i class="fa fa-window-minimize"></i></button>
			<button><i class="fa fa-window-maximize"></i></button>
			<button style="position: relative; top: 0px"><i class="fa fa-window-close"></i></button>
		</div>
	</div>
</template>

<script>
	const { Project } = require('../classes.js')

	module.exports = {
		name: 'titlebar',
		props: {
			project: {
				type: Project
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

<style>
.titlebar {
	-webkit-app-region: drag;
	-webkit-user-select: none;
	padding: 10px 20px;
	background: #111;
	border-bottom: 1px solid black;
	color: #EEE;
	positon: relative;
}

.titlebar-buttons {
	-webkit-app-region: no-drag;
	position: absolute;
	top: 10px;
	right: 10px;
}

.titlebar-buttons button {
	background: none;
	outline: none;
	border: none;
	color: #DDD;
	margin-left: 10px;
	font-size: 20px;
}

.titlebar-buttons button:hover {
	color: white;
}

.titlebar-title {
	
}
</style>