import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,Switch} from 'react-router';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Appe extends React.Component{
    componentDidMount() {
            console.log('k')
      fetch('../src/components/ind.php')
        .then((res) => {
          res.json().then((data) => {
            this.setState({
              data: [data]
            }),
            console.log('k')
          })
        })
        .catch((err) => {
          console.log('l')
        })
    }
    // contextTypes: {
    //     router: PropTypes.object.isRequired
    // }
   //
   // onAuthenticateAction(event) {
   //     if (this.props.auth.phase === 'anonymous')
   //         console.log('if1');
   //     else if (this.props.auth.phase === 'authenticated')
   //     console.log('if2');
   //     else
   //         console.warn(`Swallowing event - phase '${this.props.auth.phase}' is not valid`); // eslint-disable-line no-console
   //     event.preventDefault();
   //     return true;
   // }
    render() {

        // let dispatch = this.props.dispatch;
        // let onAuthenticateAction = (event) => { return this.onAuthenticateAction(event); };
        return (
            <div className='App'>

            <ul>
            <li>ddd</li>
            <li>ddd</li>
            </ul>
                {this.props.children}
            </div>
        );
    }
}
// App.propTypes={
//        auth: PropTypes.shape({
//            error: PropTypes.string,
//            phase: PropTypes.string.isRequired,
//            user: PropTypes.object
//        }),
//        children: PropTypes.node,
//        dispatch: PropTypes.func.isRequired
// }
export const App = connect(
    (state) => {
        return {
            auth: state.auth
        };
    })(Appe);
// const A = connect(mapStateToProps)(App);
// function mapStateToProps(state, ownProps) {
//   return {
//     id: ownProps.params.id,
//     filter: ownProps.location.query.filter
//   };
// }
//
// export default connect(mapStateToProps)(App);
