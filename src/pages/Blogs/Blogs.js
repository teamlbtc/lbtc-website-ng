import React from "react";
import { Link } from "react-router-dom";
import "./css/blog.min.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import { BlogData } from "../../data/Blog/BlogData";

const Blogs = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <li class="breadcrumb-item active">Blog</li>
            </ol>
          </div>
        </div>
      </div>
      <section>
        <section>
          <div className="block blockx" style={{ padding: "1rem" }}>
            <div className="container">
              <div className="abt-pg-wrp">
                <h2 itemprop="headline">Blog</h2>
              </div>
            </div>
          </div>
        </section>
        <div class="block">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-12 col-lg-8">
                <div class="blg-wrp style4 remove-ext6">
                  {/**starts here */}

                  {BlogData.map((data) => {
                    return (
                      <div class="blg-bx lst">
                        <div class="blg-thmb">
                          <Link to={"/blog/" + data.mainid}>
                            <img
                              src={data.blogimage}
                              alt="Blog-2"
                              itemprop="image"
                            />
                          </Link>
                        </div>
                        <div class="blg-inf">
                          <span class="blg-dat thm-bg">
                            <a href="#top" title="" itemprop="url">
                              {data.blogdate}
                            </a>
                          </span>
                          <span class="blg-tgs">
                            <i class="fa fa-tag"></i>

                            {data.blogtags.map((tags, index) => {
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
                          <h4 itemprop="headline">
                            <Link to={"/blog/" + data.mainid}>
                              {data.blogtitle}
                            </Link>
                          </h4>
                          <ul class="pst-mta">
                            <li>
                              <i class="fa fa-user thm-clr"></i>
                              <a href="#top" title="" itemprop="url">
                                {data.blogauthor}
                              </a>
                            </li>
                            <li>
                              <i class="fa fa-comments thm-clr"></i>
                              {data.blogComments}
                            </li>
                          </ul>
                          <p itemprop="description">{data.blogdesc}</p>
                        </div>
                      </div>
                    );
                  })}

                  {/**ends here */}
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-lg-4">
                <aside class="sdbr-wrp">
                  <div class="wdgt-bx v2">
                    <h4 itemprop="headline">Recent Posts</h4>
                    <div class="mini-pst-wrp">
                      <div class="mini-pst">
                        <div class="mini-pst-thmb">
                          <Link to="/blog/blog-1">
                            <img
                              src={
                                require("../../data/Blog/Images/BlogImage/8.jpg")
                                  .default
                              }
                              alt="SideBar-1"
                              itemprop="image"
                            />
                          </Link>
                        </div>
                        <div class="mini-pst-inf">
                          <span>
                            <a href="#top" title="" itemprop="url">
                              May 13, 2019
                            </a>
                          </span>
                          <h6 itemprop="headline">
                            <Link to="/blog/blog-1">Jauntful Intership!</Link>
                          </h6>
                        </div>
                      </div>
                      <div class="mini-pst">
                        <div class="mini-pst-thmb">
                          <Link to="/blog/blog-2">
                            <img
                              src={
                                require("../../data/Blog/Images/BlogImage/7.jpg")
                                  .default
                              }
                              alt="Sidebar-2"
                              itemprop="image"
                            />
                          </Link>
                        </div>
                        <div class="mini-pst-inf">
                          <span>
                            <a href="#top" title="" itemprop="url">
                              February 25, 2019
                            </a>
                          </span>
                          <h6 itemprop="headline">
                            <Link to="/blog/blog-2">
                              Cleanathon: What, Why & How
                            </Link>
                          </h6>
                        </div>
                      </div>
                      <div class="mini-pst">
                        <div class="mini-pst-thmb">
                          <Link to="/blog/blog-3">
                            <img
                              src={
                                require("../../data/Blog/Images/BlogImage/6.jpg")
                                  .default
                              }
                              alt="Sidebar-3"
                              itemprop="image"
                            />
                          </Link>
                        </div>
                        <div class="mini-pst-inf">
                          <span>
                            <Link to="/blog/blog-3">February 25, 2019</Link>
                          </span>
                          <h6 itemprop="headline">
                            <a
                              href="blog-detail-no-sidebar.html"
                              title=""
                              itemprop="url"
                            >
                              Restorative Practices for Schools
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="wdgt-bx v2">
                    <h4 itemprop="headline">Useful Links</h4>
                    <ul>
                      <li>
                        <Link to="">Home</Link>
                      </li>

                      <li>
                        <Link to="/about">About</Link>
                      </li>

                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>

                      <li>
                        <Link to="/events">Events</Link>
                      </li>

                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>

                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                    </ul>
                  </div>

                  <div class="wdgt-bx v2 nws-ltr-wdgt">
                    <form class="nwsltr-frm3 thm-bg text-center">
                      <h4 itemprop="headline">
                        Subscribe Now to Get Daily Updates.
                      </h4>
                      <input type="email" placeholder="Enter your Email here" />
                      <button class="thm-btn" type="submit">
                        <i class="fa fa-envelope-o"></i>Subscribe Now
                        <span></span>
                      </button>
                    </form>
                  </div>
                  <div class="wdgt-bx v2">
                    <h4 itemprop="headline">Instagram</h4>
                    <ul class="insta-gal">
                      <li>
                        <a href="#top" title="" itemprop="url">
                          <img
                            src={
                              require("../../data/Blog/Images/Insta/P1.jpg")
                                .default
                            }
                            alt="insta-img1-1.jpg"
                            itemprop="image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#top" title="" itemprop="url">
                          <img
                            src={
                              require("../../data/Blog/Images/Insta/P2.jpg")
                                .default
                            }
                            alt="insta-img1-2.jpg"
                            itemprop="image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#top" title="" itemprop="url">
                          <img
                            src={
                              require("../../data/Blog/Images/Insta/P3.jpg")
                                .default
                            }
                            alt="insta-img1-3.jpg"
                            itemprop="image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#top" title="" itemprop="url">
                          <img
                            src={
                              require("../../data/Blog/Images/Insta/P4.jpg")
                                .default
                            }
                            alt="insta-img1-4.jpg"
                            itemprop="image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#top" title="" itemprop="url">
                          <img
                            src={
                              require("../../data/Blog/Images/Insta/P5.jpg")
                                .default
                            }
                            alt="insta-img1-5.jpg"
                            itemprop="image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#top" title="" itemprop="url">
                          <img
                            src={
                              require("../../data/Blog/Images/Insta/P6.jpg")
                                .default
                            }
                            alt="insta-img1-6.jpg"
                            itemprop="image"
                          />
                        </a>
                      </li>
                    </ul>
                    <div class="insta-gal-inf">
                      <div class="insta-gal-inf-inr">
                        <span>Instagram</span>
                        <h5 itemprop="headline">@team_lbtc</h5>
                      </div>
                      <a
                        class="thm-btn"
                        href="https://instagram.com/team_lbtc"
                        title=""
                        itemprop="url"
                      >
                        Follow Us<span></span>
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
