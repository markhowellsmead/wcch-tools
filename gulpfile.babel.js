import gulp from 'gulp';

const config = {
	name: 'WordPress Theme by Say Hello',
	key: 'sht',
	themeDir: './',
	assetsDir: './assets/',
	gulpDir: './.build/gulp/',
	assetsBuild: './.build/assets/',
	blockScriptsSrc: './src/Blocks/**/src/**/scripts',
	blockStylesSrc: './src/Blocks/**/src/**/styles',
	blockScriptsDist: './src/Blocks/',
	blockStylesDist: './src/Blocks/',
	errorLog: function (error) {
		console.log('\x1b[31m%s\x1b[0m', error);
		if (this.emit) {
			this.emit('end');
		}
	},
};

import { task as taskStyles } from './.build/gulp/task-styles';
import { task as taskScripts } from './.build/gulp/task-scripts';
import { task as taskBlockScripts } from './.build/gulp/task-block-scripts';
import { task as taskBlockStyles } from './.build/gulp/task-block-styles';

export const styles = () => taskStyles(config);
export const scripts = () => taskScripts(config);
export const block_scripts = () => taskBlockScripts(config);
export const block_styles = () => taskBlockStyles(config);

export const watch = () => {
	const settings = { usePolling: true, interval: 100 };

	gulp.watch(
		`${config.blockScriptsSrc}/**/*.{scss,js}`,
		settings,
		gulp.series(block_scripts)
	);

	gulp.watch(
		`${config.blockStylesSrc}/*.{scss,css,js}`,
		settings,
		gulp.series(block_styles)
	);

	gulp.watch(
		config.assetsBuild + 'styles/**/*.scss',
		settings,
		gulp.series(styles)
	);

	gulp.watch(
		config.assetsBuild + 'scripts/**/*.{scss,css,js}',
		settings,
		gulp.series(scripts)
	);

	gulp.watch(
		config.themeDir + 'theme.json',
		settings,
		gulp.series(scripts, styles)
	);
};

export const taskDefault = gulp.series(watch);
export default taskDefault;
