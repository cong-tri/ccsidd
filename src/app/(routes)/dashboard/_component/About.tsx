/** @format */

import React from "react";
import { Col, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { RightOutlined } from "@ant-design/icons";
import styles from "../../../index.module.scss";

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
              <div id={styles.aboutContent}>
                <Paragraph className='hidden xl:block'>
                  <p>
                    We, at first, would like to sincerely thank you for your
                    expression of interest.
                  </p>
                  <p>
                    Connecting Communication & Solutions Private Limited (CCS)
                    is service-based operator that specialized in providing
                    overseas call service (voice, fax, and inmarsat) to
                    corporate markets.
                  </p>
                  <p>
                    By taking advantages of the growth and acceptance of the
                    many different types of protocol and signaling as a low cost
                    and efficient communication medium, CCS has developed new
                    technologies and applications to exploit this potential to
                    created the perfect value added business.
                  </p>
                  <p>
                    CCS will always put our partners and customers at the
                    highest priority.
                  </p>
                  <p>
                    CCS will constantly strive to improve our services and
                    products to our customers.
                  </p>
                  <p>
                    We believe in promptness, excellent services and good
                    product support.
                  </p>
                  <p>
                    We will aim to constantly bring in innovative products and
                    services at a very competitive price to the marketplace so
                    that our customers and partners can enjoy the benefits of
                    the latest technology.
                  </p>
                  <p>
                    At CCS, one of our crucial main objectives is to provide
                    company with an alternation to re-route their IDD/Roaming
                    Calls at lower rates without compromising the voice quality.
                  </p>
                </Paragraph>
                <Paragraph
                  className='block xl:hidden'
                  ellipsis={{
                    rows: 18,
                    expandable: true,
                    symbol: <RightOutlined className={styles.colorBlue1} />,
                  }}>
                  <p>
                    We, at first, would like to sincerely thank you for your
                    expression of interest.
                  </p>
                  <p>
                    Connecting Communication & Solutions Private Limited (CCS)
                    is service-based operator that specialized in providing
                    overseas call service (voice, fax, and inmarsat) to
                    corporate markets.
                  </p>
                  <p>
                    By taking advantages of the growth and acceptance of the
                    many different types of protocol and signaling as a low cost
                    and efficient communication medium, CCS has developed new
                    technologies and applications to exploit this potential to
                    created the perfect value added business.
                  </p>
                  <p>
                    CCS will always put our partners and customers at the
                    highest priority.
                  </p>
                  <p>
                    CCS will constantly strive to improve our services and
                    products to our customers.
                  </p>
                  <p>
                    We believe in promptness, excellent services and good
                    product support.
                  </p>
                  <p>
                    We will aim to constantly bring in innovative products and
                    services at a very competitive price to the marketplace so
                    that our customers and partners can enjoy the benefits of
                    the latest technology.
                  </p>
                  <p>
                    At CCS, one of our crucial main objectives is to provide
                    company with an alternation to re-route their IDD/Roaming
                    Calls at lower rates without compromising the voice quality.
                  </p>
                </Paragraph>
              </div>
              <div id={styles.aboutContentMinH}>
                <Paragraph
                  ellipsis={{
                    rows: 9,
                    expandable: true,
                    symbol: <RightOutlined className={styles.colorBlue1} />,
                  }}>
                  <p>
                    We, at first, would like to sincerely thank you for your
                    expression of interest.
                  </p>
                  <p>
                    Connecting Communication & Solutions Private Limited (CCS)
                    is service-based operator that specialized in providing
                    overseas call service (voice, fax, and inmarsat) to
                    corporate markets.
                  </p>
                  <p>
                    By taking advantages of the growth and acceptance of the
                    many different types of protocol and signaling as a low cost
                    and efficient communication medium, CCS has developed new
                    technologies and applications to exploit this potential to
                    created the perfect value added business.
                  </p>
                  <p>
                    CCS will always put our partners and customers at the
                    highest priority.
                  </p>
                  <p>
                    CCS will constantly strive to improve our services and
                    products to our customers.
                  </p>
                  <p>
                    We believe in promptness, excellent services and good
                    product support.
                  </p>
                  <p>
                    We will aim to constantly bring in innovative products and
                    services at a very competitive price to the marketplace so
                    that our customers and partners can enjoy the benefits of
                    the latest technology.
                  </p>
                  <p>
                    At CCS, one of our crucial main objectives is to provide
                    company with an alternation to re-route their IDD/Roaming
                    Calls at lower rates without compromising the voice quality.
                  </p>
                </Paragraph>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default About;
