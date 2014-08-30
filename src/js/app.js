define([
	'underscore'
	, 'jquery'
	, 'fullpage'
], function(
	_
	, $
) {
	var exports = {};

	console.log('Main app file loaded!', arguments);

	exports.start = function () {
		console.log('Start app!');

		$(onDomReady);
		
	}

	function onDomReady () {
		console.log('Dom ready!');

		$('#Fullpage').fullpage();
	}

	return exports;
});