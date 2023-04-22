import React from 'react'
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import TabOne from "../../elements/tab/TabOne";

const About = () => {
    return (
    <div className="rwt-tab-area rn-section-gap" id="about-us">
        <div className="container">
            <div className="row mb--40">
                <div className="col-lg-12">
                    <SectionTitle
                        textAlign = "text-center"
                        radiusRounded = ""
                        subtitle = "Companies About."
                        title = "What About Our Companies."
                        description = "Partner with us for innovative IT solutions that drive your success."
                    />
                </div>
            </div>
            <TabOne />
        </div>
    </div>
    )
}
export default About
