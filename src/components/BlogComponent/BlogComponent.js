/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";
import { BlogData } from "../../data/Blog/BlogData";

const BlogComponent = (props) => {
  const result = BlogData.find(
    ({ mainid }) => mainid === parseInt(props.match.params.id)
  );

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
              <li class="breadcrumb-item">
                <Link to="/blog" title="" itemprop="url">
                  Blog
                </Link>
              </li>
              <li class="breadcrumb-item active">{result.blogtitle}</li>
            </ol>
          </div>
        </div>
      </div>
      <section>
        <div class="block">
          <div class="container">
            <div class="blg-dtl-thmb">
              <img
                src={result.blogimage}
                alt="blg-dtl-img2-1.jpg"
                itemprop="image"
              />
            </div>
            <div class="blog-dtl-wrp">
              <div class="blg-inf">
                <span class="blg-dat thm-bg">
                  <a href="#" title="" itemprop="url">
                    {result.blogdate}
                  </a>
                </span>
                <span class="blg-tgs">
                  <i class="fa fa-tag"></i>
                  {result.blogtags.map((tags, index) => {
                    return (
                      <>
                        <a href="#top" key={index} itemprop="url">
                          {tags}
                        </a>
                        ,
                      </>
                    );
                  })}
                </span>
                <h1 itemprop="headline">{result.blogtitle}</h1>
                <ul class="pst-mta">
                  <li>
                    <i class="fa fa-user thm-clr"></i>
                    <a href="#" title="" itemprop="url">
                      {result.blogauthor}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="blg-dtl-desc">
                {result.blogdata.map((data, index) => {
                  return (
                    <>
                      <p itemprop="description" key={index}>
                        {data}
                      </p>
                    </>
                  );
                })}
                <br />
                <div class="gallery">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-lg-12"></div>
                  </div>
                </div>
              </div>
              <div class="athr-bx">
                <img
                  src={result.authorimage}
                  alt="athr-img1-1.jpg"
                  itemprop="image"
                />
                <div class="athr-inf">
                  <h4 itemprop="headline">About Author</h4>
                  <p itemprop="description">{result.aboutauthor}</p>
                  <div class="athr-scl">
                    <a
                      class="facebook"
                      href="https://www.facebook.com/teamlbtc"
                      title="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-facebook"></i>
                    </a>

                    <a
                      class="instagram"
                      href="https://www.instagram.com/team_lbtc/"
                      title="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-instagram"></i>
                    </a>

                    <a
                      class="twitter"
                      href="https://www.twitter.com/TeamLBTC"
                      title="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div class="cmt-wrp">
                <h4 itemprop="headline">Comments</h4>
                <br />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(BlogComponent);
