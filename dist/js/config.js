requirejs.config({
	paths: {
		underscore: '../bower_components/underscore/underscore',
		'jquery.easings': '../bower_components/fullpage.js/vendors/jquery.easings.min',
		'jquery.slimscroll': '../bower_components/jquery.slimscroll/jquery.slimscroll',
		jquery: '../bower_components/jquery/dist/jquery',
		'jquery.fullpage': '../bower_components/fullpage.js/jquery.fullPage',
		requirejs: '../bower_components/requirejs/require'
	},
	shim: {
		'jquery.fullpage': [
			'jquery',
			'jquery.easings',
			'jquery.slimscroll'
		],
		'jquery.easings': [
			'jquery'
		],
		'jquery.slimscroll': [
			'jquery'
		]
	},
	packages: [

	]
});