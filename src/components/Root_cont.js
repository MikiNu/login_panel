import React, {PropTypes}  from 'react';
import {Provider} from 'react-redux';
// import routes from '../routes';
import {ReduxRouter} from 'redux-router';


import  {FormAuthController} from './components/AuthForm';
import  {App} from './components/App';
// import  {PageR} from './components/RPage.jsx';
import  {LoggedInLayout} from './components/LoggedInLayout';
import  {SPage} from './components/SPage';

export default class Root extends React.Component {

    static propTypes = {
        store: React.PropTypes.object.isRequired
    }

    render () {
        return (
            <div>
                <Provider store={this.props.store}>
                    <div>
                        <ReduxRouter>
                            <Route path='/' component={App}>
                                 <Route path='/login' component={FormAuthController} />
                                 <Route component={LoggedInLayout} onEnter={requireAuth}>
                                     <Route path='/about' component={SPage} />
                                 </Route>
                            </Route>
                        </ReduxRouter>
                    </div>
                </Provider>
            </div>
        );
    }
}
function requireAuth(nextState, replace) {
    // if (!SessionStore.isLoggedIn()) {
    //     replace({
    //         pathname: '/login',
    //         state: { nextPathname: nextState.location.pathname }
    //     });
    // }
}
