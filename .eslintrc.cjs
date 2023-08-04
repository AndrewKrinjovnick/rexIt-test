module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react-refresh', 'import', 'prettier'],
	rules: {
		'no-console': 'warn',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
			},
		],
		'import/prefer-default-export': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'no-continue': 'off',
		'no-control-regex': 'off',
		'no-plusplus': 'off',
		'react/button-has-type': 'off',
		'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
		'react/jsx-props-no-spreading': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
