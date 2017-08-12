<template>
	<div class="preloader">
		<div class="spinner">Loading...</div>
		<div class="preloader-message">{{ message }}</div>
	</div>
</template>

<script>
	module.exports = {
		name: 'preloader',
		props: {
			message: {
				type: String,
				default: ''
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
/* Styles in global stylesheet. */
</style>