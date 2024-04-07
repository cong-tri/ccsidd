/** @format */

import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { RightOutlined } from "@ant-design/icons";
import imageServices1 from "../../../../public/images/service/ser-item-2.png";
import imageServices2 from "../../../../public/images/service/ser-item-5.png";
import imageServices3 from "../../../../public/images/service/ser-item-6.png";
import imageServices4 from "../../../../public/images/service/ser-item-1.png";
import styles from "../../index.module.scss";
const listServices = [
  {
    id: 1,
    name: "MOBILE SERVICE",
    image: imageServices1,
    description: (
      <>
        CCS has attained the Mobile Virtual Network Operator License (MVNO) in
        2009, where we provide postpaid mobile plans to our customers. <br />{" "}
        CCS had maintained close working relationship with our existing backend
        providers, in providing attractive and competitive pricing plans
        offering to our customers. <br /> We have built a good base of customers
        who are enjoying good pricing schemes and maintaining a responsive
        customer service team, to assist in resolving their day-to-day mobile
        issues. <br /> We are able to provide an in-depth analysis on your
        existing mobile bills and defined the most economical plans to suit your
        needs.,
      </>
    ),
  },
  {
    id: 2,
    name: "RTONE SERVICE",
    image: imageServices2,
    description: (
      <>
        The R Tone service is a break through effort for our customers to
        affordable roaming services while travelling. <br /> We have been
        spending gruelling effort to design and create an application which is
        able to reside in smart phones, to make and receive calls while
        customers travel overseas. <br /> Though there has been limitation to
        its availability, we are in search of a balance to ensure the solution
        can be consistent and maintain the highest quality for a decent business
        call.
      </>
    ),
  },
  {
    id: 3,
    name: "CCS IINTERNATIONAL CALL FORWARDING (ICF)",
    image: imageServices3,
    description: (
      <>
        The ICF is basically to resolved the issues relating to high cost for
        incoming calls while travelling overseas. <br /> It works with an
        overseas mobile number attained in the foreign destination. In most of
        the countries, incoming calls to their native prepaid mobile number is
        free. <br /> ICF is meant to provide a local number in Singapore that
        will link to your overseas mobile number, so that when the local number
        is called, you will be able to receive the call on your overseas mobile.{" "}
        <br />
        In combining both CCS Callback Service and CCS International Call
        Forward Service, it will bring massive savings to your overall roaming
        bills.
      </>
    ),
  },
  {
    id: 4,
    name: "1505 PREMIUM CONNECT",
    image: imageServices4,
    description: (
      <>
        The 1505 Premium Connect service is an alternative to making Long
        Distance Calls in Singapore. <br />
        We are able to provide uncompromising call quality which is comparable
        to the International Direct Dial (IDD) as offered by Fixed Based
        Operators (FBO). <br />
        We have sinced providing a consistent and robust voice network to our
        faithful customers while enjoying massive savings on their International
        calls.
      </>
    ),
  },
];
const ServicesPage = () => {
  return (
    <>
      <section id='service'>
        <Row align={"middle"} id={styles.services}>
          <Col span={24}>
            <div className='container'>
              <Title id={styles.title}>Services</Title>
              <Row align={"middle"} justify={"center"} gutter={20}>
                {listServices.map((service, index) => {
                  return (
                    <>
                      <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={12}
                        xl={12}
                        xxl={6}
                        id={styles.serItems}
                        key={index}>
                        <Image
                          src={service.image}
                          quality={100}
                          width={100}
                          height={100}
                          id={styles.serItemsImage}
                          alt={service.name}
                        />
                        <Title level={1} id={styles.serItemsLabel}>
                          {service.name}
                        </Title>
                        <Paragraph
                          id={styles.serItemsContent}
                          key={service.id}
                          ellipsis={{
                            rows: 3,
                            expandable: true,
                            symbol: (
                              <RightOutlined id={styles.serItemsSymbol} />
                            ),
                          }}>
                          {service.description}
                        </Paragraph>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ServicesPage;
