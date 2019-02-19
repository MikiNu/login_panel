import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory,Switch} from 'react-router'
// import { Link } from 'react-router';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {loginUpdate,passwordUpdate,reset,tryAutoFill,submit,rootFilter} from '../reducers/actions';
//import './AboutPage.less';
import Moment from 'moment';
import 'moment/locale/ru';
import weather from './weather.json';

export class Weather extends React.Component{
    render() {
		Moment.locale('ru')
		Moment.updateLocale('ru', {
		    weekdaysShort : ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
		})
        return (
			<div className="col-md-6 col-xs-12 masonry-item">
					<div className="widget widget-shadow weather">

						<div className="widget-footer">
						<div className="row no-space">
			                <div className="col-md-4 col-sm-5 padding-left-30 padding-vertical-30">
			                  <div className="row">
			                    <div className="col-xs-4">
			                      <div className="vertical-align">
			                        <img src={weather.forecast['forecastday'][0]['hour'][15]['condition']['icon']} className="img-responsive"/>
			                      </div>
			                    </div>

			                    <div className="col-xs-8">
			                      <span className="blue-600 font-size-30">{weather.forecast['forecastday'][0]['day']['maxtemp_c']}°
			                        <span className="font-size-20">C</span>
			                      </span>
			                      <span className="font-size-18 blue-grey-700"> / </span>
			                      <span className="font-size-18 blue-grey-700">{weather.forecast['forecastday'][0]['day']['mintemp_c']}°
			                        <span className="font-size-16">C</span>
			                      </span>
			                      <p className="font-size-14 margin-bottom-0">
								  	{Moment(weather.forecast['forecastday'][0]['date']).format('DD.MM.YYYY')}
								  </p>
			                    </div>
			                  </div>
			                </div>

			                <div className="col-md-8 col-sm-7">
			                  <div className="row no-space text-center">
			                    <div className="col-xs-2">
			                      <div className="weather-day vertical-align">
			                        <div className="vertical-align-middle font-size-16">
			                          <div className="margin-bottom-10">{Moment(weather.forecast['forecastday'][1]['date']).format('ddd')}</div>
			                         <img src={weather.forecast['forecastday'][1]['hour'][15]['condition']['icon']} className="img-responsive"/>
			                          <div>{weather.forecast['forecastday'][1]['day']['maxtemp_c']}°
			                            <span className="font-size-12">C</span>
			                          </div>
			                        </div>
			                      </div>
			                    </div>

			                    <div className="col-xs-2">
			                      <div className="weather-day vertical-align">
			                        <div className="vertical-align-middle font-size-16">
			                          <div className="margin-bottom-10">{Moment(weather.forecast['forecastday'][2]['date']).format('ddd')}</div>
			                           <img src={weather.forecast['forecastday'][2]['hour'][15]['condition']['icon']} className="img-responsive"/>
			                          <div>{weather.forecast['forecastday'][2]['day']['maxtemp_c']}°
			                            <span className="font-size-12">C</span>
			                          </div>
			                        </div>
			                      </div>
			                    </div>

			                    <div className="col-xs-2">
			                      <div className="weather-day vertical-align">
			                        <div className="vertical-align-middle font-size-16">
			                          <div className="margin-bottom-10">{Moment(weather.forecast['forecastday'][3]['date']).format('ddd')}</div>
			                          <img src={weather.forecast['forecastday'][3]['hour'][15]['condition']['icon']} className="img-responsive"/>
			                          <div>{weather.forecast['forecastday'][3]['day']['maxtemp_c']}°
			                            <span className="font-size-12">C</span>
			                          </div>
			                        </div>
			                      </div>
			                    </div>

			                    <div className="col-xs-2">
			                      <div className="weather-day vertical-align">
			                        <div className="vertical-align-middle font-size-16">
			                          <div className="margin-bottom-10">{Moment(weather.forecast['forecastday'][4]['date']).format('ddd')}</div>
			                          <img src={weather.forecast['forecastday'][4]['hour'][15]['condition']['icon']} className="img-responsive"/>
			                          <div>{weather.forecast['forecastday'][4]['day']['maxtemp_c']}°
			                            <span className="font-size-12">C</span>
			                          </div>
			                        </div>
			                      </div>
			                    </div>

			                    <div className="col-xs-2">
			                      <div className="weather-day vertical-align">
			                        <div className="vertical-align-middle font-size-16">
			                          <div className="margin-bottom-10">{Moment(weather.forecast['forecastday'][5]['date']).format('ddd')}</div>
			                          <img src={weather.forecast['forecastday'][5]['hour'][15]['condition']['icon']} className="img-responsive"/>
			                          <div>{weather.forecast['forecastday'][5]['day']['maxtemp_c']}°
			                            <span className="font-size-12">C</span>
			                          </div>
			                        </div>
			                      </div>
			                    </div>

			                    <div className="col-xs-2">
			                      <div className="weather-day vertical-align">
			                        <div className="vertical-align-middle font-size-16">
			                          <div className="margin-bottom-10">{Moment(weather.forecast['forecastday'][6]['date']).format('ddd')}</div>
			                          <img src={weather.forecast['forecastday'][6]['hour'][15]['condition']['icon']} className="img-responsive"/>
			                          <div>{weather.forecast['forecastday'][6]['day']['maxtemp_c']}°
			                            <span className="font-size-12">C</span>
			                          </div>
			                        </div>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
						</div>


					</div>
				</div>
			);
	}
}
