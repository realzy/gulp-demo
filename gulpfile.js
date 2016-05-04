var gulp = require('gulp'),
	less = require('gulp-less'),
	watch = require('gulp-watch'),
	uglify = require('gulp-uglify');//压缩js文件

	// less->css
// gulp.task('less', function() {
   
//     gulp.src('./less/*.less')
//         .pipe(less())
//         .pipe(gulp.dest('./css'));

// })

// 监听less文件的变化
// gulp.task('watch', function() {
//     watch('./less/*.less', function() {
//         gulp.start('less')
//     })
// })
//复制html文件
// gulp.task('copy-html',function(){
// 	gulp.src('./views/*.html')
// 	.pipe(gulp.dest('./build'))
// 	return 
// })

//试试gulp.task执行多个任务是如何执行的
// gulp.task('test1',function(){
// 	console.log('第一个任务')
// })
// gulp.task('test2',function(){
// 	console.log('第二个任务')
// })
// gulp.task('test3',function(){
// 	console.log('第三个任务')
// })
// gulp.task('default',['test1','test2','test3'])//'default'这个是gulp执行的名称。【test1.2.3分别是要执行的那三个任务】

//执行压缩js任务
// gulp.task('uglify',function(){
// 	gulp.src('./js/*.js')
// 	.pipe(uglify({
//             mangle: true,//类型：Boolean 默认：true 是否修改变量名
//             compress: true,//类型：Boolean 默认：true 是否完全压缩
//             preserveComments: 'all' //保留所有注释
//         }))
// 	.pipe(gulp.dest('./build/js'))
// })

gulp.task('jsmin', function () {
    gulp.src('./js/*')
    	.pipe(uglify())
    	.pipe(gulp.dest('./build/js'));
});

 gulp.task('default',['jsmin']);
