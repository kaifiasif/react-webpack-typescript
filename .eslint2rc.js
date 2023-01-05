module.exports = {
  extends: [ 'airbnb', 'plugin:import/typescript', 'plugin:react/recommended', 'prettier', 'prettier/react' ],
  env: {
    browser: true,
    jest: true
  },
  globals: {
    renderComponent: true
  },
  plugins: [ 'prettier', 'react-hooks', 'testing-library' ],
  overrides: [
    {
      files: [ '*/_tests_//.[jt]s?(x)', '*/?(.)+(spec|test).[jt]s?(x)' ],
      extends: [ 'plugin:testing-library/react' ]
    },
    {
      files: [ "*/.ts", "*/.tsx" ],
      extends: [ 'airbnb-typescript' ],
      rules: {
        "@typescript-eslint/comma-dangle": [ 'error', 'never' ],
        "@typescript-eslint/object-curly-spacing": "warn",
        "@typescript-eslint/semi": [ 'error', 'never' ],
        "@typescript-eslint/space-before-blocks": "off"
      },
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],
  parser: 'babel-eslint',
  rules: {
    'array-bracket-spacing': [ 'warn', 'always' ],
    'comma-dangle': [ 'error', 'never' ],
    'no-class-assign': [ 'off' ],
    'no-func-assign': [ 'off' ],
    'no-param-reassign': [ 'error', { props: false } ],
    'no-plusplus': [ 'error', { allowForLoopAfterthoughts: true } ],
    'react/forbid-prop-types': [ 'off' ],
    'react/jsx-filename-extension': [ 'error', { extensions: [ '.js', '.jsx', '.ts', '.tsx' ] } ],
    'react/jsx-props-no-spreading': [ 0 ],
    'react/display-name': [ 0, { ignoreTranspilerName: false } ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: [ 'error', 'never' ],
    'jsx-a11y/anchor-is-valid': [ 'off' ],
    'react/prop-types': [ 'off' ],
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: [ 'nesting', 'id' ]
        }
      }
    ],
    'react/no-unused-prop-types': [ 'off' ],
    'react/no-did-mount-set-state': [ 'off' ],
    'react/no-typos': [ 'off' ],
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        args: 'all',
        argsIgnorePattern: '^_'
      }
    ],
    'arrow-parens': [ 2, 'as-needed' ],
    'import/no-extraneous-dependencies': [ 0 ],
    'no-mixed-operators': 'off',
    'object-curly-newline': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'import/no-named-as-default': [ 0 ],
    'max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
