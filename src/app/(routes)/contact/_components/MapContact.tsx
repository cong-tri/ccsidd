/** @format */

"use client";
import React, { useState } from "react";
import { Col, Row } from "antd";
import styles from "../../../index.module.scss";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const optionSelectMap = [
  {
    id: "1",
    label: <h1>SINGAPORE</h1>,
    location: "SINGAPORE",
    address: (
      <p>
        63 Kaki Bukit Place #05-01. <br />
        Singapore 416234. <br />
        Phone: +65 67481737. <br />
        Fax: +65 67484812. <br />
        After office hour hotline for <br />
        Mobile suspension: +65 67451505.
        <br />
        Customer Service: <br /> service@ccsidd.com. <br />
        Sales: sales@ccsidd.com.
      </p>
    ),
  },
  {
    id: "2",
    label: (
      <h1>
        VIETNAM <br />
        (Representative Office)
      </h1>
    ),
    location: "VIETNAM",
    address: (
      <p>
        15 Dong Da Street, <br /> District Tan Binh, <br /> Ward 2 Ho Chi Minh
        City.
      </p>
    ),
  },
];
const mapKey = process.env.MAP_KEY as string;
const MapContact = () => {
  const [center, setCenter] = useState("1.335288, 103.904813");
  const [q, setQ] = useState("63 Kaki Bukit Pl, Singapore 416234");
  const handleSelectLocation = (location: any) => {
    switch (location) {
      case "SINGAPORE":
        setCenter("1.335288, 103.904813");
        // setQ("ChIJhf3MzfoX2jERizLLab4oJYk");
        setQ("63 Kaki Bukit Pl, Singapore 416234");
        break;
      case "VIETNAM":
        setCenter("10.809316523310306, 106.66542228466048");
        // setQ("ChIJYWdMOiMpdTERhvWxg32LRRA");
        setQ("15A Đ. Đống Đa, Phường 2, Tân Bình, Thành phố Hồ Chí Minh");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <GoogleMapsEmbed
        apiKey={mapKey}
        allowfullscreen
        zoom='15'
        height={250}
        width='100%'
        loading='lazy'
        mode='place'
        q={q}
        center={center}
      />
      <Row id={styles.contactLocation}>
        {optionSelectMap.map((item) => {
          return (
            <Col
              xs={24}
              sm={24}
              md={12}
              className=''
              id={styles.itemContactLocation}
              key={item.id}
              onClick={() => {
                handleSelectLocation(item.location);
              }}>
              {item.label}
              {item.address}
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default MapContact;
