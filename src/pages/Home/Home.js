import React from "react";
import AboutUs from "../../components/HpComponents/AboutUs/AboutUs";
import CurrentProjects from "../../components/HpComponents/CurrentProjects/CurrentProjects";
import HeroMain from "../../components/HpComponents/HeroMain/HeroMain";
import BlogView from "../../components/HpComponents/BlogView/BlogView";
import { TiyIndia } from "../../components/HpComponents/TIYIndia/TiyIndia";
import Activities from "../../components/HpComponents/Activities/Activities";

const Home = () => {
  return (
    <div>
      <HeroMain></HeroMain>
      <AboutUs></AboutUs>
      <CurrentProjects></CurrentProjects>
      <TiyIndia></TiyIndia>
      <Activities></Activities>
      <BlogView></BlogView>
    </div>
  );
};

export default Home;
