import commonjs from "@rollup/plugin-commonjs";
import image from '@rollup/plugin-image';
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");
const dependencies = ({ dependencies }) => Object.keys(dependencies || {});
const pkgdependencies = dependencies(pkg);

export default [
    {
        input: "src/index.ts",
        external: id => pkgdependencies.includes(id),
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            image(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss(),

            terser(),
        ],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.scss$/],
    },
];