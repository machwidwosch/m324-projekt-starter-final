import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                document: 'readonly',
                window: 'readonly',
                console: 'readonly',
                localStorage: 'readonly',
                setTimeout: 'readonly',
                fetch: 'readonly',
                WebSocket: 'readonly',
                module: 'readonly',
            },
        },
        ignores: ['dist/', 'node_modules/'],
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'error',
        },
    },
];

