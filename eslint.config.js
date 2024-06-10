module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["import", "react", "react-hooks", "@typescript-eslint", "jsx-a11y", "prettier"],
  extends: [
    "airbnb-base",
    "airbnb-typescript",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "error"
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts"]
      }
    }
  }
};
