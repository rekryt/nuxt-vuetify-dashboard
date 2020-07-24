import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default (ctx) => {
	const vuetify = new Vuetify({
		theme: {
			themes: {
				light: {
					primary: '#4caf50',
					secondary: '#4caf50',
					tertiary: '#495057',
					accent: '#82B1FF',
					error: '#f55a4e',
					info: '#00d3ee',
					success: '#5cb860',
					warning: '#ffa21a',
				},
			},
		},
		icons: {
			iconfont: 'mdi',
		},
	});

	ctx.app.vuetify = vuetify;
	ctx.$vuetify = vuetify.framework;
};
