import React from "react";
import { ProjectItems } from "./ProjectItems";

const CurrentProjects = () => {
  return (
    <div className="App">
      <section>
        <div className="sec-ttl v2 text-center">
          <div className="sec-ttl-inr">
            <h2 itemprop="headline">Our Current Projects</h2>
          </div>
        </div>
        <div className="block remove-gap">
          <div className="container">
            <div className="cus-wrp style3 text-center remove-ext9">
              <div className="row">
                {ProjectItems.map((index) => {
                  return (
                    <div className="col-md-3 col-sm-6 col-lg-3">
                      <div className="cus-bx3">
                        <div className="cus-thmb">
                          <a
                            href={index.dlink}
                            title=""
                            itemprop="url"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={index.image}
                              alt="Fund-1.jpg"
                              itemprop="image"
                            />
                          </a>
                        </div>
                        <div className="cus-inf3">
                          <h4 itemprop="headline">
                            <a
                              href={index.dlink}
                              title=""
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {index.heading}
                            </a>
                          </h4>
                          <span className="cus-amt"></span>
                          <div className="progress">
                            <div className={index.widthbar}>
                              <span>{index.value}</span>
                            </div>
                          </div>
                          <a
                            className="thm-btn"
                            href={index.dlink}
                            title=""
                            itemprop="url"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            Donate Now<span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentProjects;
