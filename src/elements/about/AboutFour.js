import React from 'react';
import VideoTwo from '../video/VideoTwo';
import { FiCheck } from "react-icons/fi";
import ImageAbout from '../../assets/images/about/about.png'


const PopupData = [
    {
        id: "01",
        image: ImageAbout,
        popupLink: [
            'https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes',
        ],
    }
]

const AboutFour = ({image}) => {
    return (
        <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-6">
                        {PopupData.map((item) => (
                            <div className="video-btn" key={item.id}>
                                <VideoTwo imagename={`${item.image}`} galleryItem={item} />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title">Doiscode specializes in <br /> providing <strong>IT Solutions.</strong></h3>
                                <ul className="feature-list">
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Legal and Registered</h4>
                                            <p className="text">Our business is registered and recognized with a license number <strong> 55223421344 </strong> by Doiscode Technology.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FiCheck />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Reliable and Sustainable Company</h4>
                                            <p className="text">Leading provider of IT solutions, Transforming technology challenges into business solutions.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="about-btn mt--30">
                                    <a className="btn-default" href="#">About Our Doob</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour
