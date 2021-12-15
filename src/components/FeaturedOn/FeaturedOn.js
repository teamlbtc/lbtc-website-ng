import React from "react";
import "./css/featuredon.min.scss";

const FaeaturedOnX = () => {
  return (
    <div className="block">
      <div className="container">
        <div className="sec-ttl text-center">
          <div className="sec-ttl-inr">
            <h2 className="smolfontsize" itemprop="headline">
              <strong>We are featured on</strong>
            </h2>
            {/* <span>Our Main Team</span> */}
            <i className="flaticon-sweat thm-clr"></i>
          </div>
        </div>
        <div className="orgn-bx2 text-center reduceimgsize">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-lg-4">
              <a
                href="https://yourstory.com/2017/11/lets-be-the-change-anirudh-dutt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./images/lbtc-your-story.png").default}
                  alt="org-img2-1.png"
                  itemprop="image"
                />
              </a>

              <a
                href="https://www.guinnessworldrecords.com/world-records/541225-most-plastic-bottles-collected-for-recycling-in-12-hours"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./images/lbtc-kannada-prabha-logo.png").default}
                  alt="org-img2-1.png"
                  itemprop="image"
                />
              </a>
              <img
                src={require("./images/lbtc-vijay-karnataka.png").default}
                alt="org-img2-1.png"
                itemprop="image"
              />
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4">
              <a
                href="https://www.thebetterindia.com/122751/swarathma-music-streets-ngo-clean-bengaluru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./images/lbtc-better-india-logo.png").default}
                  alt="org-img2-1.png"
                  itemprop="image"
                />
              </a>
              <img
                src={
                  require("./images/lbtc-bengalore-chronicles-logo.png").default
                }
                alt="org-img2-1.png"
                itemprop="image"
              />
              <img
                src={require("./images/lbtc-prajavani-logo.png").default}
                alt="org-img2-1.png"
                itemprop="image"
              />
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4">
              <a
                href="https://timesofindia.indiatimes.com/city/bengaluru/swarathma-leads-from-the-front-at-a-musical-cleanathon/articleshow/60461315.cms?from=mdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./images/lbtc-toi-logo.png").default}
                  alt="org-img2-1.png"
                  itemprop="image"
                />
              </a>
              <img
                src={require("./images/lbtc-Udayavani-Logo-Dark.png").default}
                alt="org-img2-1.png"
                itemprop="image"
              />
              <a
                href="https://www.unsungpeople.org/featured/cleaning-a-city-anirudh-dutt-lets-be-the-change"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./images/lbtc-unsung-logo.png").default}
                  alt="org-img2-1.png"
                  itemprop="image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaeaturedOnX;
