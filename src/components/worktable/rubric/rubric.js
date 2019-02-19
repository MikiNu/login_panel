import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory,Switch} from 'react-router'
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {loginUpdate,passwordUpdate,reset,tryAutoFill,submit,rootFilter} from '../reducers/actions';
//import './AboutPage.less';

export class Rubric extends React.Component{
    render() {
            if (this.props.stateMod === "old"){
                if (this.props.status !== "hidden"){
                    return (
                        <div className="desctop_icon">
                		  <a href={this.props.linK}>
                		    <div className="desctop_btn ui-sortable-handle" style={{background:'#FFF url(https://core.gio.ru/default_style/img/module_icon/'+(this.props.image)+') center no-repeat'}}></div>
                		  </a>
                		  <span className="no_sort">{this.props.children}</span>
                		</div>
                    )
                }
                if (this.props.status === "hidden" && this.props.pstCompletion === undefined){
                    return (
                        <div className="desctop_icon buy">
                            <i className="icon wb-lock icon_lock" aria-hidden="true"></i>
                    		<a href={this.props.linK}>
                    		    <div className="desctop_btn ui-sortable-handle" style={{background:'#FFF url(https://core.gio.ru/default_style/img/module_icon/'+(this.props.image)+') center no-repeat'}}></div>
                    		</a>
                    		<span className="no_sort">{this.props.children}</span>
                        </div>
                    )
                }
                return(
            		<div className="desctop_icon buy">
                        <i className="icon wb-lock icon_lock" aria-hidden="true"></i>
                        <a href={this.props.linK}>
                            <div className="desctop_btn ui-sortable-handle" style={{background:'#FFF url(https://core.gio.ru/default_style/img/module_icon/'+(this.props.image)+') center no-repeat'}}></div>
                        </a>
                        <span className="no_sort">{this.props.children}</span>
                        <div className="progress progress-lg">
                            <div className="progress-bar progress-bar-info progress-bar-striped active" style={{width: (this.props.pstCompletion)+'%'}} role="progressbar">{this.props.pstCompletion}%</div>
                        </div>
            		</div>
    	    )
        }
        if (this.props.status !== "hidden"){
            return (
                <div className="desctop_icon">
                  <Link to={this.props.linK}>
                    <div className="desctop_btn ui-sortable-handle" style={{background:'#FFF url(https://core.gio.ru/default_style/img/module_icon/'+(this.props.image)+') center no-repeat'}}></div>
                  </Link>
                  <span className="no_sort">{this.props.children}</span>
                </div>
            )
        }
        if (this.props.status === "hidden" && this.props.pstCompletion === undefined){
            return (
                <div className="desctop_icon buy">
                    <i className="icon wb-lock icon_lock" aria-hidden="true"></i>
                    <Link to={this.props.linK}>
                        <div className="desctop_btn ui-sortable-handle" style={{background:'#FFF url(https://core.gio.ru/default_style/img/module_icon/'+(this.props.image)+') center no-repeat'}}></div>
                    </Link>
                    <span className="no_sort">{this.props.children}</span>
                </div>
            )
        }
        return(
            <div className="desctop_icon buy">
                <i className="icon wb-lock icon_lock" aria-hidden="true"></i>
                <Link to={this.props.linK}>
                    <div className="desctop_btn ui-sortable-handle" style={{background:'#FFF url(https://core.gio.ru/default_style/img/module_icon/'+(this.props.image)+') center no-repeat'}}></div>
                </Link>
                <span className="no_sort">{this.props.children}</span>
                <div className="progress progress-lg">
                    <div className="progress-bar progress-bar-info progress-bar-striped active" style={{width: (this.props.pstCompletion)+'%'}} role="progressbar">{this.props.pstCompletion}%</div>
                </div>
            </div>
        )
    }
}
