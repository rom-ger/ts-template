import { buildExternalStyles, buildStyles } from '../utils/styleBuild';
import browserSync from 'browser-sync';

function sassServe() {
    return buildStyles(true);
}

function sass() {
    return buildStyles();
}

function stylesReload() {
    return buildStyles()
        .pipe(browserSync.stream());
}

export { sassServe, sass, stylesReload };
