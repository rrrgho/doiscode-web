import React from 'react'
import {FiArrowRight} from "react-icons/fi";
import InteractiveImage from '../../assets/images/Interactive/interactive.png'
import InteractiveImageWhiteShape from '../../assets/images/Interactive/interactive-whiteshapte.svg'

const Interactive = () => {
    return (
        <div className="slider-area slider-style-6 shape-right height-750">
            <div className="container">
                <div className="row row--30 align-items-center p-3 p-md-0">
                    <div className="order-2 order-lg-1 col-lg-6 mt_md--50 mt_sm--50 mt_lg--30">
                        <div className="inner text-start">
                            <h1 className="title color-white">Interactive <br />Team Support</h1>
                            <p className="description color-white">
                                We take a collaborative approach to every project, working closely with our clients to ensure that they receive the support they need to achieve their goals.
                            </p>
                            <div className="button-group mt--30 mt_sm--20">
                                <a className="btn-default btn-medium btn-icon btn-border" target="_blank" href="https://wa.me/+6285186897566/?text=Hi,%20I%20Want%20to%20Consult%20with%20Doiscode%20Support%20Team">Get Started <i className="icon"><FiArrowRight /></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="thumbnail">
                            <img src={InteractiveImage} alt="Banner Images" />
                        </div>
                    </div>
                    <div className="shape-image">
                        <img src={InteractiveImageWhiteShape} alt="Banner Images" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Interactive
