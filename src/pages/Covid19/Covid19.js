import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageHeader from "../../components/PageHeader/PageHeader";

const Covid19 = () => {
  return (
    <>
      <PageHeader></PageHeader>
      <div class="gray-bg3 brdcrmb-wrp">
        <div class="container">
          <div class="brdcrmb-inr flex justify-content-between">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="" title="" itemprop="url">
                  Home
                </Link>
              </li>
              <li class="breadcrumb-item active">Covid-19 Relief Project</li>
            </ol>
          </div>
        </div>
      </div>
      <section>
        <div className="block blockx" style={{ padding: "1rem" }}>
          <div className="container">
            <div className="abt-pg-wrp">
              <h2 itemprop="headline">Covid-19 Relief Project</h2>
              <div className="abt-pg-inr">
                <div className="row align-items-center">
                  <div className="col-md-7 col-sm-12 col-lg-7">
                    <div className="abt-pg-desc">
                      <p itemprop="description">
                        The <strong>COVID-19 Relief Project</strong> aims to
                        support the vulnerable families & make these settlements
                        free from COVID-19. We hereby request you extend your
                        full support for our team to execute the{" "}
                        <strong>COVID-19 Relief Project</strong> Phase 3 in the
                        6 settlements of South Zone. The duration of Phase 3
                        project is from 1st of May 2021 to 1st of August 2021.
                        Every small donation you make will help the vulnerable
                        families at this time of crisis:{" "}
                        <strong>
                          <a href="https://rzp.io/l/lbtcdonate4needy">Donate</a>
                        </strong>
                      </p>
                      <br />
                      <h2 itemprop="headline">About Project</h2>
                      <p className="thm-clr blc-wt">
                        We at LBTC have been working on ground for the past one
                        year supporting 500+ vulnerable families directly under
                        the ‘Covid19 Relief Project’ in ward 165 & ward 166
                        (South Zone). From April 2021, due to the rise of covid
                        cases, we are expanding our operations to 6 settlements
                        (10000+ households), namely:
                        <ul>
                          <li>
                            <strong>Ward 165:</strong> Raghavendra Colony – 85
                            households
                          </li>
                          <li>
                            <strong>Ward 165:</strong> Papaiah Garden – 300
                            households
                          </li>
                          <li>
                            <strong>Ward 165:</strong> Yellappa Garden – 500
                            households
                          </li>
                          <li>
                            <strong>Ward 166:</strong> AK Colony – 500
                            households
                          </li>
                          <li>
                            <strong>Ward 180:</strong> Yarab Nagar - 8000
                            Households
                          </li>
                          <li>
                            <strong>Ward 183:</strong> Kakatiya Nagar – 500
                            households
                          </li>
                          <li>
                            <strong>Ward 183:</strong> Sri Ramachandra Pura –
                            500 households
                          </li>
                        </ul>
                      </p>
                      <br />
                      <h2 itemprop="headline">Support System Provided</h2>

                      <p className="thm-clr blc-wt">
                        We will be supporting these settlements in the
                        following:
                        <ul>
                          <li>
                            Door to door survey:
                            <dd>- Understanding the community</dd>
                            <dd>- Identifying high-risk population</dd>
                          </li>
                          <li>
                            Covid19 & Vaccination Awareness:
                            <dd>- Door to door</dd>
                            <dd>- Mic announcements</dd>
                            <dd>- Street plays</dd>
                          </li>
                          <li>Free Covid19 testing</li>
                          <li>Free Vaccination drives</li>
                          <li>
                            Connecting vulnerable families with Govt PHC & BBMP
                            Officials
                            <dd>
                              - For regular free check-up & medicines from PHC
                            </dd>
                            <dd>
                              - For understanding & registering under Govt
                              Schemes & Policies
                            </dd>
                          </li>
                          <li>
                            Provide <strong>EMERGENCY</strong> support:
                            <dd>- Oxygen Concentrators & cylinder support</dd>
                            <dd>- Ambulance support</dd>
                            <dd>- Financial support for treatment</dd>
                            <dd>
                              - Distribution of Hygiene, Ration & Covid Care
                              Kits
                            </dd>
                          </li>
                          <li>
                            <strong>Staff/Volunteers & Materials</strong>{" "}
                            support for Govt PHCs, namely:
                            <dd>- Ward 167 - Yediyur PHC</dd>
                            <dd>- Ward 165 - Banashankari PHC</dd>
                            <dd>- Ward 183 - Chikkalasandra PHC</dd>
                            <dd>- Ward 184 - Uttarahalli PHC</dd>
                            <dd>- Ward 180 – Yarab Nagar PHC</dd>
                            <dd>- Ward 161 – Hosakerehalli PHC</dd>
                          </li>
                        </ul>
                      </p>
                      <br />
                      <h2 itemprop="headline">Our Team</h2>
                      <p className="thm-clr blc-wt">
                        <ul>
                          <li>2 Project Managers</li>
                          <li>7 Health Care Workers</li>
                          <li>11 Interns</li>
                          <li>10 Community leaders</li>
                          <li>1 Doctor on call (24/7)</li>
                          <li>10 Street Play Trainers & Artists</li>
                          <li>10 Weekend Volunteers</li>
                        </ul>
                      </p>
                      <br />
                      <br />
                      <img
                        src={require("./images/TeamLBTC.png").default}
                        alt="WhoAreWe.jpg"
                        itemprop="image"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12 col-lg-5">
                    <div className="abt-pg-imgs">
                      <img
                        src={require("./images/D2.jpg").default}
                        alt="WhatDoWeDo.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("./images/D3.jpg").default}
                        alt="WhatDoWeDo.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("./images/D1.jpg").default}
                        alt="WhatDoWeDo.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("./images/D5.jpg").default}
                        alt="WhatDoWeDo.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("./images/D4.jpg").default}
                        alt="abt-pg-img1-2.jpg"
                        itemprop="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ImageCarousel></ImageCarousel>
    </>
  );
};

export default Covid19;
