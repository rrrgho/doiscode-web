import React from "react";
import {FiArrowDown} from "react-icons/all";
import {FiArrowRight} from "react-icons/fi";
import Logo from '../../assets/images/logo/logo-horizontal.png'

const LastGreetings = () => {
    return (
        <div className="p-3 p-md-0">
            <div className="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <div className="react-image mb--20">
                                    <img src={Logo} alt="Doiscode Logo" />
                                </div>
                                <p className="description mt-5">
                                    Digital Business <span className="theme-gradient">Booster</span>, Digital <span className="theme-gradient"> Solutions. </span> <br/>
                                    Transforming ideas into digital reality.
                                </p>
                                <div className="button-group">
                                    <a className="btn-default btn-large round btn-icon" target="_blank" href="https://wa.me/+6285186897566/?text=Hi,%20I%20Want%20to%20Consult%20with%20Doiscode%20Support%20Team">Discuss Now <FiArrowRight /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LastGreetings
