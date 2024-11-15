/** @format */

import React from "react";
import TabCollapse from "./_components/TabCollapse";

import styleService from "./_css/resources.module.scss";
import styleGlobal from "../../../styles/index.module.scss"

const Resources = async () => {
  return (
    <>
      <section id="resources">
        <div id={styleService.resources} className="container">
          <h1 id={styleGlobal.title}>Resources</h1>
          <TabCollapse />
        </div>
      </section>
    </>
  );
};

export default Resources;
