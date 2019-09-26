<template>
	<v-app dark>
		<v-navigation-drawer v-model="drawer" app clipped>
			<v-list dense>
				<v-list-item>
					<v-list-item-action>
						<v-icon>mdi-view-dashboard</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Dashboard</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-action>
						<v-icon>mdi-settings</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Settings</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app clipped-left>
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>
			<v-toolbar-title>Application</v-toolbar-title>
		</v-app-bar>
		<v-content>
			<v-container>
				<nuxt />
			</v-container>
		</v-content>
		<v-footer app>
			<span>&copy; 2019</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	props: {
		source: String,
	},
	data: () => ({
		drawer: null,
	}),
};
</script>
