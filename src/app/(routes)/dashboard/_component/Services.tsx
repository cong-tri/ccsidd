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
                  src={imageServices}
                  quality={100}
                  alt='MOBILE SERVICE'
                  id={styles.serImage}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12}>
                <Title level={1} id={styles.serLabel}>
                  MOBILE SERVICE
                </Title>
                <div id={styles.serContent}>
                  <Paragraph className='hidden md:block'>
                    <p>
                      CCS has attained the{" "}
                      <span className={`${styles.colorBlue1} font-bold`}>
                        Mobile Virtual Network Operator License (MVNO)
                      </span>{" "}
                      in 2009, where we provide postpaid mobile plans to our
                      customers.
                    </p>
                    <p>
                      CCS had maintained close working relationship with our
                      existing backend providers, in providing attractive and
                      competitive pricing plans offering to our customers.
                    </p>
                    <p>
                      We have built a good base of customers who are enjoying
                      good pricing schemes and maintaining a responsive customer
                      service team, to assist in resolving their day-to-day
                      mobile issues.
                    </p>
                    <p>
                      We are able to provide an in-depth analysis on your
                      existing mobile bills and defined the most economical
                      plans to suit your needs.
                    </p>
                  </Paragraph>
                  <Paragraph
                    className='block md:hidden'
                    ellipsis={{
                      rows: 16,
                      expandable: true,
                      symbol: <RightOutlined className={styles.colorBlue2} />,
                    }}>
                    <p>
                      CCS has attained the{" "}
                      <span className={`${styles.colorBlue1} font-bold`}>
                        Mobile Virtual Network Operator License (MVNO)
                      </span>{" "}
                      in 2009, where we provide postpaid mobile plans to our
                      customers.
                    </p>
                    <p>
                      CCS had maintained close working relationship with our
                      existing backend providers, in providing attractive and
                      competitive pricing plans offering to our customers.
                    </p>
                    <p>
                      We have built a good base of customers who are enjoying
                      good pricing schemes and maintaining a responsive customer
                      service team, to assist in resolving their day-to-day
                      mobile issues.
                    </p>
                    <p>
                      We are able to provide an in-depth analysis on your
                      existing mobile bills and defined the most economical
                      plans to suit your needs.
                    </p>
                  </Paragraph>
                </div>
              </Col>
            </Row>
            <div className='text-right'>
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
