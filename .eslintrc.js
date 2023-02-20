module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
    "plugin:storybook/recommended",
  ],
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
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
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "react/display-name": "off",
    // 'no-shadow': 'off',
    // 'import/extensions': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'no-underscore-dangle': 'off',
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },

  globals: {
    __IS_DEV__: true,
  },
};
