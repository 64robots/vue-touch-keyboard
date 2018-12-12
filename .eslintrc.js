module.exports = {
    root: true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": false,
        mocha: true
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
        "html"
    ],
    "rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "quotes": [
            "warn",
            "double"
        ],

        "no-var": [
            "error"
        ],
        "no-console": [
            "off"
        ],
        "no-unused-vars": [
            "warn"
        ]
    }
};