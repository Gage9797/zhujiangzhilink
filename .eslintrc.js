module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // 'standard',
     'plugin:vue/essential', '@vue/prettier'],
  // extends: [
  //   // 'standard',
  //   // 'plugin:vue/recommended', 'plugin:prettier/recommended'
  // ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'prettier/prettier': [
      1,
      {
        singleQuote: true, //强制单引号
        trailingComma: 'es5', //自动增加逗号
        printWidth: 150,
      },
    ],

    'vue/html-indent': 0, //缩进
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,
    // 属性排序
    'vue/attributes-order': 1,
    'vue/max-attributes-per-line': [
      0,
      {
        singleline: 4,
      },
    ],

    'use-isnan': 1, //要求使用 isNaN() 检查 NaN
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
