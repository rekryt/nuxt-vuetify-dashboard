module.exports = {
	apps: [
		{
			name: 'production',
			script: 'npm',
			args: 'run start',
			env: {
				PORT: 4000,
			},
		},
	],
};
