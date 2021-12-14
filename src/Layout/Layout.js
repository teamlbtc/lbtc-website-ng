import React from "react";
import FooterMain from "../components/FooterMain/FooterMain";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import MenuMob from "../components/MenuBar/MenuMob";
import MenuWeb from "../components/MenuBar/MenuWeb";
import StickyHeader from "../components/StickyHeader/StickyHeader";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <HeaderBar></HeaderBar>
        <MenuWeb></MenuWeb>
        <StickyHeader></StickyHeader>
        <MenuMob></MenuMob>
      </div>
      <main>{children}</main>
      <div>
        <FooterMain></FooterMain>
      </div>
    </>
  );
};

export default Layout;
