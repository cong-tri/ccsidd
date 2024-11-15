/** @format */

import React from "react";
import About from "./_components/About";
import Profile from "./_components/Profile";
import Banner from "./_components/Banner";
import ContactPage from "../_contact/page";
import Resources from "../_resources/page";
import ServicesPage from "../_services/page";

const HomePage = async () => {
  return (
    <>
      <Banner />
      <ServicesPage />
      <About />
      <Profile />
      <ContactPage />
      <Resources />
    </>
  );
};

export default HomePage;
