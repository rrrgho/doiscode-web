import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import BoosterImage from '../../assets/images/services/booster.png'
import NeedsImage from '../../assets/images/services/needs.png'
import MaintenanceImage from '../../assets/images/services/maintanance.png'

const ServiceList = [
    {
        image: BoosterImage,
        title: 'Timeline Booster',
        description: 'We implement Agile working culture to achieve our timeline goals better'
    },
    {
        image: NeedsImage,
        title: 'One Stop Solution',
        description: "We cover all your Technology Needs. It's on our Hands"
    },
    {
        image: MaintenanceImage,
        title: 'Easy Maintenance',
        description: 'We work with well documentation and secure your confidential property'
    }
]
const ServiceThree = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper justify-content-around">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-5 mt-md-0" key={i}>
                    <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="image p-5 p-md-0">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                                <div className="content mt-5">
                                    <h4 className="title"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceThree;
