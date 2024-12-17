import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import packageJson from './package.json' assert { type: "json" }

export default [
    {
        input: "src/index.ts",
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
            }
        ],
        plugins: [
            resolve({
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                skip: ["react", "react-dom"],
            }),
            commonjs(),
            url({
                include: ['**/*.svg'],
                limit: 0,
                emitFiles: true,
            }),
            typescript({ 
                tsconfig: './tsconfig.json',
                exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
                // declaration: true,
                // declarationDir: 'dist',
            }),
            postcss({ extensions: [".css"], inject: true, extract: false }),
        ],
        external: ["react", "react-dom", "react/jsx-runtime"]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
]