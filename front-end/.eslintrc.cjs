/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended',
		'eslint-config-prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	plugins: ['@tanstack/query', 'import', 'react', 'simple-import-sort'],
	rules: {
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				fixStyle: 'inline-type-imports',
				prefer: 'type-imports',
			},
		],
		'@typescript-eslint/no-misused-promises': [
			2,
			{
				checksVoidReturn: { attributes: false },
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ argsIgnorePattern: '^_' },
		],
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
		'@tanstack/query/exhaustive-deps': 'error',
		'@tanstack/query/no-deprecated-options': 'error',
		'@tanstack/query/prefer-query-object-syntax': 'error',
		'@tanstack/query/stable-query-client': 'error',
	},
	ignorePatterns: ['src/components/ui/*.ts', 'src/components/ui/*.tsx'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				paths: ['src'],
			},
		},
		react: {
			version: 'detect',
		},
	},
};
