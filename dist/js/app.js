define([
	'underscore'
	, 'jquery'
	, 'jquery.fullpage'
], function(
	_
	, $
) {
	var exports = {};

	console.log('Main app file loaded', arguments);

	exports.start = function () {
		console.log('Start app');

		$(onDomReady);
		
	}

	function onDomReady () {
		$('#Content').fullpage();
	}

	return exports;
});