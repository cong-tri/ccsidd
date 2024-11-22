/** @format */

import React from "react";

import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { RightOutlined } from "@ant-design/icons";

import { about } from "../_assets/about";

import styleAbout from "../_css/about.module.scss";
import styleGlobal from "../../../../styles/index.module.scss";
import { Col, Row } from "antd";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section id="aboutus">
        <div className="container" id={styleAbout.aboutus}>
          <Title level={1} id={styleGlobal.title}>
            {about.header}
          </Title>

          {about.introduce.map((text, index) => {
            return (
              <Title level={1} key={index} id={styleAbout.aboutIntroduce}>{text}</Title>
            )
          })}

          <Row justify={"space-between"} className="mt-8 md:mt-12 xl:mt-16" align={"middle"}>
            <Col xs={0} sm={0} md={24} xl={10} xxl={12}>
              <Image
                src={"/images/splash/about.png"}
                alt="Global"
                id={styleAbout.aboutImage}
                width={400}
                height={400}
                objectFit="contain"
                quality={100}
              />
            </Col>
            <Col xs={24} xl={12} xxl={12}>
              <Title level={4} id={styleAbout.aboutLabel}>Our Solutions</Title>
              {about.solution.map((text, index) => {
                return (
                  <Paragraph key={index} id={styleAbout.aboutContent}>{text}</Paragraph>
                )
              })}

              <Title level={4} id={styleAbout.aboutLabel}>Our Believe</Title>
              <Paragraph id={styleAbout.aboutContent}>{about.believe}</Paragraph>

              <Title level={4} id={styleAbout.aboutLabel}>Our Aims</Title>
              {about.aim.map((text, index) => {
                return (
                  <Paragraph key={index} id={styleAbout.aboutContent}>{text}</Paragraph>
                )
              })}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default About;
