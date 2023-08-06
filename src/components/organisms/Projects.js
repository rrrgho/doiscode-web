import React from 'react';
import BrandThree from "../../elements/brand/BrandThree";

const Projects = () => {
    return (
    <div className="p-3 p-md-0">
        <div className="service-area rn-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content">
                            <h3 className="title">Your reliable partner in trusted IT solutions.</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className="mb--10">
                            Our experience includes developing custom software solutions, providing technical support, and managing large-scale projects for big-tech companies.
                            We pride ourselves on delivering high-quality work that meets and exceeds our clients' expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>



        <div className="rwt-brand-area pb--60 pt--30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt--10">
                        <BrandThree brandStyle="brand-style-2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects
