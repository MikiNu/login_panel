import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,Switch} from 'react-router'
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginUpdate,passwordUpdate,reset,tryAutoFill,submit,rootFilter} from '../reducers/actions';
//import './AboutPage.less';

class Home extends React.Component{

    render() {
        return (
            <div className='AboutPage'>
                <h2 className='title'>
                    This is Home page
                </h2>

            </div>
        );
    }
}
export const HomeController = connect(
    state => ({
        state:state
    }),
    dispatch => bindActionCreators({
        rootFilter
    }, dispatch)
)(Home);
