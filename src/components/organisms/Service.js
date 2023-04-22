import React from "react";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import ServiceFour from "../../elements/service/ServiceFour";
import ServiceThree from "../../elements/service/ServiceThree";

const Service = () => {
    return (
        <div className="rn-service-area rn-section-gap" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            textAlign = "text-center"
                            radiusRounded = ""
                            subtitle = "We are Best"
                            title = "What makes us Best?"
                            description = ""
                        />
                    </div>
                </div>
                <ServiceThree
                    serviceStyle = "service__style--1 icon-circle-style with-working-process"
                    textAlign = "text-center"
                />
            </div>
        </div>
    )
}
export default Service
