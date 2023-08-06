import React from "react";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import ImageClientUP from "../../assets/images/clients/unitedplantation.jpeg";
import ImageClientPln from "../../assets/images/clients/plnip.jpeg";

const CompanyPartner = () => {
  return (
    <>
      <div className="rwt-about-area rn-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                textAlign="text-center"
                radiusRounded=""
                subtitle="We are Best"
                title="Our clients are around the world"
                description=""
              />
            </div>
          </div>

          <div className="row row--30 align-items-center mt--10">
            <div className="col-lg-5">
              <div className="thumbnail">
                <img className="w-100" src={ImageClientUP} alt="About Images" />
              </div>
            </div>

            <div className="col-lg-7 mt_md--40 mt_sm--40">
              <div className="content">
                <div className="section-title">
                  <h2 className="title">
                    United Plantation Berhads <br />{" "}
                    <span className="theme-gradient">of Malaysia</span>
                  </h2>
                  <p>
                    United Plantations’ story is about shared heritage founded
                    on Danish and Malaysian expertise and resources. From a
                    modest beginning in 1906, United Plantations Berhad (UP)
                    has, over the years, grown in size and stature to emerge as
                    one of the larger plantation groups in Malaysia.
                  </p>
                  <p>
                    Doisoce Technology helps to enpower their company managment
                    systems in order to be more efficient in plantation group
                    Industries. With "Seed Production Integrated System" by
                    Doiscode, everything comes digitally and much more
                    efficient.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row--30 align-items-center mt--10">
            <div className="col-lg-5">
              <div className="thumbnail">
                <img
                  className="w-100"
                  src={ImageClientPln}
                  alt="About Images"
                />
              </div>
            </div>

            <div className="col-lg-7 mt_md--40 mt_sm--40">
              <div className="content">
                <div className="section-title">
                  <h2 className="title">
                    Indonesia Power <br />{" "}
                    <span className="theme-gradient">of PLN</span>
                  </h2>
                  <p>
                    PLN is Leading Electricity Company in Southeast Asia and # 1
                    Customer Choice for Energy Solutions.
                  </p>
                  <p>
                    We help PLN Indonesia Power to build their working flow
                    system become modern and digital, with Web and Mobile app
                    makes everything in PLN runs efficient and much faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyPartner;
