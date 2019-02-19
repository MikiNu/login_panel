import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory,Switch} from 'react-router'
// import { Link } from 'react-router';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {loginUpdate,passwordUpdate,reset,tryAutoFill,submit,rootFilter} from '../reducers/actions';
//import './AboutPage.less';

export class RubricSearch extends React.Component{
    render() {
        return (
          <div className="panel-actions">
            <div className="input-search input-group-sm margin-top-10">
                <button type="submit" className="input-search-btn">
                    <i className="icon wb-search" aria-hidden="true"></i>
                </button>
                <input type="text" className="form-control search_module" name="" placeholder="Поиск раздела"/>
            </div>
          </div>
				);
		}
}
// export const HomeController = connect(
// 		state => ({
// 				// login : state.login,
// 				// password : state.password
// 				//id: ownProps.params.id,
// 				//filter: ownProps.location.query.filter
// 		}),
// 		dispatch => bindActionCreators({
// 				rootFilter
// 		}, dispatch)
// )(Home);
