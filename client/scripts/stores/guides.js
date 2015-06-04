'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var guideConstants = require('../constants/guides');
var inputConstants = require('../constants/input');
var guideDefaults = require('../constants/defaults').guides;

var _guides;
var _guideId;

var GuideStore = new Store({

	// Gets data associated with the current messages.
	get: function() {
		return _guides || guideDefaults;
	},
	getLinkVotes: function(linkIndex, sectionIndex){
		return _guides[sectionIndex][links][linkIndex].votes;
	},
	getGuideVotes: function(){
		return _guides[index][votes];
	},
	getId: function() {
		return _guideId;
	},
	getCommentsBySection: function() {
		return _guides.comments;
	}

});

GuideStore.dispatcherToken = Dispatcher.register(function(payload) {

	var action = payload.action;

	if (action.actionType === guideConstants.SET_GUIDES) {
		//console.log('in guide store set guides');
		_guides = action.guides;
		//console.log(_guides);
		GuideStore.emitChange();
	}
	else if (action.actionType === inputConstants.UPVOTE_GUIDE){
		var index = action.index
		_guides[index].votes++;
		GuideStore.emitChange();
	}
	else if (action.actionType === inputConstants.DOWNVOTE_GUIDE){
		var index = action.index
		_guides[index].votes--;
		GuideStore.emitChange();
	}
	else if (action.actionType === inputConstants.UPVOTE_LINK){
		_guides[sectionIndex][links][linkIndex].votes++;
		GuideStore.emitChange();
	}
	else if (action.actionType === inputConstants.DOWNVOTE_LINK){
		var linkIndex = action.linkIndex;
		var sectionIndex = action.sectionIndex;

		_guides[sectionIndex][links][linkIndex].votes--;
		GuideStore.emitChange();
	}
	else if (action.actionType === guideConstants.PASS_ID) {
		_guideId = payload.action.id;
		GuideStore.emitChange();
	}

	else if (action.actionType === guideConstants.SET_COMMENTS) {
		_guides.comments.push(action.comments);
		GuideStore.emitChange();
	}
	else if (action.actionType === guideConstants.ADD_COMMENT) {
		_guides.comments = action.comments;
		GuideStore.emitChange();
	}


});

module.exports = GuideStore;
