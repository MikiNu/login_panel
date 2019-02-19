import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory,Switch} from 'react-router'
// import { Link } from 'react-router';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {loginUpdate,passwordUpdate,reset,tryAutoFill,submit,rootFilter} from '../reducers/actions';
//import './AboutPage.less';

export class Ticker extends React.Component{
    render() {
        return (
					<div className="col-md-6 col-xs-12 masonry-item">
						<div className="widget widget-shadow">
							<div className="panel">
								<div className="panel-body">
									<div className="simplemarquee has-enough-space" style={{wordWrap: 'normal', overflowWrap: 'normal', whiteSpace: 'nowrap', overflow: 'hidden'}}>
										<div>
											Информация бегущей строки не найдена
										</div>
									</div>
								</div>
							</div>
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
