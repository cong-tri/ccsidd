/** @format */

"use client";
import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Col, Row } from "antd";
import { map } from "../_assets/map";
import styleContact from "../_css/contact.module.scss";

const MapContact = () => {
  const mapKey = process.env.MAP_KEY as string;
  const [center, setCenter] = React.useState(map.Singapore.plusCode);
  const [q, setQ] = React.useState(map.Singapore.placeId);
  const handleSelectLocation = (location: any) => {
    switch (location) {
      case map.Singapore.location:
        setCenter(map.Singapore.plusCode);
        setQ(map.Singapore.placeId);
        break;
      case map.Vietnam.location:
        setCenter(map.Vietnam.plusCode);
        setQ(map.Vietnam.placeId);
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
      <Row id={styleContact.contactLocation}>
        <Col
          xs={24}
          sm={24}
          md={12}
          id={styleContact.itemContactLocation}
          onClick={() => {
            handleSelectLocation(map.Singapore.location);
          }}>
          {map.Singapore.title}
          {map.Singapore.info}
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          id={styleContact.itemContactLocation}
          onClick={() => {
            handleSelectLocation(map.Vietnam.location);
          }}>
          {map.Vietnam.title}
          {map.Vietnam.info}
        </Col>
      </Row>
    </>
  );
};

export default MapContact;
