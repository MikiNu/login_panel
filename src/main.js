import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import {Route, Switch,Router} from 'react-router-dom'
import { ConnectedRouter,syncHistoryWithStore, routerReducer,routerMiddleware, push } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import * as reducers from './reducers/reducers'
import createHistory from 'history/createBrowserHistory'
import {EAction} from './reducers/actions'
import {App} from './components/App'
import {FormAuthController} from './components/AuthForm'   //комп-т  "Форма логина"
import {basicLayoutController} from './components/basicLayout'   //комп-т  "Рабочий стол"
import {HomeController} from './components/Home'
import requireAuthentication from './components/requireAuth'
import {LoggedInLayout} from './components/LoggedInLayout'
import {SPageController} from './components/SPage'
import {Centrif} from './myCentrifugoClass.js'


const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const redirect = store => next => action => {
    if (action.type === EAction.ROUTING) {
        history[action.payload.method](action.payload.nextUrl)
  }
  return next(action)
}

export const history = createHistory();



function configureStore() {
    return createStore(
        combineReducers({...reducers,routing: routerReducer}),
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware,
                routerMiddleware(history)
            )
        )
    )
    if (module.hot) {
    module.hot.accept('./reducers/reducers', () => {
      const nextRootReducer = require('./reducers/reducers').rootReducer
      store.replaceReducer(nextRootReducer)
    });
  }
}
console.log(location.pathname);
export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Centrif>
                <Route path='/about' component={SPageController} />
                <Route path='/login' component={FormAuthController} />
                <Route path='/' component={requireAuthentication(basicLayoutController)} />
                </Centrif>
            </Switch>
        </Router>
    </Provider>,
  document.getElementById('content')
)
