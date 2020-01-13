// https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
module.exports = {
  extends: [
    "airbnb-typescript",
    "plugin:functional/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    
  ],
  plugins: [
    "react-hooks",
    "prettier",
    "functional"
  ],
  rules: {
    "functional/no-mixed-type": "off",
    "functional/no-return-void": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    // "@typescript-eslint/explicit-function-return-type": [
    //   "error",
    //   { allowTypedFunctionExpressions: true }
    // ],
    "jsx-a11y/label-has-associated-control": ["error", {
      "required": {
        "every": [ "id" ]
      }
    }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "next.config.js",
          ".storybook/**",
          "src/**/*.stories.tsx"
        ]
      }
    ],
    // https://github.com/eslint/eslint/issues/2321#issuecomment-134665757
    "@typescript-eslint/no-unused-vars": ["error", {
      "args": "all", "argsIgnorePattern": "^_"
    }],

    

  //   // https://github.com/jonaskello/eslint-plugin-functional/issues/76
  //   "functional/functional-parameters": ["error", {
  //     "enforceParameterCount": false
  //   }],

  //   "react-hooks/rules-of-hooks": "error",
  //   "react-hooks/exhaustive-deps": "error",
    "prettier/prettier": "error", 
  //   // "prettier/prettier": ["error", 
  //   // {}, { 
  //   //     "usePrettierrc": false
  //   // }],
    
    // https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
    "import/prefer-default-export": "off",

  //   // https://spectrum.chat/next-js/general/react-must-be-in-scope-when-using-jsx~6193ef62-4d5e-4681-8f51-8c7bf6b9d56d
  //   "react/react-in-jsx-scope": "off",

  //   // https://github.com/prettier/prettier/issues/2778
  //   // "react/jsx-first-prop-new-line": ["error", "multiline"],
  //   // "react/jsx-max-props-per-line": ["error", { "maximum": 1 }],

  //   // "no-array-mutation": [2, "ignore-new-array"],
  
  },
  // overrides: [
  //   {
  //     // disable the rule specifically for React
  //     "files": ["*.tsx"],
  //     "rules": {
  //       "functional/no-return-void": ["off"]
  //     }
  //   }
  // ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
};