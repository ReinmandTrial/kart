const { src, dest, watch, parallel, series } = require('gulp');

const sass = require('sass');
const gulpSass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');

const scss = gulpSass(sass);

function browsersync() {
   browserSync.init({
      server: {
         baseDir: 'app/',
      },
   });
}

function cleanDist() {
   return del('dist');
}

function images() {
   return src('app/images/**/*')
      .pipe(
         imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
               plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
            }),
         ])
      )
      .pipe(dest('dist/images'));
}

/*  'app/js/profile.js',
		'app/js/search-page.js', */
function scripts() {
   return src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/swiper/swiper-bundle.min.js',
      'node_modules/aos/dist/aos.js',
      'app/js/jquery.mCustomScrollbar.concat.min.js',
      'node_modules/lightbox2/dist/js/lightbox.min.js',
      'app/js/main.js',
      'app/js/academy.js',
      'app/js/discount-page.js',
      'app/js/favorites-new.js',
      'app/js/review.js',
   ])
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(dest('app/js'))
      .pipe(browserSync.stream());
}

function styles() {
   return src('app/scss/style.scss')
      .pipe(scss({ outputStyle: 'compressed' }))
      .pipe(concat('style.min.css'))
      .pipe(
         autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true,
         })
      )
      .pipe(dest('app/css'))
      .pipe(browserSync.stream());
}
function stylesAcademy() {
   return src('app/scss/academy.scss')
      .pipe(scss({ outputStyle: 'compressed' }))
      .pipe(concat('academy.min.css'))
      .pipe(
         autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true,
         })
      )
      .pipe(dest('app/css'))
      .pipe(browserSync.stream());
}

function stylesSearch() {
   return src('app/scss/search.scss')
      .pipe(scss({ outputStyle: 'compressed' }))
      .pipe(concat('search.min.css'))
      .pipe(
         autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true,
         })
      )
      .pipe(dest('app/css'))
      .pipe(browserSync.stream());
}

function stylesReview() {
   return src(['app/scss/review.scss', 'node_modules/lightbox2/dist/css/lightbox.min.css'])
      .pipe(scss({ outputStyle: 'compressed' }))
      .pipe(concat('review.min.css'))
      .pipe(
         autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true,
         })
      )
      .pipe(dest('app/css'))
      .pipe(browserSync.stream());
}

function build() {
   return src(['app/css/style.min.css', 'app/fonts/**/*', 'app/js/main.min.js', 'app/*.html'], {
      base: 'app',
   }).pipe(dest('dist'));
}

function watching() {
   watch(['app/scss/style.scss'], styles);
   watch(['app/scss/discount-page.scss'], styles);
   watch(['app/scss/profile.scss'], styles);
   watch(['app/scss/favorites-new.scss'], styles);
   watch(['app/scss/academy.scss'], stylesAcademy);
   watch(['app/scss/search.scss'], stylesSearch);
   watch(['app/scss/review.scss'], stylesReview);
   watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
   watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.stylesSearch = stylesSearch;
exports.stylesAcademy = stylesAcademy;
exports.stylesReview = stylesReview;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(
   stylesSearch,
   stylesAcademy,
   stylesReview,
   styles,
   scripts,
   browsersync,
   watching
);
