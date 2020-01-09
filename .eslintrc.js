// https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
module.exports = {
  extends: [
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  plugins: [
    "react-hooks",
    "prettier"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "prettier/prettier": ["error", {
      "printWidth": 70
    }, {
      "usePrettierrc": false,
    }],
    // https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
    "import/prefer-default-export": "off",
    // https://spectrum.chat/next-js/general/react-must-be-in-scope-when-using-jsx~6193ef62-4d5e-4681-8f51-8c7bf6b9d56d
    "react/react-in-jsx-scope": "off"
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
};