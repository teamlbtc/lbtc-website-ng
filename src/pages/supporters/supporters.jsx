import React from "react";
// import "./support.min.scss";
import { Link } from "react-router-dom";
import { Cpartners } from "./cpartners";
import "./support.css";
import PageHeader from "../../components/PageHeader/PageHeader";

const Supporters = () => {
  return (
    <div className="App">
      <main>
        <PageHeader></PageHeader>
        <section>
          <div class="gray-bg3 brdcrmb-wrp">
            <div class="container">
              <div class="brdcrmb-inr flex justify-content-between">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="" title="" itemprop="url">
                      Home
                    </Link>
                  </li>
                  <li class="breadcrumb-item active">Supporters</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="sectionxx">
            <h1 style={{ marginBottom: "15px" }}>Key Supporters:</h1>
            <div class="sep">
              <img
                src={require("./cpartners/key.png").default}
                class="new"
                alt="img"
              ></img>
            </div>
          </div>

          <div class="dex">
            <h1 style={{ marginBottom: "55px" }}>Corporate Partners:</h1>
            <div class="sep">
              <div class="grid">
                {Cpartners.map((index) => (
                  <div>
                    <a
                      href={index.anchor}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={index.image} class={index.clss} alt="img"></img>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div class="sectionxx">
            <h1>Worked With:</h1>
            <div class="gridcontainer">
              <img
                src={require("./cpartners/SuppPage/65.png").default}
                alt="images"
              ></img>
              <img
                src={require("./cpartners/SuppPage/7.png").default}
                alt="images"
              ></img>
              <img
                src={require("./cpartners/SuppPage/8.png").default}
                alt="images"
              ></img>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Supporters;
