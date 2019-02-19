var React = require('react');
var Panel_r = require('./Panel_r.jsx');
var Footer_r = require('./Footer_r.jsx');
require('./css/bootstrap.min.css');
require('./css/bootstrap-extend.min.css');
require('./css/site.min.css');
require('./css/bootstrap-datepicker.min.css');

require('./css/skintools.min.css');
require('./css/default.css');
require('./css/login-v3.css');


var PageR = React.createClass({
getInitialState: function() {
  return {
    data: []
  };
},
componentWillMount: function() {
  fetch('../src/components/ind.php')
    .then((res) => {
      res.json().then((data) => {
        this.setState({
          data: [data]
        }),
        console.log(this.state.data)
      })
    })
    .catch((err) => {
      console.log(err)
    })
},

    render: function() {

        return (
        <div className="page-login-v3 layout-full site-menubar-hide site-menubar-unfold">
            <div className="page vertical-align text-center">
                <div className="page-content vertical-align-middle">
                  <Panel_r data={this.state.data}/>
                  <Footer_r />
                </div>
            </div>
        </div>
        );
    }
});

module.exports = PageR;
