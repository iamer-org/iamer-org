req = requirejs.config({
	baseUrl : '/js/'
	, deps : ['config']
});

req(['app'], function (App) { App.start(); });