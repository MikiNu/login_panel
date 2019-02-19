import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,Switch} from 'react-router-dom'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom';
import {submitEntryLogout} from '../reducers/actions';
import  {WorktableGrid} from './worktable/worktableGrid';
import  {SettingLayout} from './worktable/settingsLayout';
import  {HomeController} from '/var/www/reactor/src/components/Home'


require('../css/style_old.css?ver1.021');
require('../css/global/css/bootstrap.min.css?ver1.013');
require('../css/global/css/bootstrap-extend.min.css?ver1.005');
require('../css/assets/css/site.min.css?ver1.004');
require('../css/global/css/bootstrap-datepicker.min.css?v2.2.0');
require('../css/global/css/ladda.min.css?v2.2.0');
require('../css/assets/css/modals.min.css');
require('../css/global/css/select2.min.css?ver1.000');
require('../css/global/css/animsition.min.css');
require('../css/global/css/asScrollable.min.css');
require('../css/global/css/switchery.min.css');
require('../css/global/css/introjs.min.css');
require('../css/global/css/slidePanel.min.css');
require('../css/global/flag-icon-css/flag-icon.min.css');
require('../css/global/css/chartist.min.css');
// require('../css/global/css/global/css/formValidation.min.css');
require('../css/global/css/webui-popover.min.css?v2.2.1');
require('../css/global/css/toolbar.min.css?v2.2.0');
require('../css/assets/css/message.min.css?v2.2.6');
require('../css/assets/css/masks.min.css?v2.2.0');
require('../css/assets/css/layouts.min.css?v2.2.1');
require('../css/assets/css/forum.min.css?v2.2.0');
require('../css/global/css/alertify.min.css?v2.2.0');
require('../css/assets/css/alertify.min.css?v2.2.0');
require('../css/global/css/dataTables.bootstrap.min.css?v2.2.4');
require('../css/global/css/toastr.min.css');
require('../css/assets/css/toastr.min.css');
require('../css/global/fonts/weather-icons/weather-icons.css');
require('../css/global/fonts/web-icons/web-icons.min.css');
require('../css/global/fonts/brand-icons/brand-icons.min.css');
require('../css/global/fonts/font-awesome/font-awesome.min.css?ver1.000');
require('../css/cropper.min.css');
require('../css/assets/css/weather.min.css');
// require('../css/jquery.bxslider.worktable.css?ver1.0');
require('../css/jquery.qtip.css');
require('../css/global/css/skintools.min.css');
require('../css/default.css');
// require('./css/login-v3.css');
//
// <style type="text/css">.fancybox-margin{margin-right:0px;}</style>
require('../css/slick_slider.css');
import $ from 'jquery';
require('../js/bootstrap.min.js');
var layout = "base", settingsName = "remark." + layout + ".skinTools"
var classNNavbar="site-navbar navbar navbar-default navbar-fixed-top navbar-mega"
// var classNNavbarInverse
class basicLayout extends React.Component{
    // shouldComponentUpdate(newProps) {
    //     return (
    //         this.props.listenLocal !== newProps.listenLocal
    //     )
    // }
    constructor(props) {
      super(props)
      this.state = {
        blockSetting: false,
        // listenLocal: localStorage.getItem(settingsName)
      }
    }
    componentWillMount(){
        let viewH = JSON.parse(localStorage.getItem(settingsName))
        if (viewH === null){
            const defaultSettings= {
                sidebar: "dark",
                navbar: "primary",
                navbarInverse: "false",
                primary: "primary"
            }
            localStorage.setItem(settingsName,JSON.stringify(defaultSettings));
        }
        if (viewH !== null){if (viewH.navbar != "primary"){
        classNNavbar+=" bg-"+viewH.navbar+"-600"}
        if (viewH.navbarInverse === "true"){
        classNNavbar+=" navbar-inverse"
    }
    // if (viewH.navbarInverse === "false"){
    // classNNavbar-=" navbar-inverse"
    // }
}
        // classNNavbarInverse=viewH.navbarInverse
        console.log('fdfdfdfdfdf',localStorage.getItem(settingsName))
    }
    componentWillUpdate(){
        classNNavbar="site-navbar navbar navbar-default navbar-fixed-top navbar-mega"
        let viewH = JSON.parse(localStorage.getItem(settingsName))
        if (viewH.navbar != "primary"){
        classNNavbar+=" bg-"+viewH.navbar+"-600"}
        if (viewH.navbarInverse === "true"){
        classNNavbar+=" navbar-inverse"
        }
        // if (viewH.navbarInverse === "false"){
        // classNNavbar="site-navbar navbar navbar-default navbar-fixed-top navbar-mega"
        // }
    }

    settingsMenu(){
        this.setState(prevState => ({
            blockSetting: !prevState.blockSetting
        }))
    }
    render() {
        var marginL0 = {
            marginLeft:'0px'
              }
        // let navClassName=""
        // console.log('rebder')
        return (
            <div className='dashboard site-menubar-unfold'>
                <nav className={classNNavbar} role="navigation">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle hamburger hamburger-close navbar-toggle-left hided"
                    data-toggle="menubar">
                      <span className="sr-only">Навигация</span>
                      <span className="hamburger-bar"></span>
                    </button>
                    <button type="button" className="navbar-toggle collapsed" data-target="#site-navbar-collapse"
                    data-toggle="collapse">
                      <i className="icon wb-more-horizontal" aria-hidden="true"></i>
                    </button>
                    <div className="navbar-brand navbar-brand-center site-gridmenu-toggle" >
                        <a href="/">
                            <img className="navbar-brand-logo" src="https://core.gio.ru/default_style/img/logo.png" title="GIO.RU"/>
                        </a>
                        <span className="navbar-brand-text hidden-xs" data-toggle="gridmenu">
                            <span  className="brand_text [small_brand]small_brand [/small_brand] hidden-xs">Рабочий стол</span>
                        </span>
                        <span className="visible-lg gio_slogan">GENERAL INTEGRATED OPERATIONS</span>
                    </div>
                    <button type="button" className="navbar-toggle collapsed" data-target="#site-navbar-search"
                    data-toggle="collapse">
                      <span className="sr-only">Поиск</span>
                      <i className="icon wb-search" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="navbar-container container-fluid">
                    <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
                      <ul className="nav navbar-toolbar">


                        <li className="hidden-xs" id="toggleFullscreen">
                          <a className="icon icon-fullscreen" data-toggle="fullscreen" title="На весь экран" href="#" role="button">
                            <span className="sr-only">На весь экран</span>
                          </a>
                        </li>
                        <li className="hidden-float">
                          <a className="icon wb-search" data-toggle="collapse" href="#" data-target="#site-navbar-search"
                          role="button">
                            <span className="sr-only">Поиск</span>
                          </a>
                        </li>
                      </ul>
                      <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
                        <li className="dropdown">
                          <a className="navbar-avatar dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false"
                          data-animation="scale-up" role="button">
                            <span className="avatar avatar-online">
                              <img src="" alt=""/>
                              <i></i>
                            </span>
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li role="presentation">
                              <a href="javascript:void(0)" role="menuitem"><i className="icon wb-user" aria-hidden="true"></i> ФИО</a>
                            </li>

                            <li className="divider" role="presentation"></li>
                            <li role="presentation">
                              <a className="btn_ajax_do" role="menuitem" onClick = {this.props.submitEntryLogout}><i className="icon wb-power" aria-hidden="true"></i>Выход</a>
                            </li>
                          </ul>
                        </li>
                      <li >
                          <a className="site-skintools-toggle" href="#" onClick = {this.settingsMenu.bind(this)}>
                              <i className="fa-cog fa-spin fa-fw"></i>
                          </a>
                      </li>
                      <li className="dropdown browser_errors hide">
                          <a data-toggle="dropdown" title="Ошибки браузера" aria-expanded="false"
                              data-animation="scale-up" role="button">
                              <i className="icon fa-exclamation-triangle red-600" aria-hidden="true"></i>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                              <li className="list-group" role="presentation">
                                  <a className="list-group-item adobe_flash_off hide" href="javascript:void(0)" role="menuitem">
                                    <div className="media">
                                      <div className="media-left padding-right-10">
                                        <i className="icon fa-exclamation bg-red-600 white icon-circle" aria-hidden="true"></i>
                                      </div>
                                      <div className="media-body">
                                          <h6 className="media-heading">Отключен Adobe Flash Player!</h6>
                                          <time className="media-meta">Для устранения свяжитесь с IT отделом</time>
                                      </div>
                                    </div>
                                  </a>
                              </li>
                          </ul>
                      </li>
                        <li className="dropdown">
                          <a id="show-last-notifications" data-toggle="dropdown" title="Уведомления" aria-expanded="false"
                              data-animation="scale-up" role="button">
                              <i className="icon wb-bell" aria-hidden="true"></i>
                              <span id="count_user_notifications" className="badge badge-danger up"></span>
                          </a>
                          <ul className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                              <li className="dropdown-menu-header" role="presentation">
                                  <h5>Последние уведомления</h5>
                                  <span id="user_notifications_badge" className="label label-round label-danger ">Новых </span>
                              </li>
                              <li id="user_notifications" className="list-group notifications" role="presentation">
                              </li>
                              <li className="dropdown-menu-footer" role="presentation">
                                  <a id="notification_sound_button" className="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">

                                  </a>
                                  <a href="/notifications/view_all_my_notifications" role="menuitem">
                                      Все уведомления
                                  </a>
                              </li>
                          </ul>
                          </li>
                          <li>
                              <a data-toggle="dropdown" title="Кто онлайн" aria-expanded="false"
                                  data-animation="scale-up" role="button">
                                  <i className="icon wb-users" aria-hidden="true"></i>
                              </a>
                              <ul className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                                  <li className="list-group users_online" role="presentation">

                                  </li>
                              </ul>
                          </li>

                      </ul>

                    </div>
                    <div className="collapse navbar-search-overlap" id="site-navbar-search">
                      <form role="search" id="form_global_search" method="post">
                        <div className="form-group">
                          <div className="input-search">
                            <i className="input-search-icon wb-search" aria-hidden="true"></i>
                              <input id="global_search" type="text" className="form-control" name="global_search_all"  value="" placeholder="Поиск..."/>
                            <button type="button" className="input-search-close icon wb-close" data-target="#site-navbar-search"
                            data-toggle="collapse" aria-label="Close"></button>
                            <div className="col-md-12 col-xs-12 list-group" id="global_search_result" style={{'overflowY': 'scroll',display:'none'}}>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </nav>
                <div className="site-menubar" style={{'display':'none'}} >
                  <div className="site-menubar-body">
                    <div>
                      <div>
                        <ul className="site-menu">

                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="site-menubar-footer">

                    <a href="/login/logout" data-placement="top" data-toggle="tooltip" data-original-title="Выйти">
                      <span className="icon wb-power" aria-hidden="true"></span>
                    </a>
                  </div>
                </div>
                <div className="site-gridmenu">
                  <div>
                    <div>
                      <ul>
                       <li>
                           <a href="/">
                             <i className="icon fa-home"></i>
                             <span>Домой</span>
                           </a>
                       </li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div className='page' style={marginL0}>
                    <div className='page-content '>
                        <div className='gio-content '>
                            <WorktableGrid />
                        </div>
                    </div>
                </div>

                <footer className="site-footer" style={marginL0} >
                    <div className="site-footer-legal">© 2015 - 2017 <a href="https://GIO.RU">GIO.RU</a></div>
                    <div className="site-footer-right">
                        Разработано <a className="created_by" href="https://irk.life">ИРКLIFE</a>
                    </div>
                </footer>
                 {this.state.blockSetting ? <SettingLayout/> : null}


            </div>
        );
    }
}
export const basicLayoutController = withRouter(connect(
    state => ({state:state
    }),
    dispatch => bindActionCreators({
        submitEntryLogout
    }, dispatch)
)(basicLayout));
