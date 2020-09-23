// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  // plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'no-unused-vars': 0,
    'key-spacing': ['error', { beforeColon: false }],
    // 括号内的空格限制
    'array-bracket-spacing': ['error', 'never'],
    // 声明变量时强制换行
    'one-var-declaration-per-line': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 关闭禁止函数圆括号之前有一个空格
    'space-before-function-paren': 0,
    // 关闭禁用不必要的return await
    'no-return-await': 0,
    // 限制最大长度不超过140个字符
    'max-len': [
      'error',
      {
        code: 140,
        ignoreComments: true, // 忽略所有拖尾注释和行内注释
        ignoreUrls: true, // 忽略含有链接的行
        ignoreStrings: true, // 不忽略字符串的行
        ignoreTemplateLiterals: true // 忽略模板字符串的行
      }
    ],
    // Update
    // 强制限制驼峰法
    camelcase: ['error', { properties: 'never' }],
    // 关闭callback必须有参数,关闭回调报错（callback(true／false)）
    'standard/no-callback-literal': 'off',
    // 关闭[]必须同一行
    'standard/computed-property-even-spacing': 'off',
    'operator-linebreak': 'off',
    // 允许-在字符串中出现了Control的字符
    // 'vue/no-parsing-error': 'off',
    // 运算符放到后面
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } }
    ],
    // 逗号放在后面
    'comma-style': ['error', 'last'],
    // 要求条件语句需要大括号
    curly: ['error', 'all'],
    // 句末不出现分号
    semi: ['error', 'never'],
    // 行注释必须另起一行
    'line-comment-position': ['error', { position: 'above' }],
    // 要求在注释之前有一个空格
    'spaced-comment': ['error', 'always'],
    // 强制单引号和反勾号
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    // 建议使用let代替var（由于是建议，用警告）
    'no-var': ['warn']
  }
}
