// See https://eslint.org/docs/rules/#possible-errors
const possibleErrors = {
    "no-constant-condition": "off",
    "no-template-curly-in-string": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": "error",
};

// See https://eslint.org/docs/rules/#best-practices
const bestPractices = {
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "default-case": "error",
    "default-case-last": "error",
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-constructor-return": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": ["error", {
        disallowRedundantWrapping: true,
    }],
    "radix": ["error", "as-needed"],
    "require-await": "error",
    "wrap-iife": "error",
    "yoda": "error",
};

// See https://eslint.org/docs/rules/#variables
const variables = {
    "no-restricted-globals": [
        "error",
        {
            name: "error",
            message: "Do not reference global 'error'.",
        },
        {
            name: "event",
            message: "Do not reference global 'event'.",
        },
        {
            name: "fdescribe",
            message: "Do not commit fdescribe. Use describe instead.",
        },
    ],
    "no-unused-vars": [
        "error",
        {
            argsIgnorePattern: "^_",
            args: "all",
        },
    ],
};

const starSpacingOption = {
    before: false,
    after: true,
};

// See https://eslint.org/docs/rules/#stylistic-issues
const codeStyle = {
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent", {
        multiline: true,
    }],
    "block-spacing": "error",
    "brace-style": ["error", "1tbs"],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", {
        before: false,
        after: true,
    }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-names": ["error", "always"],
    "func-style": ["error", "declaration", {
        allowArrowFunctions: true,
    }],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "id-denylist": ["error", "data", "err", "e", "cb", "callback"],
    "implicit-arrow-linebreak": ["error", "beside"],
    "indent": ["error", 4, {
        SwitchCase: 1,
        VariableDeclarator: "first",
        offsetTernaryExpressions: true,
    }],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": "error",
    "max-len": ["error", {
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
    }],
    "max-params": ["error", 3],
    "multiline-ternary": ["error", "always-multiline"],
    "newline-per-chained-call": "error",
    "no-bitwise": "error",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": ["error", "beside"],
    "object-curly-newline": ["error", {
        consistent: true,
    }],
    "object-curly-spacing": ["error", "always", {
        arraysInObjects: false,
        objectsInObjects: false,
    }],
    "object-property-newline": ["error", {
        allowAllPropertiesOnSameLine: true,
    }],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "before"],
    "prefer-exponentiation-operator": "error",
    "quote-props": ["error", "consistent-as-needed"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "semi-style": ["error", "last"],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
    }],
    "space-in-parens": ["error", "never"],
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],
    "switch-colon-spacing": ["error", {
        after: true,
        before: false,
    }],
    "template-tag-spacing": ["error", "never"],
    "wrap-regex": "error",
};

const es6 = {
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", {
        before: true,
        after: true,
    }],
    "generator-star-spacing": ["error", starSpacingOption],
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-const": ["error", {
        destructuring: "all",
        ignoreReadBeforeAssign: false,
    }],
    "prefer-destructuring": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    "sort-imports": ["error", {
        ignoreCase: true,
    }],
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": ["error", starSpacingOption],
};

const pluginImport = {
    "import/no-duplicates": "off",
};

module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false,
        sourceType: "module",
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    plugins: [
        "svelte3",
        "@babel",
    ],
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    ignorePatterns: ["*.css"],
    settings: {
        "svelte3/typescript": () => require("typescript"),
    },
    overrides: [
        {
            files: ["*.svelte"],
            processor: "svelte3/svelte3",
        },
        {
            files: ["*.ts"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:import/typescript",
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                sourceType: "module",
                ecmaVersion: 2019,
            },
            env: {
                browser: true,
                es2017: true,
                node: true,
            },
            plugins: [
                "@typescript-eslint",
                "typescript-sort-keys",
            ],
            rules: {
                "typescript-sort-keys/interface": "error",
                "typescript-sort-keys/string-enum": "error",
            },
        },
    ],
    rules: {
        ...possibleErrors,
        ...bestPractices,
        ...variables,
        ...codeStyle,
        ...es6,
        ...pluginImport,
    },
};
