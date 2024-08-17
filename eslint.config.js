import globals from 'globals'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier/recommended'

const rules = {
  'prettier/prettier': 'warn',
  'no-empty': 0,
  'no-console': 0,
  '@typescript-eslint/ban-ts-comment': 0,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-unused-vars': 0,
  '@typescript-eslint/no-non-null-assertion': 0,
  '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
  'vue/html-self-closing': 0,
  'vue/no-v-html': 0,
  'vue/valid-v-slot': 0,
  'vue/valid-template-root': 0,
  'vue/component-definition-name-casing': 0,
  'vue/multi-word-component-names': 0,
  'vue/attributes-order': 0,
  'vue/script-indent': 0,
  'vue/require-default-prop': 0
}

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    }
  },
  prettier,
  { rules },
  {
    ignores: ['node_modules', 'dist', 'public']
  }
]
