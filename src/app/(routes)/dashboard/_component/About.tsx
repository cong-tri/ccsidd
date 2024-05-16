/** @format */

import React from "react";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { RightOutlined } from "@ant-design/icons";
import styleComponent from "./css/about.module.scss";
import styles from "../../../index.module.scss";
import { about } from "./(assests)/about";

const About = () => {
  return (
    <>
      <section id={styleComponent.aboutus}>
        <div className='container'>
          <Title level={1} id={styles.title}>
            {about.header}
          </Title>
          <div id={styleComponent.aboutContent}>
            <Paragraph className={`${styles.colorBlue1} hidden xl:block`}>
              {about.info.map((item, index) => {
                return <p key={index}>{item.description}</p>;
              })}
            </Paragraph>
            <Paragraph
              className={`${styles.colorBlue1} block xl:hidden`}
              ellipsis={{
                rows: 18,
                expandable: true,
                symbol: <RightOutlined className={styles.colorBlue1} />,
              }}>
              {about.info.map((item, index) => {
                return <p key={index}>{item.description}</p>;
              })}
            </Paragraph>
          </div>
          <div id={styleComponent.aboutContentMinH}>
            <Paragraph
              className={styles.colorBlue1}
              ellipsis={{
                rows: 9,
                expandable: true,
                symbol: <RightOutlined className={styles.colorBlue1} />,
              }}>
              {about.info.map((item, index) => {
                return <p key={index}>{item.description}</p>;
              })}
            </Paragraph>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
