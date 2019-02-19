var React = require('react');


var Note = React.createClass({
    render: function() {
        return (
            <div >
                {this.props.children}
            </div>
        );
    }
});

module.exports = Note;
