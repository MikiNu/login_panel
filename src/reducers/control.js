import {connect} from 'react-redux';

export const FormAuthController = connect(
    state => ({
        login : state.login,
        password : state.password
    }),
    dispatch => bindActionCreators({
        loginUpdate,
        passwordUpdate,
        reset,
        tryAutoFill,
        submit
    }, dispatch)
)(FormAuthView)
