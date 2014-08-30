req = requirejs.config({
	baseUrl : 'js/'
	//>>excludeStart("configExclude", pragmas.configExclude);
	, deps : ['config']
	//>>excludeEnd("configExclude");
});

req(['app'], function (App) { App.start(); });