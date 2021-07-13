import gulp from 'gulp';
import { assetsFiles } from './assetsFiles';
import { clean } from './clean';
import { indexHtml } from './index';
import { sassServe } from './style';
import { jsLint } from './js';
import { tsLint } from './ts';

function buildServe() {
    return gulp.series(
        clean,
        gulp.parallel(tsLint, jsLint, indexHtml, assetsFiles, sassServe),
    );
}

export { buildServe };
