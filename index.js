var open = require('open');
var opener = require('opener');
var Config = require('./config/config.json');
var path = require('path');
var sleep = require('sleep');
var _ = require('lodash');

function _run(sources) {
	_.forEach(sources, function(source) {
		opener(source);
		sleep.sleep(1);
	});
}

/**
 * Browser Tabs
 */
_run(Config.browser);

/**
 * Applications
 */
_run(Config.app);