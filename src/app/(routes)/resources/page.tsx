/** @format */

import React from "react";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import TabCollapse from "./_components/TabCollapse";
import styles from "../../index.module.scss";

const Resources = () => {
  return (
    <>
      <section id='resources'>
        <Row align={"middle"} id={styles.resources}>
          <Col span={24}>
            <div className='container'>
              <Title id={styles.title}>Resources</Title>
              <TabCollapse />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Resources;
