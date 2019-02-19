
import React from 'react'
import { connect } from 'react-redux'   // связывает хранилище Redux с компонентами React
import { bindActionCreators } from 'redux'
import { checkAuth,isAuthenticated,EAction,changePath,notAuthenticated } from './reducers/actions'
import { Redirect } from 'react-router-dom'
// import {subscriptionb,subscription} from '/var/www/reactor/src/main.js'
require ('./js/json3.min.js')
import Centrifuge from 'centrifuge'
var host = window.location.origin;
var timestamp = parseInt(new Date().getTime()/1000).toString();
var hmacBody = timestamp;
var secret = "";
var shaObj = new jsSHA("SHA-256", "TEXT");
shaObj.setHMACKey(secret, "TEXT");
shaObj.update(hmacBody);
var token = shaObj.getHMAC("HEX");
var centrifuge = new Centrifuge({
    url: '',
    user: "",
    timestamp: timestamp,
    token: token
});
var namemod; //имя модуля
export var subscriptionb;
export var subscription_namemod;

class Appet extends React.Component {
    // shouldComponentUpdate(newProps) {
    //     return (
    //         this.props.Authenticated !== newProps.Authenticated
    //     )
    // }

    componentWillMount(){
        var df = this;

        if (namemod==null){
            namemod="/"
        }

        centrifuge.on('connect', function() {
            console.log('Центрифуга подключена');
            console.log('Канал: '+namemod)
            console.log('Юзер: ')

            subscription_namemod = centrifuge.subscribe(namemod, function(message) {
                    console.log('message',message.data.action);
                switch (message.data.action){
                    case "isLogin":
                        df.props.isAuthenticated();
                    break;
                    case "isLogout":
                        df.props.notAuthenticated();
                        <Redirect to='/login'/>
                    break;
                }
            });

            subscriptionb = centrifuge.subscribe('work', function(message) {
                console.log('as');
            });
        });
        centrifuge.connect();
    }

    componentDidUpdate(){
        namemod=this.props.location.pathname;
        console.log('КаналC',namemod)
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export const Centrif = connect(state => ({state : state}),
            dispatch => bindActionCreators({isAuthenticated,changePath,notAuthenticated}, dispatch))(Appet)
