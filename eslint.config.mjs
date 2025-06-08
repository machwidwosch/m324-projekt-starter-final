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


                // NodeJS globals (falls notwendig)
                module: 'readonly',
                require: 'readonly',
                process: 'readonly',
            },
        },
        ignores: ['dist/', 'node_modules/'],
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'error',
            'no-case-declarations': 'error',
        },
    },
];

