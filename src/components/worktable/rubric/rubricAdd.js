import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory,Switch} from 'react-router'
// import { Link } from 'react-router';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {loginUpdate,passwordUpdate,reset,tryAutoFill,submit,rootFilter} from '../reducers/actions';
//import './AboutPage.less';

export class RubricAdd extends React.Component{
    render() {
        return (<div>
          <div className="panel-heading">
            <h3 className="panel-title">Заявка на открытие доступа к разделам</h3>
          </div>
          <div className="panel-body">
            <form method="post" action="/load/worktable/module_request" className="form-horizontal fv-form fv-form-bootstrap form_ajax_item" id="send_module_request" ><button type="submit" className="fv-hidden-submit" style={{display: 'none', width: '0px', height: '0px'}}></button>
              <div className="form-group">
                <label className="col-sm-3 control-label">Укажите название раздела и для каких целей он вам нужен:</label>
                <div className="col-sm-9">
                  <textarea className="form-control" name="standard_content" rows="5" data-fv-field="standard_content"></textarea>
                  <small className="help-block" data-fv-validator="notEmpty" data-fv-for="standard_content" data-fv-result="NOT_VALIDATED" style={{display: 'none'}}>Вы не указали причину выдачи прав!</small>
                  <small className="help-block" data-fv-validator="stringLength" data-fv-for="standard_content" data-fv-result="NOT_VALIDATED" style={{display: 'none'}}>Причина не может быть меньше 100 символов</small>
                </div>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary" id="smr_button">Отправить</button>
              </div>
            </form>
          </div></div>
				);
		}
}
// export const HomeController = connect(
// 		state => ({
// 				// login : state.login,
// 				// password : state.password
// 				//id: ownProps.params.id,
// 				//filter: ownProps.location.query.filter
// 		}),
// 		dispatch => bindActionCreators({
// 				rootFilter
// 		}, dispatch)
// )(Home);
