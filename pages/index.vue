<template>
	<v-row align="center" justify="center">
		<v-col class="shrink">
			<v-tooltip right>
				<template v-slot:activator="{ on }">
					<v-btn :href="source" icon large target="_blank" v-on="on">
						<v-icon large>mdi-code-tags</v-icon>
					</v-btn>
				</template>
				<span>Source</span>
			</v-tooltip>
			<v-tooltip right>
				<template v-slot:activator="{ on }">
					<v-btn
						icon
						large
						href="https://codepen.io/johnjleider/pen/bXNzZL"
						target="_blank"
						v-on="on"
					>
						<v-icon large>mdi-codepen</v-icon>
					</v-btn>
				</template>
				<span>Codepen</span>
			</v-tooltip>
		</v-col>
	</v-row>
</template>
<script>
export default {
	props: {
		source: String,
	},
};
</script>
