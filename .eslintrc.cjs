module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        quotes: [1, 'single'],
        'react/jsx-curly-brace-presence': [1, 'always'],
        'react/jsx-one-expression-per-line': [0],
        'react/self-closing-comp': [1, { component: true, html: false }],
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    },
};
