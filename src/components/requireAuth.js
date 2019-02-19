import React from 'react'
import { connect } from 'react-redux'   // связывает хранилище Redux с компонентами React
import { bindActionCreators } from 'redux'
import { checkAuth,changePath } from '../reducers/actions'
import  { FormAuthController } from './AuthForm'    //комп-т "Форма логина"
import { Redirect } from 'react-router-dom'
import Centrifuge from 'centrifuge'
import {subscription,namemod} from '/var/www/reactor/src/myCentrifugoClass.js'


export default function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {
        // constructor(props) {
        //         super(props);
        //         this.state = {
        //               redirectToReferrer: false
        //         };
        //     }

        //метод componentWillMount() вызывается один раз, на клиенте и сервере, непосредственно перед рендерингом
        componentWillMount() {
            // console.log('from',this.props.location.pathname)
            this.props.checkAuth()
            this.props.changePath()
        }

        render() {
            return (
                <div>
                    {
                        (this.props.state.reducer.isAuthenticated === "true" && this.props.location.pathname !=="/login")
                        ? (<Component {...this.props.state} />)
                        : (this.props.state.reducer.logout === "true")
                        ? (<Redirect to='/login'/>
                    )
                        :(null)
                    }
                </div>
            )
        }
    }


// connect(mapStateToProps,mapDispatchProps)(NameComponent)
  return connect(state => ({state : state}),
                dispatch => bindActionCreators({checkAuth,changePath}, dispatch))
                (AuthenticatedComponent)
}
