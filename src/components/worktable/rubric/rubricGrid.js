import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory,Switch} from 'react-router'
// import { Link } from 'react-router';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {loginUpdate,passwordUpdate,reset,tryAutoFill,submit,rootFilter} from '../reducers/actions';
//import './AboutPage.less';
import charters from './charters.json';
import blockCharters from './blockCharters.json';
import  {Rubric} from './rubric';
var blockCharter;
var viewCharters;
export class RubricGrid extends React.Component{
    render() {
        // const { charters } = this.state;
viewCharters=charters.firstCharters
        return (

            <div className = "list-group list-group-dividered list-group-full icons_area">
                <div className="list-group-item sortable ui-sortable">
                    {
                        viewCharters.map(function(charters){
                            blockCharter=null
                            blockCharters.map(function(blockCharters){
                                if (charters.id===blockCharters.id){
                                    blockCharter=blockCharters.id;
                                }
                            })
                            if (blockCharter !== null){
                                return(
                                    <Rubric
                                        stateMod={charters.stateMod}
                                        key={charters.id}
                                        linK={"/"}
                                        image={charters.imageCharter}
                                        status="hidden">
                                        {charters.nameCharter}
                                    </Rubric>)

                            }
                            if (blockCharter === null)
                                    {
                                        return(
                                        <Rubric
                                        stateMod={charters.stateMod}
                                        key={charters.id}
                                        linK={charters.linK}
                                        image={charters.imageCharter}
                                        status={charters.status}
                                        pstCompletion={charters.pstCompletion}>
                                        {charters.nameCharter}
                                    </Rubric>)
                                }
                                })
                    }
                </div>
                <div className = "list-group-item">
                {
                    charters.developmentCharters.map(function(charters){
                        blockCharter=null
                        blockCharters.map(function(blockCharters){
                            if (charters.id===blockCharters.id){
                                blockCharter=blockCharters.id;
                            }
                        })
                        if (blockCharter !== null){
                            return(
                                <Rubric
                                    stateMod={charters.stateMod}
                                    key={charters.id}
                                    linK={"/"}
                                    image={charters.imageCharter}
                                    status="hidden">
                                    {charters.nameCharter}
                                </Rubric>)

                        }
                        if (blockCharter === null)
                                {
                                    return(
                                    <Rubric
                                    stateMod={charters.stateMod}
                                    key={charters.id}
                                    linK={charters.linK}
                                    image={charters.imageCharter}
                                    status={charters.status}
                                    pstCompletion={charters.pstCompletion}>
                                    {charters.nameCharter}
                                </Rubric>)
                            }
                            })
                }
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
