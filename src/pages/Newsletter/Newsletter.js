import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import { NewsItems } from "../../data/Newsletter/NewsletterData";
import "./css/Newsletter.css";

const Newsletter = () => {
  return (
    <div>
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
              <li class="breadcrumb-item active">Newsletter</li>
            </ol>
          </div>
        </div>
      </div>
      <section>
        <div>
          <h1 style={{ textAlign: "center" }}>Our NewsLetter</h1>
          <div>
            {NewsItems.map((main) => (
              <div className="sectiondiv">
                <div className="colorwithstyle">
                  <a
                    className="mobx"
                    href={main.newlink}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    itemprop="url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1
                      className="xview"
                      style={{
                        paddingLeft: "2rem",
                        color: "white",
                        paddingTop: "1rem",
                      }}
                    >
                      {main.month}
                    </h1>
                    <h1
                      className="xview"
                      style={{
                        paddingRight: "2rem",
                        color: "white",
                        paddingTop: "1rem",
                      }}
                    >
                      {main.year}
                    </h1>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
