/** @format */

import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import imageAbout from "../../../../../public/images/splash/about.png";
import styles from "../../../index.module.scss";
import { RightOutlined } from "@ant-design/icons";

const About = () => {
  return (
    <>
      <section id='about'>
        <Row align={"middle"} id={styles.aboutus}>
          <Col span={24}>
            <div className='container'>
              <Title level={1} id={styles.title}>
                About CCS
              </Title>
              <div>
                <Row align={"middle"} gutter={{ xs: 0, sm: 0, md: 0, lg: 20 }}>
                  <Col xs={24} xl={12} id={styles.aboutContent}>
                    <Paragraph
                      id={styles.aboutContentText}
                      className='hidden 3xl:block'>
                      We, at first, would like to sincerely thank you for your
                      expression of interest. <br />
                      Connecting Communication & Solutions Private Limited (CCS)
                      is service-based operator that specialized in providing
                      overseas call service (voice, fax, and inmarsat) to
                      corporate markets. <br />
                      By taking advantages of the growth and acceptance of the
                      many different types of protocol and signaling as a low
                      cost and efficient communication medium, CCS has developed
                      new technologies and applications to exploit this
                      potential to created the perfect value added business.{" "}
                      <br />
                      CCS will always put our partners and customers at the
                      highest priority.
                      <br />
                      CCS will constantly strive to improve our services and
                      products to our customers. <br />
                      We believe in promptness, excellent services and good
                      product support. <br />
                      We will aim to constantly bring in innovative products and
                      services at a very competitive price to the marketplace so
                      that our customers and partners can enjoy the benefits of
                      the latest technology. <br />
                      At CCS, one of our crucial main objectives is to provide
                      company with an alternation to re-route their IDD/Roaming
                      Calls at lower rates without compromising the voice
                      quality.
                    </Paragraph>
                    <Paragraph
                      id={styles.aboutContentText}
                      className='md:block lg:hidden 2xl:block 3xl:hidden'
                      ellipsis={{
                        rows: 12,
                        expandable: true,
                        symbol: <RightOutlined className={styles.colorBlue1} />,
                      }}>
                      We, at first, would like to sincerely thank you for your
                      expression of interest. <br />
                      Connecting Communication & Solutions Private Limited (CCS)
                      is service-based operator that specialized in providing
                      overseas call service (voice, fax, and inmarsat) to
                      corporate markets. <br />
                      By taking advantages of the growth and acceptance of the
                      many different types of protocol and signaling as a low
                      cost and efficient communication medium, CCS has developed
                      new technologies and applications to exploit this
                      potential to created the perfect value added business.{" "}
                      <br />
                      CCS will always put our partners and customers at the
                      highest priority.
                      <br />
                      CCS will constantly strive to improve our services and
                      products to our customers. <br />
                      We believe in promptness, excellent services and good
                      product support. <br />
                      We will aim to constantly bring in innovative products and
                      services at a very competitive price to the marketplace so
                      that our customers and partners can enjoy the benefits of
                      the latest technology. <br />
                      At CCS, one of our crucial main objectives is to provide
                      company with an alternation to re-route their IDD/Roaming
                      Calls at lower rates without compromising the voice
                      quality.
                    </Paragraph>
                    <Paragraph
                      id={styles.aboutContentMinH}
                      ellipsis={{
                        rows: 9,
                        expandable: true,
                        symbol: <RightOutlined className={styles.colorBlue1} />,
                      }}>
                      We, at first, would like to sincerely thank you for your
                      expression of interest. <br />
                      Connecting Communication & Solutions Private Limited (CCS)
                      is service-based operator that specialized in providing
                      overseas call service (voice, fax, and inmarsat) to
                      corporate markets. <br />
                      By taking advantages of the growth and acceptance of the
                      many different types of protocol and signaling as a low
                      cost and efficient communication medium, CCS has developed
                      new technologies and applications to exploit this
                      potential to created the perfect value added business.{" "}
                      <br />
                      CCS will always put our partners and customers at the
                      highest priority.
                      <br />
                      CCS will constantly strive to improve our services and
                      products to our customers. <br />
                      We believe in promptness, excellent services and good
                      product support. <br />
                      We will aim to constantly bring in innovative products and
                      services at a very competitive price to the marketplace so
                      that our customers and partners can enjoy the benefits of
                      the latest technology. <br />
                      At CCS, one of our crucial main objectives is to provide
                      company with an alternation to re-route their IDD/Roaming
                      Calls at lower rates without compromising the voice
                      quality.
                    </Paragraph>
                  </Col>
                  <Col xs={0} sm={0} md={0} xl={12}>
                    <Image
                      src={imageAbout}
                      id={styles.aboutImage}
                      alt='About Us'
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default About;
