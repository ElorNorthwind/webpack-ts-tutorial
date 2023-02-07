module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },

  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    // 'import/prefer-default-export': 'off',
    // 'no-unused-vars': 'warn',
    // 'react/require-default-props': 'off',
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/naming-convention": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    // 'no-shadow': 'off',
    // 'import/extensions': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'no-underscore-dangle': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
