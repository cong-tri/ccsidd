/** @format */

import React from "react";
import TabCollapse from "./_components/TabCollapse";
import styleService from "./_css/resources.module.scss";

const Resources = async () => {
  return (
    <>
      <section id={styleService.resources}>
        <div className='container'>
          <TabCollapse />
        </div>
      </section>
    </>
  );
};

export default Resources;
