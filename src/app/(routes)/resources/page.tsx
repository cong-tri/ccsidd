/** @format */

import React from "react";
import TabCollapse from "./_components/TabCollapse";
import styles from "../../index.module.scss";

const Resources = async () => {
  return (
    <>
      <section id={styles.resources}>
        <div className='container'>
          <TabCollapse />
        </div>
      </section>
    </>
  );
};

export default Resources;
