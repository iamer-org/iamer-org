requirejs.config({
	paths: {
		underscore: '../bower_components/underscore/underscore',
		jquery: '../bower_components/jquery/dist/jquery',
		'jquery.slimscroll': '../bower_components/jquery.slimscroll/jquery.slimscroll',
		'jquery.easings': '../bower_components/fullpage.js/vendors/jquery.easings.min',
		fullpage: '../bower_components/fullpage.js/jquery.fullPage',
	},
	shim: {
		'fullpage' : ['jquery', 'jquery.easings', 'jquery.slimscroll'],
		'jquery.slimscroll' : ['jquery'],
		'jquery.easings' : ['jquery']
	},
	packages: [

	]
});