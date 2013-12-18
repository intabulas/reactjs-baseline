/** @jsx React.DOM */
$(function() {
    var Application = require('./jsx/application.jsx');

    React.renderComponent(
        <Application />,
        document.getElementById('application')
    );

});