define([
	'underscore'
	, 'jquery'
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

		// dom ready stuff
	}

	return exports;
});