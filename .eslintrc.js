module.exports = {
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'jest',
    'promise',
    'react',
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',

    // "eslint:recommended",
    // "plugin:react/recommended",

    // Uncomment the following lines to enable eslint-config-prettier
    // Is not enabled right now to avoid issues with the Next.js repo
    // "prettier",
    // "prettier/@typescript-eslint"
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    // "prettier/prettier": [
    //   "error",
    //   {
    //     "endOfLine": "auto"
    //   }
    // ]
    //   "react/react-in-jsx-scope": 0,
    //   "react/display-name": 0,
    'react/prop-types': 0,
    //   "@typescript-eslint/explicit-function-return-type": 0,
    //   "@typescript-eslint/explicit-member-accessibility": 0,
    //   "@typescript-eslint/indent": 0,
    //   "@typescript-eslint/member-delimiter-style": 0,
    //   "@typescript-eslint/no-explicit-any": 0,
    //   "@typescript-eslint/no-var-requires": 0,
    '@typescript-eslint/no-use-before-define': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    //   "@typescript-eslint/no-unused-vars": [
    //     2,
    //     {
    //       "argsIgnorePattern": "^_"
    //     }
    //   ],
    //   "no-console": [
    //     2,
    //     {
    //       "allow": ["warn", "error"]
    //     }
    //   ]
    // }
  },
}
