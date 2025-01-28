module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 4,
  plugins: [require.resolve('prettier-plugin-sort-imports')],
  importOrder: [
    '^react$', // React imports first
    '^@?\\w', // Packages (node_modules)
    '^@/(.*)', // Aliased paths
    '^[./]', // Relative imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxSingleQuote: true, // Enforce single quotes in JSX
  bracketSameLine: false, // Ensure closing brackets are on a new line
  arrowParens: 'avoid',
};
