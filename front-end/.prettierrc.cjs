/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
module.exports = {
	arrowParens: 'always',
	bracketSameLine: true,
	bracketSpacing: true,
	endOfLine: 'lf',
	jsxSingleQuote: true,
	plugins: ['prettier-plugin-tailwindcss'],
	printWidth: 80,
	quoteProps: 'as-needed',
	semi: true,
	singleAttributePerLine: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'all',
	useTabs: true,
};
