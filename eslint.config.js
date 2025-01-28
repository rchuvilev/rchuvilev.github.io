import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default [
    {
        ignores: ['dist'],
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: globals.browser,
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        extends: [
            prettier,
            "plugin:@typescript-eslint/recommended",
        ],
        plugins: {
            import: importPlugin,
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'unused-imports': unusedImports,
            '@typescript-eslint': tseslint,
        },
        rules: {
            "prettier/prettier": "error",
            'no-unused-vars': 'warn',
            'semi': ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            // React rules
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
            // Import/export rules
            'import/order': [
                'error',
                {
                    groups: [
                        ['builtin', 'external'],
                        ['internal', 'parent'],
                        ['sibling', 'index'],
                    ],
                    pathGroups: [
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'before',
                        },
                    ],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            // Unused imports
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],

            // TypeScript rules
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],

            // Code quality
            'no-console': 'error',
            'no-debugger': 'error',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
