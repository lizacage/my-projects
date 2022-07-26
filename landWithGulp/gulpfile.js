// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const scss = require('gulp-sass')(require('sass'));
// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');
// Подключаем модуль gulp-clean-css
const cleancss = require('gulp-clean-css');
const imagecomp = require('compress-images');
const del = require('del');
function browsersync() {
	browserSync.init({ 
		server: { baseDir: 'app/' }, 
		notify: false, 
		online: true 
	})
}
exports.browsersync = browsersync;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;
exports.build = series(cleandist, styles, images, buildcopy);
exports.default = parallel(styles, browsersync, startwatch);
function styles() {
	return src('app/scss/main.scss') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
	.pipe(scss()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('app.min.css')) // Конкатенируем в файл app.min.css
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	.pipe(cleancss( { level: { 1: { specialComments: 0 } }, format: 'beautify'} )) // Минифицируем стили
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}
async function images() {
	imagecomp(
		"app/images/src/**/*", // Берём все изображения из папки источника
		"app/images/dest/", // Выгружаем оптимизированные изображения в папку назначения
		{ compress_force: false, statistic: true, autoupdate: true }, false, // Настраиваем основные параметры
		{ jpg: { engine: "mozjpeg", command: ["-quality", "75"] } }, // Сжимаем и оптимизируем изображеня
		{ png: { engine: "pngquant", command: ["--quality=75-100", "-o"] } },
		{ svg: { engine: "svgo", command: "--multipass" } },
		{ gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
		function (err, completed) { // Обновляем страницу по завершению
			if (completed === true) {
				browserSync.reload()
			}
		}
	)
}
function cleanimg() {
	return del('app/images/dest/**/*', { force: true }) // Удаляем все содержимое папки "app/images/dest/"
}
function startwatch() {
	// Мониторим файлы препроцессора на изменения
	watch('app/**/scss/**/*', styles);
	watch('app/**/*.html').on('change', browserSync.reload);
	watch('app/images/src/**/*', images);
}
function buildcopy() {
	return src([ // Выбираем нужные файлы
		'app/css/**/*.min.css',
		'app/images/dest/**/*',
		'app/**/*.html',
		], { base: 'app' }) // Параметр "base" сохраняет структуру проекта при копировании
	.pipe(dest('dist')) // Выгружаем в папку с финальной сборкой
}
function cleandist() {
	return del('dist/**/*', { force: true }) // Удаляем все содержимое папки "dist/"
}