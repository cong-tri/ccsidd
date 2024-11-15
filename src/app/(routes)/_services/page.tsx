/** @format */
import React from "react";

import ItemsServices from "./_components/ItemsServices";

import styleService from "./_css/services.module.scss";
import styleGlobal from "../../../styles/index.module.scss"

const ServicesPage = () => {
  return (
    <>
      <section id="services">
        <div id={styleService.services}
        >
          <div className="container">
            <h1 id={styleGlobal.title}>Services</h1>
          </div>

          <ItemsServices />
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
