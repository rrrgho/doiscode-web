import React from "react";
import BannerImage from "../../assets/images/app/banner-flatdesign-digilab.png";
import {Link} from "react-router-dom";

const Banner = () => {
    return (
        <div className="p-3 p-md-0">
            {/* Start About Area  */}
            <div className="slider-area slider-style-1 bg-transparent height-850">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 d-block d-md-none">
                            <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_25001216.htm#query=programming%20flat%20design&position=36&from_view=search&track=ais">
                                <img src={BannerImage} className="banner-image" alt="https://www.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_25001216.htm#query=programming%20flat%20design&position=36&from_view=search&track=ais" />
                            </a>
                        </div>
                        <div className="col-12 col-lg-6 mt-5 mt-md-0">
                            <div className="inner text-center text-lg-start">
                                <h2 className="title text-secondary d-none d-md-block">Digital Business Booster, <br />Digital Generation Solution {" "}</h2>
                                <h2 className="title text-secondary d-block d-md-none">Digital Business Booster, <br />Digital Generation Solution {" "}</h2>
                                <p className="subtitle">
                                    We help you to Empower Your Business <br/> with Expert IT Consulting and <br/> New Generation of Digital Solutions.
                                </p>
                                <div className="button-group mt-5 bounce">
                                    <Link className="btn-default btn-medium btn-icon" to="/consult">Discuss Your Need <i className="icon"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-none d-md-block">
                            <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_25001216.htm#query=programming%20flat%20design&position=36&from_view=search&track=ais">
                                <img src={BannerImage} className="banner-image" alt="https://www.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_25001216.htm#query=programming%20flat%20design&position=36&from_view=search&track=ais" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner

