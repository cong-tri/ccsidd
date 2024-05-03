/** @format */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Modal, Row } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import imageServices1 from "../../../../public/images/service/ser-item-2.png";
import imageServices2 from "../../../../public/images/service/ser-item-5.png";
import imageServices3 from "../../../../public/images/service/ser-item-6.png";
import imageServices4 from "../../../../public/images/service/ser-item-1.png";
import styles from "../../index.module.scss";
const listServices = [
  {
    id: 1,
    serName: "MOBILE SERVICE",
    serImage: imageServices1,
    serDesc: (
      <>
        <p>
          CCS has attained the Mobile Virtual Network Operator License (MVNO) in
          2009, where we provide postpaid mobile plans to our customers.
        </p>
        <p>
          CCS had maintained close working relationship with our existing
          backend providers, in providing attractive and competitive pricing
          plans offering to our customers.
        </p>
        <p>
          We have built a good base of customers who are enjoying good pricing
          schemes and maintaining a responsive customer service team, to assist
          in resolving their day-to-day mobile issues.
        </p>
        <p>
          We are able to provide an in-depth analysis on your existing mobile
          bills and defined the most economical plans to suit your needs.
        </p>
      </>
    ),
  },
  {
    id: 2,
    serName: "RTONE SERVICE",
    serImage: imageServices2,
    serDesc: (
      <>
        <p>
          The R Tone service is a break through effort for our customers to
          affordable roaming services while travelling.
        </p>
        <p>
          We have been spending gruelling effort to design and create an
          application which is able to reside in smart phones, to make and
          receive calls while customers travel overseas.
        </p>
        <p>
          Though there has been limitation to its availability, we are in search
          of a balance to ensure the solution can be consistent and maintain the
          highest quality for a decent business call.
        </p>
      </>
    ),
  },
  {
    id: 3,
    serName: "CCS IINTERNATIONAL CALL FORWARDING (ICF)",
    serImage: imageServices3,
    serDesc: (
      <>
        <p>
          The ICF is basically to resolved the issues relating to high cost for
          incoming calls while travelling overseas.
        </p>
        <p>
          It works with an overseas mobile number attained in the foreign
          destination. In most of the countries, incoming calls to their native
          prepaid mobile number is free.
        </p>
        <p>
          ICF is meant to provide a local number in Singapore that will link to
          your overseas mobile number, so that when the local number is called,
          you will be able to receive the call on your overseas mobile.
        </p>
        <p>
          In combining both CCS Callback Service and CCS International Call
          Forward Service, it will bring massive savings to your overall roaming
          bills.
        </p>
      </>
    ),
  },
  {
    id: 4,
    serName: "1505 PREMIUM CONNECT",
    serImage: imageServices4,
    serDesc: (
      <>
        <p>
          The 1505 Premium Connect service is an alternative to making Long
          Distance Calls in Singapore.
        </p>
        <p>
          We are able to provide uncompromising call quality which is comparable
          to the International Direct Dial (IDD) as offered by Fixed Based
          Operators (FBO).
        </p>
        <p>
          We have sinced providing a consistent and robust voice network to our
          faithful customers while enjoying massive savings on their
          International calls.
        </p>
      </>
    ),
  },
];
const ServicesPage = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const ModalService = ({ data }: any) => {
    console.log(data);
    if (Object.keys(data).length == 0) {
      return;
    }
    const { serName, serDesc } = data;
    return (
      <>
        <Modal
          centered
          open={open}
          footer={false}
          onCancel={() => setOpen(false)}
          width={1000}>
          <Title level={1} id={styles.modSerName}>
            {serName}
          </Title>
          <Paragraph id={styles.modSerDesc}>{serDesc}</Paragraph>
          <p className='text-right'>
            For more information, please kindly{" "}
            <Link href={"/contact"} className={styles.colorBlue2}>
              contact
            </Link>{" "}
            us.
          </p>
        </Modal>
      </>
    );
  };
  return (
    <>
      <section id={styles.services}>
        <div className='container'>
          <Row
            align={"middle"}
            justify={"center"}
            gutter={{ xs: 20, sm: 24, md: 30, lg: 30, xxl: 40 }}>
            {listServices.map((item, index) => {
              return (
                <>
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    xl={12}
                    xxl={12}
                    id={styles.serItems}
                    key={index + 1}>
                    <Image
                      src={item.serImage}
                      quality={100}
                      id={styles.serItemsImage}
                      alt={item.serName}
                    />
                    <Title level={1} id={styles.serItemsLabel}>
                      {item.serName}
                    </Title>
                    <Paragraph
                      id={styles.serItemsContent}
                      key={item.id}
                      ellipsis={{
                        rows: 5,
                      }}>
                      {item.serDesc}
                    </Paragraph>
                    <div className='text-right'>
                      <button
                        id={styles.serItemsBtnSeeMore}
                        className={`${styles.colorChanging}`}
                        onClick={() => {
                          setOpen(true);
                          setData(item);
                        }}>
                        <i>see more</i>
                      </button>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
        <ModalService data={data} />
      </section>
    </>
  );
};

export default ServicesPage;
