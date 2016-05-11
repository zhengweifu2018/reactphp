module.exports = {
    "rules": {
        "camelcase": 2,
        "curly": 2,
        "brace-style": [2, "1tbs"],
        "quotes": [2, "single"],
        "semi": [2, "always"],
        "space-infix-ops": 2,
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "jquery": true
    },
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "jsx": true
    },
    "plugins": [
        "react"
    ]
};
