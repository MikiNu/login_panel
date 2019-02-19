import React from 'react';
import {withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginUpdate,passwordUpdate,reset,tryAutoFill,submitEntryLogin,checkAuth} from '../reducers/actions';
require('./css/bootstrap.min.css');
require('./css/bootstrap-extend.min.css');
require('./css/site.min.css');
require('./css/bootstrap-datepicker.min.css');
require('./css/skintools.min.css');
require('./css/default.css');
require('./css/login-v3.css');

class PageR extends React.Component {
    shouldComponentUpdate(newProps) {
        return (
            this.props.login !== newProps.login
            || this.props.password !== newProps.password
            || this.props.isAuthenticated !== newProps.isAuthenticated
        )
    }
    render() {
        console.log('page login',this.props.login)
        const from  = this.props.path
        // console.log('qwqwqwqwqw',from)
        // console.log('qwqwqwqwqw',this.props.state.reducer.isAuthenticated)
        if (this.props.isAuthenticated === "true") {
            if (from === "/login"){
                return (
                    <Redirect to='/'/>
                )
            }
            if (from !== "/login"){
                return (
                    <Redirect to={from}/>
                )
            }
        }
        // (this.props.state.reducer.isAuthenticated === "true")
        // ? (<Component {...this.props.state} />)
        // : (this.props.state.reducer.logout === "true")
        // ? (<Redirect to='/login'/>)
        // :(null)

        return (

            <div className="page-login-v3 layout-full site-menubar-hide site-menubar-unfold">
                <div className="page vertical-align text-center">
                    <div className="page-content vertical-align-middle">
                        <div className="panel">
                            <div className="panel-body">
                                <div className="brand">
                                    <img className="brand-img" src="https://core.gio.ru/default_style/img/logo_black.png" width="100px" />
                                    <h2 className="brand-text font-size-18"></h2>
                                </div>
                                <div className="form_ajax_item">
                                    <div className="form-group form-material floating">
                                        <input type="text"
                                        className="form-control" name="username"
                                        value = {this.props.login}
                                        onChange = {this.props.loginUpdate}/>
                                        <label className="floating-label">Логин</label>
                                    </div>
                                    <div className="form-group form-material floating">
                                        <input type="password"
                                        className="form-control" name="userpassword"
                                        value = {this.props.password}
                                        onChange = {this.props.passwordUpdate}/>
                                            <label className="floating-label">Пароль</label>
                                    </div>
                                    <div className="form-group clearfix">
                                        <div className="checkbox-custom checkbox-inline checkbox-primary checkbox-lg pull-left">
                                            <input type="checkbox" id="inputCheckbox" name="remember"/>
                                            <label className="inputCheckbox">Запомнить меня</label>
                                        </div>
                                        <a className="pull-right" href="/">Забыли пароль?</a>
                                    </div>
                                    <input type="hidden" name="action" value="login"/>
                                    <input type="hidden" name="hash" id="hash_user" value="ff56482fb8d8ef7588c1bf1f41019836"/>
                                    <button onClick = {this.props.submitEntryLogin} className="btn btn-primary btn-block btn-lg margin-top-40">Войти</button>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <footer className="page-copyright page-copyright-inverse">
                            <p>Разработано <a className="created_by" href="https://irk.life">ИРКLIFE</a></p>
                            <p>© 2015 - 2017 Все права защищены.</p>
                            <div className="social">
                                  <a className="btn btn-icon btn-pure" >
                                    <i className="icon bd-twitter" aria-hidden="true"></i>
                                  </a>
                                  <a className="btn btn-icon btn-pure" >
                                    <i className="icon bd-facebook" aria-hidden="true"></i>
                                  </a>
                                <a className="btn btn-icon btn-pure" >
                                    <i className="icon bd-google-plus" aria-hidden="true"></i>
                                </a>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export const FormAuthController = connect(
    state => ({
        login : state.reducer.login,
        password : state.reducer.password,
        path : state.reducer.path,
        isAuthenticated: state.reducer.isAuthenticated
        // state: state
    }),
    dispatch => bindActionCreators({
        loginUpdate,
        passwordUpdate,
        checkAuth,
        submitEntryLogin
    }, dispatch)
)(PageR);
