<template>
	<v-main class="grey lighten-3">
		<div id="core-view">
			<v-fade-transition mode="out-in">
				<nuxt></nuxt>
			</v-fade-transition>
		</div>
	</v-main>
</template>

<script>
export default {
	name: 'CoreView',

	metaInfo() {
		return {
			title: 'Vue Material Dashboard by CreativeTim',
		};
	},
};
</script>
