import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { modules, ignores, typescript, extend, common, node, stylistic } from "@hazmi35/eslint-config";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
    recommendedConfig: js.configs.recommended
});

export default [
    ...compat.config({
        extends: [
            "plugin:tailwindcss/recommended"
        ]
    }),
    ...extend(typescript, [
        {
            rule: "typescript/naming-convention",
            option: ["off"]
        }
    ]),
    ...common,
    ...modules,
    ...node,
    ...stylistic,
    ...ignores
];
