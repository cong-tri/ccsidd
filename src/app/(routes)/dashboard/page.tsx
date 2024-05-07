/** @format */

import React from "react";
import Services from "./_component/Services";
import About from "./_component/About";
import Profile from "./_component/Profile";
import Banner from "./_component/Banner";

const HomePage = async () => {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Profile />
    </>
  );
};

export default HomePage;
