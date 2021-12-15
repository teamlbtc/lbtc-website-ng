import React from "react";

const PageHeader = () => {
  return (
    <section>
      <div class="block no-padding aboutpaddingnotreqd">
        <div class="pg-tp-bg">
          <img
            src={require("./AboutUs-Main-3.jpg").default}
            alt="Main-Background.jpg"
            itemprop="image"
          />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
