/** @format */
import React from "react";
import ItemsServices from "./_components/ItemsServices";
import styleService from "./_css/services.module.scss";
const ServicesPage = () => {
  return (
    <>
      <section id={styleService.services}>
        <ItemsServices />
      </section>
    </>
  );
};

export default ServicesPage;
