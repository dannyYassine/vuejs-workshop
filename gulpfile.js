
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// Serve TASK
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: ''
        }
    });
    gulp.watch(['*.html', 'css/*.css', 'dist/*.js'], {cwd: ''}, reload);
});
////