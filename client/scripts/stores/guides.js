'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var guideConstants = require('../constants/guides');
var guideDefaults = require('../constants/defaults').guides;

var _guides;

var GuideStore = new Store({

	// Gets data associated with the current messages.
	get: function() {
		return _guides || guideDefaults;
	}

});

GuideStore.dispatcherToken = Dispatcher.register(function(payload) {

	var action = payload.action;

	if (action.actionType === guideConstants.SET_GUIDES) {
		console.log('in guide store set guides');
		_guides = action.guides;
		console.log(_guides);
		GuideStore.emitChange();
	}
	//if (action.actionType === guideConstants.SAVE_GUIDE) {
	//	_guides = action.guides;
	//
	//	GuideStore.emitChange();
	//}

});

module.exports = GuideStore;
