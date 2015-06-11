'use strict';

var React = require('react');
var userActions = require('../../actions/user');
var userStore = require('../../stores/user');
var sectionStore = require('../../stores/sections');
var Section = require('./section.jsx');
var guideActions = require('../../actions/guide');


var SectionListComponent = React.createClass({

	render: function () {
		var sectionList = this.props.sections;
		var htmlSections = sectionList.map(function(sec, idx){
			/* jshint ignore:start */
			return (
				<Section key={idx} index={idx} sec={sec}/>
			);
			/* jshint ignore:end */
		});
		return (
			/* jshint ignore:start */
			<div>
				{htmlSections}
				<button className="btn waves-effect waves-light green" onClick={this.handleNewSection}>
					<i className="mdi-content-add right"></i>
					Add new section
				</button>
			</div>


			/* jshint ignore:end */
		);
	},

	handleNewSection: function(e){
		e.preventDefault();
		guideActions.addSection();
	}
});

module.exports = SectionListComponent;
