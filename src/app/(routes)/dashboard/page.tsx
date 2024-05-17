/** @format */

import React from "react";
import Service from "./_components/Service";
import About from "./_components/About";
import Profile from "./_components/Profile";
import Banner from "./_components/Banner";

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
