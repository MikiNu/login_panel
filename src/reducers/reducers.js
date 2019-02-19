import {EAction} from '../reducers/actions';
// const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {}

export function reducer(state = {
    login: "",
    password: ""

}, action) {
    switch (action.type) {
        case EAction.FORM_AUTH_LOGIN_UPDATE:
            return {
                ...state,
                login: action.login
            }
        case EAction.FORM_AUTH_PASSWORD_UPDATE:
            return {
                ...state,
                password: action.password
            }
        case EAction.FORM_AUTH_RESET:
            return {
                ...state,
                login: "",
                password: ""
            }
        case EAction.FORM_AUTH_AUTOFILL:
            return {
                ...state,
                login: action.login,
                password: action.password
            }
        case EAction.RECEIVE_AUTH:
            return {
                ...state,
                rezult: action.rezult
            }
        case EAction.FILTER:
            return {
                ...state,
            id: action.id,
            filter: action.filter

        }
        case EAction.LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated: "true",
                logout: "false"
            }
        case EAction.LOGOUT_SUCCESS:
            return{
                ...state,
                isAuthenticated: "false",
                logout: "true"
            }
        case EAction.LOGIN_FAIL:
            return{
                ...state,
                isAuthenticated: "false",
                logout: "true"
            }
        case EAction.LOGIN_REQUEST:
            return{
                ...state, request: "false"
            }
        case EAction.UPDATE_PATH:
            return{
                ...state, path: action.path
            }
        case EAction.UPDATE_SETTINGS:
            return{
                ...state, setting: action.setting
            }
        default:
            return state;
    }
}
