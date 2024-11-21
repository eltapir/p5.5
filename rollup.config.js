import path from 'path';

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

import pkg from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const sourceFolder = 'src';
const outputFolder = 'dist';
const baseName = path.resolve(__dirname, outputFolder, pkg.name);

export default [{

	input: path.resolve(__dirname, sourceFolder, 'js', `${pkg.name}.js`),

	output: [

		{
			file: `${baseName}.js`,
			format: 'umd'
		},
	],

	plugins: [

		resolve(),
		
		commonjs(),

		json(),

		postcss({
			
			inject: true,
			minimize: isProduction,
			plugins: [ postcssPresetEnv() ],
			writeDefinitions: true,
		}),

		isProduction && terser(),

	],

}];

