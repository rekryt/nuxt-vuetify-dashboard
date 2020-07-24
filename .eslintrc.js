module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:nuxt/recommended', '@vue/prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		'no-console': 'off',
		'vue/multiline-html-element-content-newline': [
			2,
			{
				ignoreWhenEmpty: true,
				ignores: ['pre', 'textarea'],
				allowEmptyLines: false,
			},
		],
	},
};
