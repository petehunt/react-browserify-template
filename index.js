/** @jsx React.DOM */
var pkg = require('./package.json');
var React = require('react');
var requireStylesheet = require('stylesheets').requireStylesheet;

requireStylesheet(process.env.STATIC_ROOT + '/style-template.css');

var Component = React.createClass({
  render: function() {
    return (
      <h1 className="header">{pkg.name}, brought to you by React!</h1>
    );
  }
});

React.renderComponent(<Component />, document.body);
