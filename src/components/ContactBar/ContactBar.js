import React from "react";

const ContactBar = () => {
  return (
    <div class="col-md-4 col-sm-12 col-lg-4 contactblueboxpadding">
      <div class="cnt-inf thm-layer opc9 ">
        <div
          class="fixed-bg patern-bg thm-bg back-blend-multiply"
          style={{
            backgroundImage: "url(../../assets/images/pattern-bg1.jpg",
          }}
        ></div>
        <p itemprop="description">
          <span>
            <i className="fa fa-home"></i>{" "}
          </span>
          <a
            href="https://g.page/TeamLBTC?share"
            onMouseOver="this.style.color='#00C664'"
          >
            <strong>Main : </strong>No. 1062, 15th Cross Rd, 25th Main Rd, BSK
            II Stage, Bengaluru-70
          </a>
        </p>
        <br></br>
        <p itemprop="description">
          <span>
            <i className="fa fa-home"></i>{" "}
          </span>
          <a
            href="https://goo.gl/maps/sXVsq5UMMNBDrWnr6"
            onMouseOver="this.style.color='#00C664'"
          >
            <strong>Ittamadu Branch : </strong>95, 3nd, Main Rd, Anjaneya Nagar,
            Ittamadu, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka
            560085
          </a>
        </p>
        <ul class="cnt-inf-lst">
          <li>
            <span>
              <i className="fa fa-envelope"></i>
            </span>
            <a
              className="mailfontsmall"
              href="mailto:contact@letsbethechange.in"
              title=""
              itemprop="url"
            >
              contact@letsbethechange.in
            </a>
          </li>
          <li>
            <span>
              <i className="fa fa-phone"></i>
            </span>
            <a href="tel:+919353218818">+91 93532 18818</a>
          </li>
        </ul>
        <div class="cnt-scl">
          <a
            class="instagram"
            href="https://www.instagram.com/team_lbtc/"
            title="Instagram"
            itemprop="url"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            <i class="fa fa-instagram"></i>
          </a>
          <a
            class="facebook"
            href="https://www.facebook.com/TeamLBTC/"
            title="Facebook"
            itemprop="url"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            <i class="fa fa-facebook"></i>
          </a>
          <a
            class="twitter"
            href="https://twitter.com/TeamLBTC"
            title="Twitter"
            itemprop="url"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            <i class="fa fa-twitter"></i>
          </a>
        </div>
      </div>
      <div class="cnt-mp" id="cnt-mp"></div>
    </div>
  );
};

export default ContactBar;
