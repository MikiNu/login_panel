import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
// import * as slick from 'slick-carousel';
// require('./slick_slider.css');

export class SliderNews extends React.Component{
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            adaptiveHeight:true

        }
        return (
			<div className="col-md-6 col-xs-12 masonry-item">
				<div className="panel panel-bordered">
    		        <div className="panel-heading">
    					<h3 className="panel-title">Доска объявлений</h3>
    		        </div>
    			    <div className="panel-body  padding-bottom-40">
                    <Slider {...settings}>
                            <div>
                                <img alt="" src="https://nd.gio.ru/upload/news_upload/2017-05-29/2-kategoriya-mai.jpg" />
                            </div>
                            <div>
                                <img alt="" src="https://nd.gio.ru//upload/news_upload/2017-05-12/snimok_ekrana_2017-05-11_v_19_55_20.png" />
                            </div>
                            <div>
                                <img alt="" src="https://nd.gio.ru//upload/news_upload/2017-01-23/hello.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2017-04-04/kopiya_kategorii.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2017-02-02/pricaz.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2017-03-17/223032110_4217557704054632222.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2017-03-17/230115205_4384348567707985142.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2017-02-28/223022875_15162395047363440138.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2016-07-15/.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2016-07-15/Компенсация дороги.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2016-07-15/Оплата по категориям.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2017-04-07/premirovanie_aprel.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2017-04-27/2_kategoriya_13_chelovek.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2017-04-27/3_kategoriya_aprel.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2017-04-27/3_kategoriya_s_1_marta.jpg" />
                            </div>
                            <div>
                                <img alt="" src="/upload/news_upload/2017-04-27/kategorii_6_chelovek.jpg" />
                            </div>
                          </Slider>
    				</div>
				</div>
			</div>
        );
    }
}
