'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/default.jsx');
var guideActions = require('../../actions/guide');
//var Guide = require('./guide.jsx');
//var knowRepoStore = require('../../stores/knowrepo');

var CommentList = React.createClass({
	componentDidMount: function() {
		//knowRepoStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		//knowRepoStore.removeChangeListener(this._onChange);
	},

	_onChange: function(){
		this.setState({
			//guides: knowRepoStore.getUserGuides()
		})
	},

	getInitialState: function () {

		return {
			//guides : knowRepoActions.getHome()
		};
	},

	handleSubmit: function(e) {
		e.preventDefault();
		var form = e.currentTarget;

		guideActions.comment(form, guideActions.setComments);

		//var author = React.findDOMNode(this.refs.author).value.trim();
		//var text = React.findDOMNode(this.refs.text).value.trim();
		//if (!text || !author) {
		//	return;
		//}
		//this.props.onCommentSubmit({author: author, text: text});
		//React.findDOMNode(this.refs.author).value = '';
		//React.findDOMNode(this.refs.text).value = '';
	},

	render: function() {
		var email = window.localStorage.email;
		console.log('guideid', this.props.guideId);
		return (
			/* jshint ignore:start */
			<form className="commentForm" action='/comment' onSubmit={this.handleSubmit}>

				<input type="hidden" value={this.props.guideId} name="guideId" />
				<input type="text" placeholder="Comment..." name="message" />
				<input type="submit" value="Post" />
			</form>
			/* jshint ignore:end */
		);
	}
});
module.exports = CommentList;