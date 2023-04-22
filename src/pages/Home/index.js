import React from 'react';
import SEO from "../../common/SEO";
import HeaderOne from '../../common/header/HeaderOne';
import Separator from "../../elements/separator/Separator";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import FooterTwo from '../../common/footer/FooterTwo';
import BrandOne from "../../elements/brand/BrandOne";
import Mission from "../../elements/about/Mission";
import BrandThree from "../../elements/brand/BrandThree";
import TimelineOne from "../../elements/timeline/TimelineOne";
import PricingTwo from "../../elements/pricing/PricingTwo";
import Banner from "../../components/organisms/Banner";
import Service from "../../components/organisms/Service";
import About from "../../components/organisms/About";
import Contact from "../../components/organisms/Contact";
import ContactUs from "../../components/organisms/Contact";
import FooterOne from "../../common/footer/FooterOne";
import BrandTwo from "../../elements/brand/BrandTwo";

const BannerData = [
    {
        image: "/images/app/banner1.jpg",
        title: "Transform Your Business with <br/> Expert IT Consulting Services",
        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
    },
]


const Home = () => {
    return (
        <>
            <SEO title="Doiscode | Tech Booster" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small btn-icon round" HeaderSTyle="header-transparent" />
                <Banner />
                <About />
                <Service />





                {/* Start Project Area */}
                <Separator />
                <div className="rwt-brand-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Awesome Project"
                                    title = "Our Awesome Project."
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <BrandTwo brandStyle="brand-style-1" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Project Area */}

                {/* Start Company Client Area */}
                <Separator />
                <div className="rwt-brand-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Reliable Programmers Joining Big Tech Company"
                                    title = "Where Our Team Member Work For"
                                    description = "Experiencing good culture of work at Big Tech Company makes <br/> our team better in handling variety of project"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <BrandThree brandStyle="brand-style-1" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Company Client Area */}



                <ContactUs />
            <FooterOne />
        </main>
        </>
    )
}

export default Home;
