/* Todd: if you get errors here make sure ur node version is updated */
module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'parser': '@typescript-eslint/parser',
    },
    'plugins': [
        '@typescript-eslint',
        'react'
    ],
    'rules': {
        'react/react-in-jsx-scope': 'off', // After react 17 its not needed 
        'react/prop-types': 'off', // Should probably fix this stuff eventually :P
        'indent': [
            'warn',
            4
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'warn',
            'always'
        ]
    }
};