/** @format */
import React from "react";

import { Row, Col } from "antd";
import Title from "antd/es/typography/Title";

import FormContact from "./_components/FormContact";
import MapContact from "./_components/MapContact";

import styleContact from "./_css/contact.module.scss";
import styleGlobal from "../../../styles/index.module.scss"

const ContactPage = async () => {

  const itemsContentContact = [
    {
      key: 1,
      id: styleContact.contactForm,
      children: <FormContact />,
    },
    {
      key: 2,
      id: styleContact.contactMap,
      children: <MapContact />,
    },
  ];

  return (
    <>
      <section id="contact">
        <div id={styleContact.contact} className="container">
          <Title level={1} id={styleGlobal.title}>Contact</Title>
          <Row gutter={30} align={"top"}>
            {itemsContentContact.map((items) => {
              return (
                <>
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    id={items.id}
                    key={items.key}
                  >
                    {items.children}
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
