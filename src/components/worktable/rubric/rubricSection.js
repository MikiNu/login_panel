import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route,Switch,withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginUpdate,passwordUpdate,reset,tryAutoFill,submit,rootFilter} from '/var/www/reactor/src/reducers/actions';
import  {RubricSearch} from './rubricSearch';
import  {RubricGrid} from './rubricGrid';
import  {RubricGridMore} from './rubricGridMore';
import  {RubricAdd} from './rubricAdd';
import  {HomeController} from '/var/www/reactor/src/components/Home'
import  {SPageController} from '/var/www/reactor/src/components/SPage'

class RubricS extends React.Component{
    render() {
        return (
            <div className="col-md-6 col-xs-12 masonry-item">
          		<div className="panel panel-bordered">
                    <div className="panel-heading">
                        <RubricSearch />
          				<h3 className="panel-title">
                            <Link to='/home'>Доступные разделы</Link>
                        </h3>
                    </div>
                    <div className="panel-body">
          				<div className="center">
                        <Switch>
                            <Route path='/helpers' component={RubricGridMore} />
                            <Route exact path='/' component={RubricGrid} />
                        </Switch>
                            <RubricAdd />
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}
export const RubricSection = withRouter(connect(
		state => ({
				state:state
		}),
		dispatch => bindActionCreators({
				rootFilter
		}, dispatch)
)(RubricS));
