module.exports = [{
    "root": true,
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint"],
    "rules": {
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                "selector": "import",
                "format": ["camelCase", "PascalCase"]
            }
        ],
        "curly": "warn",
        "eqeqeq": "warn",
        "no-throw-literal": "warn",
        "semi": "warn"
    },
    "ignorePatterns": ["out", "dist", "**/*.d.ts"]
}]
