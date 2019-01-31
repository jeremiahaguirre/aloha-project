const gulp = require("gulp"),
  terser = require("gulp-terser"),
  uglifycss = require("gulp-uglifycss"),
  rename = require("gulp-rename"),
  concat = require("gulp-concat"),
  streamqueue = require("streamqueue");

gulp.task("scripts", function() {
  return streamqueue(
    { objectMode: true },
    gulp.src("jquery-3.3.1.min.js"),
    gulp.src("flickity.pkgd.min.js"),
    gulp.src("aloha.js")
  )
    .pipe(concat("all.js"))
    .pipe(terser()) // Call the terser function on these files
    .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
    .pipe(gulp.dest("./build/js")); // Where do we put the result?
});

gulp.task("css", function() {
    return streamqueue(
        { objectMode: true },
        gulp.src("reset.css"),
        gulp.src("aloha.css"),
        gulp.src("flickity.min.css")
        )
    .pipe(concat("all.css"))
    .pipe(uglifycss()) // Call the  function on these files
    .pipe(rename({ extname: ".min.css" })) // Rename the uglified file
    .pipe(gulp.dest("./build/css")); // Where do we put the result?
});

gulp.task("watch", function(done) {
  gulp.watch("*.js", gulp.series("scripts"));
  gulp.watch("*.css", gulp.series("css"));

  done();
});
