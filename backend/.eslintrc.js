module.exports = {
	env: {
		node: true,
		es2021: true
	},
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	settings: {
		'import/resolver': {
			typescript: {}
		}
	},
	ignorePatterns: ['.eslintrc.js'],
	extends: [
		'airbnb-base',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	rules: {
		'import/no-unresolved': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'no-console': 'off',
		'lines-between-class-members': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never'
			}
		]
	}
};
