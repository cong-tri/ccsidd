/** @format */
'use client'

import React from "react";

import Image from "next/image";

import { RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";

import { about } from "../_assets/about";

import styleAbout from "../_css/about.module.scss";
import styleGlobal from "../../../../styles/index.module.scss";

const About = () => {
  return (
    <>
      <section id="aboutus">
        <div className="container" id={styleAbout.aboutus}>
          <Typography.Title level={1} id={styleGlobal.title}>
            {about.header}
          </Typography.Title>

          {about.introduce.map((text, index) => {
            return (
              <Typography.Title level={1} key={index} id={styleAbout.aboutIntroduce}>
                {text}
              </Typography.Title>
            );
          })}

          <Row
            justify={"space-between"}
            className="mt-8 md:mt-12 xl:mt-16"
            align={"middle"}
          >
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
              <Typography.Title level={4} id={styleAbout.aboutLabel}>
                Our Solutions
              </Typography.Title>
              <Typography.Paragraph
                id={styleAbout.aboutContent}
                ellipsis={{ rows: 5, expandable: true, symbol: <RightOutlined />, }}
              >
                {about.solution.map((text, index) => {
                  return (
                    <>
                      <Typography.Paragraph key={index} id={styleAbout.aboutContent}>
                        {text}
                      </Typography.Paragraph>
                    </>
                  );
                })}
              </Typography.Paragraph>

              <Typography.Title level={4} id={styleAbout.aboutLabel}>
                Our Believe
              </Typography.Title>
              <Typography.Paragraph id={styleAbout.aboutContent}>
                {about.believe}
              </Typography.Paragraph>

              <Typography.Title level={4} id={styleAbout.aboutLabel}>
                Our Aims
              </Typography.Title>
              <Typography.Paragraph
                id={styleAbout.aboutContent}
                ellipsis={{ rows: 5, expandable: true, symbol: <RightOutlined />, }}
              >
                {about.aim.map((text, index) => {
                  return (
                    <Typography.Paragraph key={index} id={styleAbout.aboutContent}>
                      {text}
                    </Typography.Paragraph>
                  );
                })}
              </Typography.Paragraph>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default About;
