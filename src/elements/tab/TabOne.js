import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AboutImage from '../../assets/images/about/about.png'

const TabOne = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <div className="row row--30 align-items-center">
                                <div className="col-lg-5">
                                    <img className="radius-small" src={AboutImage} alt="Corporate React Template" />
                                </div>
                                <div className="col-lg-7 mt_md--40 mt_sm--40">
                                    <div className="rn-default-tab">
                                        <div className="tab-button-panel">
                                            <TabList className="tab-button">
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>About</button>
                                                    </div>
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Vission</button>
                                                    </div>
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Mission</button>
                                                    </div>
                                                </Tab>
                                            </TabList>
                                        </div>

                                        <div className="tab-content-panel">
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <p>
                                                            DOISCODE is an IT Consultant company, registered under Indonesian Government. <br/>
                                                            Our office is addressed in <b> RUKAN PURI MUTIARA JL. GRIYA UTAMA, JAKARTA UTARA 14350 </b>
                                                        </p>
                                                        <p>
                                                            Our team of professionals brings years of experience and expertise to every project we undertake.
                                                        </p>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <p>
                                                            As an IT consultant company, our vision is to be the leading provider of innovative and reliable technology solutions to businesses of all sizes.
                                                        </p>
                                                        <p>
                                                            We strive to empower organizations to leverage the full potential of technology to achieve their goals,
                                                            enhance their operations, and grow their businesses.
                                                        </p>


                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <p>
                                                            Our mission as an IT consultant company is to provide our clients with the highest quality technology solutions and services,
                                                            delivered with the utmost professionalism and excellence.
                                                        </p>
                                                        <p>
                                                            We are committed to understanding our clients' unique needs and challenges, and leveraging our expertise and experience to develop
                                                            tailored solutions that drive measurable results.
                                                        </p>


                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
        </div>
    )
}

export default TabOne
