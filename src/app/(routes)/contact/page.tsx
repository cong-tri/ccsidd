/** @format */
import React from "react";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { Row, Col } from "antd";
import FormContact from "./_components/FormContact";
import MapContact from "./_components/MapContact";
import styles from "../../index.module.scss";

const ContactPage = () => {
  const handleSendMail = async (values: any) => {
    "use server";
    try {
      const transporter = nodemailer.createTransport({
        pool: true,
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: true,
        auth: {
          type: "login",
          user: process.env.SENDER_AUTH_USER,
          pass: process.env.SENDER_AUTH_PASS,
        },
      } as SMTPTransport.Options);
      await transporter.sendMail({
        from: process.env.SENDER_MAIL,
        to: process.env.SENDER_MAIL,
        subject: "test send email",
        text: `
          Username: ${values.username}\n
          Email: ${values.email}\n
          Kind Contact: ${values.kind}\n
          Message: ${values.message}\n
        `,
      });
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log(success);
        }
      });
      transporter.close();
    } catch (error) {
      console.log(error);
    }
  };
  const itemsContentContact = [
    {
      key: 1,
      id: styles.contactForm,
      children: <FormContact handleFunction={handleSendMail} />,
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
        {/* <Title level={1} id={styles.title}>
              CONTACT
            </Title> */}
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
