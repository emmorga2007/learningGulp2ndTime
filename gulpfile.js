//imports also go at the top of the js file
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
//import sass from 'gulp-sass';

var sass = require('gulp-sass')(require('sass'));

function compileSass(done){
    return gulp.src('sass/**/*.scss')  // grab everything in the sass folder
    .pipe(sass().on('error', sass.logError)) //run all our sass files thru the compiler
    .pipe(gulp.dest('css'));// save the compiled CSS file in its directory
};

function squashImages(done) {
    gulp.src('images/*') // grab everything in the images folder
        .pipe(imagemin()) // run every image thruogh the imagemin engine
        .pipe(gulp.dest('dist')) // once compressed put them in the dist folder

    done(); //end function - this threw an error when i ran "gulp crunch", function didnt work
};


export {squashImages as crunch,
    compileSass as compile,
}