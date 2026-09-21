import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,

    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: true,
        jsx: true,
        blockSpacing: true,
    }),

    {
        files: ['**/*.{js,mjs,cjs,ts,tsx}'],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                cheet: 'readonly',
            },
        },

        rules: {
            'camelcase': ['warn', {
                properties: 'always',
                ignoreDestructuring: false,
                ignoreImports: true,
            }],

            '@stylistic/arrow-parens': ['error', 'as-needed', {
                requireForBlockBody: false,
            }],

            '@stylistic/quotes': ['error', 'single', {
                avoidEscape: true,
                allowTemplateLiterals: true,
            }],
        },
    },
];
