import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./css/gallery.min.scss";
import "../Blogs/css/blog.min.scss";
// import ImageGrid from "....components/GalleryComps/ImageGrid";
// import Modal from "....components/GalleryComps/Modal";
// import XProgressBar from "....components/GalleryComps/ProgressBar";
// import UploadForm from "....components/GalleryComps/UploadForm";

const Gallery = () => {
  // const [selectedImg, setSelectedImg] = useState(null);
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
              <li class="breadcrumb-item active">Gallery</li>
            </ol>
          </div>
        </div>
      </div>
      <section>
        <div className="block blockx" style={{ padding: "1rem" }}>
          <div className="container">
            <div className="abt-pg-wrp">
              <h2 itemprop="headline">Gallery</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="block">
          <div class="container">
            <div class="gal-wrp text-center remove-ext1">
              <div class="row mrg20">
                <div class="col-md-6 col-sm-12 col-lg-6">
                  <div class="row mrg20">
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <div class="gal-itm">
                        <img
                          src={require("./Images/gallery1page/1.jpg").default}
                          alt="gal-img2-1.jpg"
                          itemprop="image"
                        />
                        <h4 itemprop="headline">
                          Covid Relief
                          <br /> Project
                        </h4>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <div class="gal-itm mini-gal">
                        <img
                          src={require("./Images/gallery1page/8.jpg").default}
                          alt="gal-img2-2.jpg"
                          itemprop="image"
                        />
                        <h4 itemprop="headline">Cleanathon</h4>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <div class="gal-itm mini-gal">
                        <img
                          src={require("./Images/gallery1page/7.jpg").default}
                          alt="gal-img2-3.jpg"
                          itemprop="image"
                        />
                        <h4 itemprop="headline">
                          Kids <br /> Engagement
                        </h4>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <div class="gal-itm">
                        <img
                          src={require("./Images/gallery1page/4.jpg").default}
                          alt="gal-img2-4.jpg"
                          itemprop="image"
                        />
                        <h4 itemprop="headline">Surveying</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 col-lg-6">
                  <div class="gal-itm">
                    <img
                      src={require("./Images/gallery1page/1L.jpg").default}
                      alt="gal-img2-5.jpg"
                      itemprop="image"
                    />
                    <h4 itemprop="headline">Covid Relief Project</h4>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 col-lg-6">
                  <div class="row mrg20">
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <div class="gal-itm">
                        <img
                          src={require("./Images/gallery1page/3.jpg").default}
                          alt="gal-img2-6.jpg"
                          itemprop="image"
                        />
                        <h4 itemprop="headline">Cleanathon</h4>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <div class="gal-itm mini-gal">
                        <img
                          src={require("./Images/gallery1page/9.jpg").default}
                          alt="gal-img2-7.jpg"
                          itemprop="image"
                        />
                        <h4 itemprop="headline">Street Play</h4>
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-12">
                      <div class="gal-itm">
                        <img
                          src={require("./Images/gallery1page/2L.jpg").default}
                          alt="gal-img2-8.jpg"
                          itemprop="image"
                        />
                        <h4 itemprop="headline">Community Interaction</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 col-lg-6">
                  <div class="row mrg20">
                    <div class="col-md-12 col-sm-12 col-lg-12">
                      <div class="gal-itm">
                        <img
                          src={require("./Images/gallery1page/4L.jpg").default}
                          alt="gal-img2-9.jpg"
                          itemprop="image"
                        />
                        <h4 itemprop="headline">Waste Management Workshop</h4>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <div class="gal-itm">
                        <img
                          src={require("./Images/gallery1page/10.jpg").default}
                          alt="gal-img2-10.jpg"
                          itemprop="image"
                        />
                        <h4 itemprop="headline">Awareness Session</h4>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <div class="gal-itm mini-gal">
                        <img
                          src={require("./Images/gallery1page/11.jpg").default}
                          alt="gal-img2-11.jpg"
                          itemprop="image"
                        />
                        <h4 itemprop="headline">Covid Relief Team</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pgntin-wrp">
              <ul class="pagination">
                <li class="page-item">
                  <Link
                    to="/gallery-3"
                    class="page-link next"
                    title=""
                    itemprop="url"
                  >
                    <i class="fa fa-angle-left"></i>
                  </Link>
                </li>
                <li class="page-item active">
                  <span class="page-link">1</span>
                </li>
                <li class="page-item">
                  <Link
                    to="/gallery-1"
                    class="page-link"
                    style={{ color: "#1b6dae" }}
                  >
                    2
                  </Link>
                </li>
                <li class="page-item">
                  <Link
                    to="/gallery-2"
                    class="page-link"
                    style={{ color: "#1b6dae" }}
                  >
                    3
                  </Link>
                </li>
                <li class="page-item">
                  <Link
                    to="/gallery-3"
                    class="page-link"
                    style={{ color: "#1b6dae" }}
                  >
                    4
                  </Link>
                </li>
                <li class="page-item">
                  <Link
                    to="/gallery-1"
                    class="page-link next"
                    href="#top"
                    title=""
                    itemprop="url"
                  >
                    <i class="fa fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
