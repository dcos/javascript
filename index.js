module.exports = {
  "plugins": [
    "compat", // Browser compatibility
    "destructuring",
    "jsx-max-len",
    "prettier",
    "react"
  ],
  extends: [
    "airbnb"
  ],
  rules: {
    "prettier/prettier": "error",


    "destructuring/in-methods-params": "error",
    "compat/compat": "error",

    // Ternary
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "multiline-ternary": "off", // allow both multiline and single line

    // Airbnb overrides
    "curly": ["error", "all"],
    "react/jsx-filename-extension": "off", // Allow JSX in .js files
    "no-mixed-operators": ["error", {
      "groups": [
        ["+", "-", "*", "/", "%", "**"],
        ["&", "|", "^", "~", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      "allowSamePrecedence": true // We do allow the same precedence
    }],

  }
};
