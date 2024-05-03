/** @format */

import React from "react";
import { Col, Row } from "antd";
import TabCollapse from "./_components/TabCollapse";
import styles from "../../index.module.scss";

const Resources = () => {
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
