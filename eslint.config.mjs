import tseslint from 'typescript-eslint';
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  ...tseslint.configs.recommended,
  { files: ['**/*.jsx'], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/no-unused-vars': 1,
    },
  },
];