/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import styleService from "../_css/service.module.scss";
import styleGlobal from "../../../index.module.scss";
const Service = () => {
  return (
    <>
      <section id={styleService.service} className='container'>
        <Title id={styleGlobal.title}>Service</Title>
        <Row align={"middle"}>
          <Col xs={0} sm={0} md={24} lg={12} className='mx-auto'>
            <Image
              src={"/images/service/ser-item-2.png"}
              width={100}
              height={100}
              quality={100}
              alt='MOBILE SERVICE'
              id={styleService.serImage}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Title
              level={1}
              id={styleService.serLabel}
              className={styleGlobal.colorBlue1}>
              MOBILE SERVICE
            </Title>
            <div
              id={styleService.serContent}
              className={styleGlobal.colorBlue2}>
              <Paragraph
                className={`${styleGlobal.colorBlue2} hidden md:block`}>
                <p>
                  CCS has attained the{" "}
                  <span className={`${styleGlobal.colorBlue1}`}>
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
                  We have built a good base of customers who are enjoying good
                  pricing schemes and maintaining a responsive customer service
                  team, to assist in resolving their day-to-day mobile issues.
                </p>
                <p>
                  We are able to provide an in-depth analysis on your existing
                  mobile bills and defined the most economical plans to suit
                  your needs.
                </p>
              </Paragraph>
              <Paragraph
                className={`${styleGlobal.colorBlue2} block md:hidden`}
                ellipsis={{
                  rows: 10,
                  expandable: true,
                  symbol: <RightOutlined className={styleGlobal.colorBlue2} />,
                }}>
                <p>
                  CCS has attained the{" "}
                  <span className={`${styleGlobal.colorBlue1} font-bold`}>
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
                  We have built a good base of customers who are enjoying good
                  pricing schemes and maintaining a responsive customer service
                  team, to assist in resolving their day-to-day mobile issues.
                </p>
                <p>
                  We are able to provide an in-depth analysis on your existing
                  mobile bills and defined the most economical plans to suit
                  your needs.
                </p>
              </Paragraph>
            </div>
          </Col>
        </Row>
        <div className='text-right'>
          <button className='transition duration-300 ease-in-out hover:translate-y-2'>
            <Link
              href={"/services"}
              id={styleService.serBtnViewMore}
              className={styleGlobal.colorWhite}>
              View More Services
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Service;
