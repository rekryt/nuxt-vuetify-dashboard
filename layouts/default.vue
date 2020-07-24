<template>
	<v-app>
		<core-app-bar />
		<core-drawer />
		<core-view />
		<core-footer />
	</v-app>
</template>

<script>
import Drawer from '@/components/core/Drawer';
import Footer from '@/components/core/Footer';
import AppBar from '@/components/core/AppBar';
import View from '@/components/core/View';
export default {
	props: {
		source: String,
	},
	data: () => ({
		drawer: null,
	}),
	components: {
		CoreDrawer: Drawer,
		CoreFooter: Footer,
		CoreAppBar: AppBar,
		CoreView: View,
	},
};
</script>
