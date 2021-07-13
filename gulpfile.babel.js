import gulp from 'gulp';
import config from './gulp/config';
import { indexHtml } from './gulp/tasks';
import { assetsFiles } from './gulp/tasks/assetsFiles';
import { buildServe } from './gulp/tasks/build';
import { clean } from './gulp/tasks/clean';
import { js } from './gulp/tasks/js';
import { sass } from './gulp/tasks/style';
import { watch } from './gulp/tasks/watch';
import { browserSyncInit } from './gulp/utils/browserSync';

gulp.task('serve',
    gulp.series(
        buildServe(),
        gulp.parallel(watch, callback => {
            browserSyncInit(`${config.APPLICATION_DIST_PATH}/`, false, callback);
        }),
    ));

gulp.task('build',
    gulp.series(
        clean,
        gulp.parallel(indexHtml, assetsFiles, sass),
        js(),
    ),
);

gulp.task('default', gulp.series('serve'));
