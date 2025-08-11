import { src, dest, watch } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

export function css(done) {
  src("src/scss/app.scss", { sourcemaps: true }) // Step 1: Read the SCSS file
    .pipe(sass().on("error", sass.logError)) // Step 2: Compile SCSS to CSS
    .pipe(dest("dist/css", { sourcemaps: true })); // Step 3: Write the CSS file to 'dist/css'

  done();
}

export function dev() {
  watch("src/scss/**/*.scss", css);
}
