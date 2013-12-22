/** @jsx React.DOM */
var React = require('react');
var pkg = require('./package.json');

React.renderComponent(<h1>{pkg.name}, brought to by React!</h1>, document.body);
