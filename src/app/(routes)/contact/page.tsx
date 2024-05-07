/** @format */
import React from "react";
import { Row, Col } from "antd";
import FormContact from "./_components/FormContact";
import MapContact from "./_components/MapContact";
import styles from "../../index.module.scss";

const ContactPage = async () => {
  const itemsContentContact = [
    {
      key: 1,
      id: styles.contactForm,
      children: <FormContact />,
    },
    {
      key: 2,
      id: styles.contactMap,
      children: <MapContact />,
    },
  ];
  return (
    <>
      <section id={styles.contact} className='container'>
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
                  key={items.key}>
                  {items.children}
                </Col>
              </>
            );
          })}
        </Row>
      </section>
    </>
  );
};

export default ContactPage;
