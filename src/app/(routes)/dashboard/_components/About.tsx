/** @format */

import React from "react";

import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { RightOutlined } from "@ant-design/icons";

import { about } from "../_assets/about";

import styleAbout from "../_css/about.module.scss";
import styleGlobal from "../../../index.module.scss";

const About = () => {
  return (
    <>
      <section id={styleAbout.aboutus}>
        <div className='container'>
          <Title level={1} id={styleGlobal.title}>
            {about.header}
          </Title>

          <div id={styleAbout.aboutContent}>
            <Paragraph className={`${styleGlobal.colorBlue1} hidden xl:block`}>
              {about.info.map((item, index) => {
                return <p key={index}>{item.description}</p>;
              })}
            </Paragraph>

            <Paragraph
              className={`${styleGlobal.colorBlue1} block xl:hidden`}
              ellipsis={{
                rows: 18,
                expandable: true,
                symbol: <RightOutlined className={styleGlobal.colorBlue1} />,
              }}>
              {about.info.map((item, index) => {
                return <p key={index}>{item.description}</p>;
              })}
            </Paragraph>
          </div>

          <div id={styleAbout.aboutContentMinH}>
            <Paragraph
              className={styleGlobal.colorBlue1}
              ellipsis={{
                rows: 9,
                expandable: true,
                symbol: <RightOutlined className={styleGlobal.colorBlue1} />,
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
