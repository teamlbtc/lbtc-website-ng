import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import { NewsItems } from "../../data/Newsletter/NewsletterData";
import { Card, Dropdown, Button } from "react-bootstrap";
import "./css/Newsletter.css";

const Newsletter = () => {
  const [yearSelect, setYearSelect] = useState("2022");
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
          <div className="sectiondiv">
            <Card>
              <Card.Header>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    {yearSelect}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setYearSelect("2021");
                      }}
                    >
                      2021
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setYearSelect("2022");
                      }}
                    >
                      2022
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Header>
              <Card.Body>
                {NewsItems.map((main) =>
                  main.year === yearSelect ? (
                    <Card border="primary" style={{ margin: "1rem" }}>
                      <Card.Body>
                        <Card.Title>
                          <h1>{main.year}</h1>
                        </Card.Title>
                        <Card.Text>
                          <h3>{main.month}</h3>
                        </Card.Text>
                        <Button
                          variant="primary"
                          href={main.newlink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Check it Out!
                        </Button>
                      </Card.Body>
                    </Card>
                  ) : (
                    ""
                  )
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
