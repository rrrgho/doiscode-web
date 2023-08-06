import React from "react";
import SEO from "../../common/SEO";
import HeaderOne from "../../common/header/HeaderOne";
import Banner from "../../components/organisms/Banner";
import Service from "../../components/organisms/Service";
import About from "../../components/organisms/About";
import FooterOne from "../../common/footer/FooterOne";
import Interactive from "../../components/organisms/Interactive";
import Projects from "../../components/organisms/Projects";
import LastGreetings from "../../components/organisms/LastGreetings";
import CompanyPartner from "../../components/organisms/CompanyPartner";

const BannerData = [
  {
    image: "/images/app/banner1.jpg",
    title: "Transform Your Business with <br/> Expert IT Consulting Services",
    description:
      "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials.",
  },
];

const Home = () => {
  return (
    <>
      <SEO title="Doiscode | Tech Booster" />
      <main className="page-wrapper">
        <HeaderOne
          btnStyle="btn-small btn-icon round"
          HeaderSTyle="header-transparent"
        />
        <Banner />
        <About />
        <Service />
        <Interactive />
        <Projects />
        <CompanyPartner />
        <LastGreetings />
        <FooterOne />
      </main>
    </>
  );
};

export default Home;
