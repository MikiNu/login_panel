import Cookies from 'js-cookie'
import {getCookie} from 'redux-cookie'
import ReduxThunk from 'redux-thunk'
import keyMirror from 'keymirror'
require ('/var/www/reactor/src/js/json3.min.js')
import Centrifuge,{publish} from 'centrifuge'
var host = window.location.origin;
var timestamp = parseInt(new Date().getTime()/1000).toString();
var hmacBody = timestamp;
var secret = "63948a09-e75d-4012-83d1-ea94283b9e74";
var shaObj = new jsSHA("SHA-256", "TEXT");
shaObj.setHMACKey(secret, "TEXT");
shaObj.update({"input":"hello"});
var token = shaObj.getHMAC("HEX");
import {subscription_namemod,centrifuge} from '/var/www/reactor/src/myCentrifugoClass.js'

//константы
export const EAction = keyMirror({
    FORM_AUTH_LOGIN_UPDATE         : null,
    FORM_AUTH_PASSWORD_UPDATE      : null,
    FORM_AUTH_RESET                : null,
    FORM_AUTH_AUTOFILL             : null,
    RECEIVE_AUTH                   : null,
    ROUTING                        : null,
    LOGIN_REQUEST                  : null,
    LOGIN_FAIL                     : null,
    LOGIN_SUCCESS                  : null,
    LOGOUT_SUCCESS                 : null,
    UPDATE_PATH                    : null,
    UPDATE_SETTINGS                : null
})
export function updateSettings(el) {
    // console.log('mmmmmmmm',el)
    return{
        type: EAction.UPDATE_SETTINGS,
        setting: el
    };
}
// занесение пути в хранилище
export function changePath() {
    console.log('kuku')
    return function(dispatch) {
        dispatch({
            type: EAction.UPDATE_PATH,
            path: location.pathname
        })
    };
}

// обновление логина
export function loginUpdate(event) {
    return {
        type: EAction.FORM_AUTH_LOGIN_UPDATE,
        login: event.target.value
    };
}

// обновление пароля
export function passwordUpdate(event) {
    return {
        type: EAction.FORM_AUTH_PASSWORD_UPDATE,
        password: event.target.value
    };
}

// очистка полей login, password в store
export function reset() {
    return {
        type: EAction.FORM_AUTH_RESET
    };
}

 //set cookie
export function tryAutoFill() {
    return dispatch => {
        const something = Cookies.get('pname');
        console.log(something);
    };
}

//занесение значения в store
function receiveAuth(state) {
    return {
        type: EAction.RECEIVE_AUTH,
        rezult: state.join('')
    }
}

// авторизация
export function isAuthenticated(){
    return function(dispatch) {
        dispatch({
            type: EAction.LOGIN_SUCCESS
        })
    }
}

export function notAuthenticated(){
    return function(dispatch) {
        dispatch({
            type: EAction.LOGOUT_SUCCESS
        })
    }
}

// export function trueA(){
//     console.log('action_func')
//     return {
//           type: EAction.LOGIN_SUCCESS
//         }
// }

// кнопка входа на странице "Login"
export function submitEntryLogin() {

    return function(dispatch, getState) {
        const state = getState();
        //  console.log('autorize=', state);

        // dispatch(reset());
        return fetch('../src/components/ind.php', {
                //../src/components/ind.php return fetch('https://nd.gio.ru/load', {
                method:'post',
                // mode: 'cors',
                // headers:{
                //     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
                // },
                headers: {
                     "Content-type": "application/json"
                },
                body: JSON.stringify({
                    login: state.login,
                    password: state.password,
                    action: 'login'
                })
            //    body: 'username='+state.reducer.login+'&userpassword='+state.reducer.password+'&action=login'
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                // console.log('resp',response);
            //     try {
            //         console.log('jjhh',response, state);
            //         // dispatch(receiveAuth(response, state));
            //         // dispatch(tryAutoFill())
            //         // dispatch(checkAuth())
            //     } catch (e) {
            //         console.log('er1');
            //     }
            // })
            // .catch(error => {
            //     console.log('error');
            if (response !== 'qhw' ) {
                // dispatch({
                //   type: EAction.LOGIN_SUCCESS
                // })
                // dispatch(trueA())
                dispatch({
                  type: EAction.ROUTING,
                  payload: {
                    method: 'push'
                    // nextUrl: location.pathname
                  }
                })
                var data = {
                  "action": "isLogin"
                }
                subscription_namemod.publish(data);
                // subscription_namemodb.publish({"input": "hello world"})
                // fetch('https://centrifugo.gio.ru/api/', {
                //         method:'post',
                //         headers: {
                //              "Content-type": "application/json",
                //              "X-API-Sign": token
                //         },
                //         body: JSON.stringify({
                //             "method": "publish",
                //             "params": {
                //                 "channel": "work",
                //                 "data": {
                //                     "input": "hello"
                //                 }
                //             }
                //         })
                //     })
            }
            else {
                dispatch({
                  type: EAction.LOGIN_FAIL
                })
                dispatch(rootRedirectLogin(state.reducer.isAuthenticated))
            }
        })
    }
}

export function submitEntryLogout(){
    var data = {
      "action": "isLogout"
    }
    subscription_namemod.publish(data);
    return function(dispatch) {
        dispatch(changePath())
    }
}

// меняем маршрут на страницу "Login"
export function rootRedirectLogin(isAuthenticated) {
    return function(dispatch) {
        dispatch({
            type: EAction.ROUTING,
            payload: {
                method: 'push',
                nextUrl: '/login'
            }
        })
    }
}

//проверка авторизован ли user
export function checkAuth(){

        Cookies.set('name',' namejjj')
        Cookies.get('hash')
        Cookies.get('user_id')
        Cookies.get('device_hash')
        return function(dispatch, getState) {
                const state = getState()
                return fetch('../src/components/ind.php', {
              credentials: 'include'
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                    if (response !== 'qw' ) {
                        // dispatch(TRuA)
                        dispatch(isAuthenticated())
                        // dispatch({
                        //   type: EAction.ROUTING,
                        //   payload: {
                        //     method: 'push'
                        //
                        //   }
                        // })
                    }
                    else {
                        dispatch({
                          type: EAction.LOGIN_FAIL
                        })
                        // dispatch(rootRedirectLogin(state.reducer.isAuthenticated))
                    }console.log('tut')
        })
    }

}

//get ответ от сервера, проверяем на успешность выполнения
export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

//парсим ответ от сервера как JSON
export function parseJSON(response) {
    return response.json()
}
