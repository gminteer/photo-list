const baseExtends = [
  'eslint:recommended',
  'plugin:promise/recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
  'react-app',
  'google',
  'prettier',
];

const baseRules = {
  'brace-style': ['error', '1tbs', {allowSingleLine: true}],
  curly: ['error', 'multi-or-nest', 'consistent'],
  eqeqeq: ['error', 'always'],
  'new-cap': ['off'],
  'no-debugger': ['warn'],
  'no-template-curly-in-string': ['error'],
  'prefer-template': ['warn'],
  'prettier/prettier': ['warn'],
  'require-jsdoc': ['off'],
  'vars-on-top': ['warn'],
  'no-unused-vars': ['error', {varsIgnorePattern: '^_'}],
};

module.exports = {
  env: {
    es2017: true,
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  plugins: ['prettier', 'promise', 'import', 'node', 'security'],
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'public/**/*.js',
      env: {node: true},
      extends: baseExtends.concat(
        'plugin:node/recommended',
        'plugin:security/recommended'
      ),
      rules: baseRules,
    },
  ],
};
