module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:promise/recommended',
    'plugin:infermedica/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  globals: {
    process: false
  },
  rules: {
    'quotes': ['error', 'single'],
    'no-unused-vars': ['error', {
      args: 'none'
    }],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'max-len': ['error', {
      code: 119,
      ignoreRegExpLiterals: true
    }],
    'no-param-reassign': ['error', {
      props: false
    }],
    'no-unused-expressions': ['error', {
      allowShortCircuit: true, allowTernary: true
    }],
    'arrow-parens': ['error', 'always'],
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false
    }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],

    // Vue
    'vue/html-self-closing': ['error', {
      html: {
        normal: 'never',
        void: 'always'
      }
    }],
    'vue/script-indent': ['warn', 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'never'
    }],
    'vue/order-in-components': ['warn', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        'inheritAttrs',
        'model',
        'extends',
        'mixins',
        ['props', 'propsData'],
        'data',
        'computed',
        'methods',
        'watch',
        'LIFECYCLE_HOOKS',
        ['components', 'directives', 'filters'],
        ['delimiters', 'comments'],
        ['template', 'render'],
        'renderError'
      ]
    }],

    // off
    'no-new': 'off',
    'no-shadow': 'off',
    'func-names': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'arrow-body-style': 'off',
    'max-classes-per-file': 'off',
    'no-prototype-builtins': 'off',
    'prefer-deconstructing': 'off',
    'promise/catch-or-return': 'off',
    'vue/attributes-order': 'off',  // We use the one defined in infermedica plugin
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    },
    {
      files: ['*.js'],
      rules: {
        'vue/script-indent': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': 'webpack'
  }
};
