declare const getDefaultESLintConfig: () => {
    plugins: string[];
    parser: string;
    parserOptions: {
        ecmaFeatures: {
            jsx: boolean;
            module: boolean;
        };
        project: string;
    };
    env: {
        es6: boolean;
        browser: boolean;
        node: boolean;
        'jest/globals': boolean;
    };
    extends: string[];
    rules: {
        'prettier/prettier': string;
        'no-bitwise': string;
        'for-direction': string;
        'getter-return': string;
        'no-async-promise-executor': string;
        'no-await-in-loop': string;
        'no-compare-neg-zero': string;
        'no-cond-assign': string;
        'no-console': string;
        'no-constant-condition': string;
        'no-control-regex': string;
        'no-debugger': string;
        'no-dupe-args': string;
        'no-dupe-keys': string;
        'no-duplicate-case': string;
        'no-empty': string;
        'no-empty-character-class': string;
        'no-ex-assign': string;
        'no-extra-boolean-cast': string;
        'no-func-assign': string;
        'no-inner-declarations': string[];
        'no-invalid-regexp': string;
        'no-irregular-whitespace': string;
        'no-misleading-character-class': string;
        'no-obj-calls': string;
        'no-prototype-builtins': string;
        'no-regex-spaces': string;
        'no-sparse-arrays': string;
        'no-template-curly-in-string': string;
        'no-unexpected-multiline': string;
        'no-unreachable': string;
        'no-unsafe-finally': string;
        'no-unsafe-negation': string;
        'require-atomic-updates': string;
        'use-isnan': string;
        'valid-typeof': string;
        'block-scoped-var': string;
        'class-methods-use-this': string;
        'consistent-return': string;
        'dot-notation': string;
        'no-caller': string;
        'no-case-declarations': string;
        'no-div-regex': string;
        'no-else-return': (string | {
            allowElseIf: boolean;
        })[];
        'no-empty-function': string;
        'no-empty-pattern': string;
        'no-eq-null': string;
        'no-eval': string;
        'no-extend-native': string;
        'no-extra-bind': string;
        'no-extra-label': string;
        'no-fallthrough': string;
        'no-delete-var': string;
        'default-case': string;
        'no-floating-decimal': string;
        'no-param-reassign': string;
        'no-redeclare': string;
        'no-return-assign': string;
        'no-unmodified-loop-condition': string;
        'no-undef': string;
        'accessor-pairs': string;
        'constructor-super': string;
        curly: string;
        'no-global-assign': string;
        'no-implied-eval': string;
        'no-iterator': string;
        'no-labels': string;
        'no-lone-blocks': string;
        'no-loop-func': string;
        'no-multi-str': string;
        'no-new-func': string;
        'no-new-wrappers': string;
        'no-octal': string;
        'no-octal-escape': string;
        'no-proto': string;
        'no-return-await': string;
        'no-script-url': string;
        'no-self-assign': string;
        'no-unused-labels': string;
        'no-useless-catch': string;
        'no-useless-return': string;
        'prefer-promise-reject-errors': string;
        'require-await': string;
        'no-mixed-requires': string;
        'no-useless-rename': string;
        'prefer-rest-params': string;
        'require-yield': string;
        'react/jsx-no-comment-textnodes': string;
        'react/jsx-no-duplicate-props': string;
        'react/jsx-no-target-blank': string;
        'react/jsx-no-undef': string;
        'react/jsx-uses-react': string;
        'react/jsx-uses-vars': string;
        'react/no-children-prop': string;
        'react/no-danger-with-children': string;
        'react/no-deprecated': string;
        'react/no-direct-mutation-state': string;
        'react/no-is-mounted': string;
        'react/no-render-return-value': string;
        'react/no-string-refs': string;
        'react/no-unknown-property': string;
        'react/require-render-return': string;
        'react/react-in-jsx-scope': string;
        'handle-callback-err': string[];
        'new-cap': (string | {
            newIsCap: boolean;
            capIsNew: boolean;
        })[];
        'new-parens': string;
        'no-array-constructor': string;
        'no-class-assign': string;
        'no-const-assign': string;
        'no-dupe-class-members': string;
        'no-label-var': string;
        'no-new-object': string;
        'no-new-require': string;
        'no-new-symbol': string;
        'no-path-concat': string;
        'no-self-compare': string;
        'no-sequences': string;
        'no-shadow-restricted-names': string;
        'no-this-before-super': string;
        'no-throw-literal': string;
        'no-undef-init': string;
        'no-unneeded-ternary': (string | {
            defaultAssignment: boolean;
        })[];
        'no-useless-call': string;
        'no-useless-computed-key': string;
        'no-useless-constructor': string;
        'no-useless-escape': string;
        'no-with': string;
        'one-var': (string | {
            initialized: string;
        })[];
        'spaced-comment': (string | {
            exceptions: string[];
            markers: string[];
        })[];
        'wrap-iife': string[];
        yoda: string[];
        'no-var': string;
        'no-unused-expressions': (string | {
            allowShortCircuit: boolean;
            allowTernary: boolean;
            allowTaggedTemplates: boolean;
        })[];
        'react/jsx-key': string;
        'react/no-unescaped-entities': string;
        'react/no-unsafe': string;
        'react/jsx-filename-extension': string;
        'react/jsx-curly-spacing': (string | {
            when: string;
            children: boolean;
        })[];
        camelcase: string;
        '@typescript-eslint/camelcase': string;
        'no-unused-vars': string;
        '@typescript-eslint/no-unused-vars': string;
        'react/prop-types': string;
        'react/display-name': string;
        'react/no-find-dom-node': string;
        'react/prefer-stateless-function': string;
        '@typescript-eslint/explicit-member-accessibility': string;
        '@typescript-eslint/interface-name-prefix': string;
        'react/jsx-no-bind': string[];
        'react/jsx-boolean-value': string[];
        '@typescript-eslint/explicit-function-return-type': string;
        '@typescript-eslint/no-empty-interface': string;
        'no-use-before-define': (string | {
            functions: boolean;
            classes: boolean;
        })[];
        '@typescript-eslint/no-use-before-define': (string | {
            functions: boolean;
            classes: boolean;
        })[];
        '@typescript-eslint/no-explicit-any': string;
        '@typescript-eslint/explicit-module-boundary-types': string;
        '@typescript-eslint/ban-ts-comment': (string | {
            'ts-expect-error': boolean;
            'ts-ignore': boolean;
            'ts-nocheck': boolean;
            'ts-check': boolean;
        })[];
        eqeqeq: string;
        'guard-for-in': string;
        'max-classes-per-file': (string | number)[];
        'no-alert': string;
        'prefer-object-spread': string;
        'prefer-const': string;
        'react-hooks/rules-of-hooks': string;
        'react-hooks/exhaustive-deps': string;
        'import/no-unresolved': string;
        '@typescript-eslint/no-var-requires': string;
        'import/no-named-as-default-member': string;
        'import/default': string;
    };
    overrides: ({
        files: string[];
        rules: {
            '@typescript-eslint/explicit-member-accessibility': (string | {
                accessibility: string;
                overrides: {
                    constructors: string;
                };
            })[];
            '@typescript-eslint/no-var-requires'?: undefined;
        };
    } | {
        files: string[];
        rules: {
            '@typescript-eslint/no-var-requires': string;
            '@typescript-eslint/explicit-member-accessibility'?: undefined;
        };
    })[];
    settings: {
        react: {
            version: string;
        };
        'import/parsers': {
            '@typescript-eslint/parser': string[];
        };
        'import/resolver': {
            typescript: {
                alwaysTryTypes: boolean;
            };
        };
        'import/ignore': string[];
    };
};
export default getDefaultESLintConfig;
