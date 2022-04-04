import React, { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "./css/contactus.min.scss";
import { firestore } from "../../services/firebase";
import ContactBar from "../../components/ContactBar/ContactBar";

const ContactUs = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await firestore
      .collection("ContactUs")
      .add({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Subject: Subject,
        Message: Message,
        Timestamp: Date.now(),
      })
      .then(() => {
        toast.success("Thank You! We'll Get Back To You Soon", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Error! ", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

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
              <li class="breadcrumb-item active">Contact Us</li>
            </ol>
          </div>
        </div>
      </div>
      <section>
        <div class="block nocontactpadding">
          <div class="container">
            <div class="cnt-wrp">
              <div class="row">
                <div class="col-md-8 col-sm-12 col-lg-8">
                  <div
                    class="cnt-inr"
                    style={{
                      backgroundImage:
                        "url(../../assets/images/pattern-bg2.png)",
                    }}
                  >
                    <h2 itemprop="headline">
                      Hello,{" "}
                      <span class="thm-clr contactheadingsmall">
                        Feel free to let us know your thoughts
                      </span>
                    </h2>
                    <p itemprop="description"></p>
                    <form class="cnt-frm" onSubmit={handleSubmit} method="post">
                      <div class="row mrg10">
                        <div class="col-md-6 col-sm-6 col-lg-6">
                          <input
                            name="entry.1472963030"
                            type="text"
                            placeholder="First Name"
                            required
                            value={FirstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div class="col-md-6 col-sm-6 col-lg-6">
                          <input
                            name="entry.1753890476"
                            type="text"
                            placeholder="Last Name"
                            required
                            value={LastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                        <div class="col-md-12 col-sm-12 col-lg-12">
                          <input
                            name="entry.750465195"
                            type="email"
                            placeholder="Email Address"
                            required
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div class="col-md-12 col-sm-12 col-lg-12">
                          <input
                            name="entry.1475719518"
                            type="text"
                            placeholder="Subject"
                            required
                            value={Subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </div>
                        <div class="col-md-12 col-sm-12 col-lg-12">
                          <textarea
                            name="entry.582738885"
                            placeholder="Message"
                            required
                            value={Message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </div>
                        <div class="col-md-12 col-sm-12 col-lg-12">
                          <button class="thm-btn" type="submit">
                            Send Message<span></span>
                          </button>
                          <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <ContactBar></ContactBar>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
