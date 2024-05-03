/** @format */
import React from "react";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { Row, Col } from "antd";
import Title from "antd/es/typography/Title";
import FormContact from "./_components/FormContact";
import MapContact from "./_components/MapContact";
import styles from "../../index.module.scss";
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
const ContactPage = () => {
  const handleSendMail = async (values: any) => {
    "use server";
    try {
      /*
      const transporter = nodemailer.createTransport({
        pool: true,
        host: process.env.SERVER_MAIL_HOST,
        port: process.env.SERVER_MAIL_PORT,
        secure: true,
        auth: {
          type: "login",
          user: process.env.SENDER_AUTH_USER,
          pass: process.env.SENDER_AUTH_PASS,
        },
      });
      const mailOptions = {
        from: process.env.SENDER_MAIL,
        to: process.env.SENDER_MAIL,
        subject: "test send email",
        text: `
          Username: ${values.username}\n
          Email: ${values.email}\n
          Kind Contact: ${values.kind}\n
          Message: ${values.message}\n
        `,
      };
      */
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

  return (
    <>
      <section id='contact' className='container'>
        <Row align={"middle"} id={styles.contact}>
          <Col span={24}>
            <Title level={1} id={styles.title}>
              CONTACT
            </Title>
            <Row gutter={20} align={"top"}>
              <Col xs={24} sm={24} md={24} lg={12} id={styles.contactForm}>
                <FormContact handleFunction={handleSendMail} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} id={styles.contactMap}>
                <MapContact />
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ContactPage;
