/** @format */

import React from "react";
import Service from "./_component/Service";
import About from "./_component/About";
import Profile from "./_component/Profile";
import Banner from "./_component/Banner";

const HomePage = async () => {
  return (
    <>
      <Banner />
      <Service />
      <About />
      <Profile />
    </>
  );
};

export default HomePage;
