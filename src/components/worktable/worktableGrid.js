import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory,Switch} from 'react-router'
// import { Link } from 'react-router';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {loginUpdate,passwordUpdate,reset,tryAutoFill,submit,rootFilter} from '../reducers/actions';
//import './AboutPage.less';
import  {RubricSection} from './rubric/rubricSection';
import  {Weather} from './weather/weather';
import  {Ticker} from './ticker/ticker';
import  {SliderNews} from './slider/slider';
// import {Masonry} from '../js/masonry.pkgd.min.js';

export class WorktableGrid extends React.Component{
    // componentDidMount() {
    //     var grid = this.refs.grid
    //     this.msnry = new Masonry( grid, {
    //         itemSelector: '.masonry-item',
    //         columnWidth: auto,
    //         isFitWidth: true
    //     })
    // }
    render() {
        return (
            <div className='row '>
                <RubricSection />
                <Weather />
                <Ticker />
                <SliderNews />
            </div>
        );
    }
}
