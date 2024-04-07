/** @format */

import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import imageServices from "../../../../../public/images/service/ser-item-2.png";
import styles from "../../../index.module.scss";
import Link from "next/link";
const Services = () => {
  return (
    <>
      <section id='service' className='container'>
        <Row align={"middle"} id={styles.service}>
          <Col span={24}>
            <Title id={styles.title}>Service</Title>
            <Row align={"middle"}>
              <Col xs={0} sm={0} md={24} lg={12} className='mx-auto'>
                <Image
                  className='animate__animated animate__fadeInLeft animate__slow animate__delay-1s'
                  src={imageServices}
                  width={300}
                  height={300}
                  quality={100}
                  alt='MOBILE SERVICE'
                  id={styles.serImage}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12}>
                <Title
                  level={1}
                  id={styles.serLabel}
                  className='animate__animated animate__fadeInRight animate__slow animate__delay-2s'>
                  MOBILE SERVICE
                </Title>
                <Paragraph
                  id={styles.serContent}
                  className='hidden md:block animate__animated animate__fadeInRight animate__delay-3s'>
                  CCS has attained the{" "}
                  <span className={`${styles.colorBlue1} font-bold`}>
                    Mobile Virtual Network Operator License (MVNO)
                  </span>{" "}
                  in 2009, where we provide postpaid mobile plans to our
                  customers. <br /> CCS had maintained close working
                  relationship with our existing backend providers, in providing
                  attractive and competitive pricing plans offering to our
                  customers. <br /> We have built a good base of customers who
                  are enjoying good pricing schemes and maintaining a responsive
                  customer service team, to assist in resolving their day-to-day
                  mobile issues. <br /> We are able to provide an in-depth
                  analysis on your existing mobile bills and defined the most
                  economical plans to suit your needs.
                </Paragraph>
                <Paragraph
                  className='xs:hidden sm:block md:hidden animate__animated animate__fadeInRight animate__delay-3s'
                  id={styles.serContent}
                  ellipsis={{
                    rows: 12,
                    expandable: true,
                    symbol: <RightOutlined className={styles.colorBlue2} />,
                  }}>
                  CCS has attained the{" "}
                  <span className={`${styles.colorBlue1} font-bold`}>
                    Mobile Virtual Network Operator License (MVNO)
                  </span>{" "}
                  in 2009, where we provide postpaid mobile plans to our
                  customers. <br /> CCS had maintained close working
                  relationship with our existing backend providers, in providing
                  attractive and competitive pricing plans offering to our
                  customers. <br /> We have built a good base of customers who
                  are enjoying good pricing schemes and maintaining a responsive
                  customer service team, to assist in resolving their day-to-day
                  mobile issues. <br /> We are able to provide an in-depth
                  analysis on your existing mobile bills and defined the most
                  economical plans to suit your needs.
                </Paragraph>
                <Paragraph
                  className='xs:block sm:hidden animate__animated animate__fadeInRight animate__delay-3s'
                  id={styles.serContent}
                  ellipsis={{
                    rows: 6,
                    expandable: true,
                    symbol: <RightOutlined className={styles.colorBlue2} />,
                  }}>
                  CCS has attained the{" "}
                  <span className={`${styles.colorBlue1} font-bold`}>
                    Mobile Virtual Network Operator License (MVNO)
                  </span>{" "}
                  in 2009, where we provide postpaid mobile plans to our
                  customers. <br /> CCS had maintained close working
                  relationship with our existing backend providers, in providing
                  attractive and competitive pricing plans offering to our
                  customers. <br /> We have built a good base of customers who
                  are enjoying good pricing schemes and maintaining a responsive
                  customer service team, to assist in resolving their day-to-day
                  mobile issues. <br /> We are able to provide an in-depth
                  analysis on your existing mobile bills and defined the most
                  economical plans to suit your needs.
                </Paragraph>
              </Col>
            </Row>
            <div className='text-right animate__animated animate__fadeInRight animate__slow animate__delay-4s'>
              <button className='transition duration-300 ease-in-out hover:translate-y-2'>
                <Link href={"/services"} id={styles.serBtnViewMore}>
                  View More Services
                </Link>
              </button>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Services;
