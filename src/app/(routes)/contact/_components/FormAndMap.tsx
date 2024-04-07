/** @format */

"use client";
import React, { useState } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import styles from "../../../index.module.scss";
import Title from "antd/es/typography/Title";
const { Option } = Select;
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
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
        (Representative Office),
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
const FormAndMap = () => {
  const [defaultMap, setDefaultMap] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.734418912784!2d103.90216307567066!3d1.335567361620145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17facdccfd85%3A0x892528be69cb328b!2s63%20Kaki%20Bukit%20Pl%2C%20Singapore%20416234!5e0!3m2!1svi!2s!4v1711007545735!5m2!1svi!2s"
  );
  const handleSelectLocation = (location: any) => {
    switch (location) {
      case "SINGAPORE":
        setDefaultMap(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.734418912784!2d103.90216307567066!3d1.335567361620145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17facdccfd85%3A0x892528be69cb328b!2s63%20Kaki%20Bukit%20Pl%2C%20Singapore%20416234!5e0!3m2!1svi!2s!4v1711007545735!5m2!1svi!2s"
        );
        break;
      case "VIETNAM":
        setDefaultMap(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.751464050565!2d106.66523442984102!3d10.808590728447705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529233a69e3cd%3A0xc8a780fd1823d346!2zMTVBIMSQ4buRbmcgxJBhLCBQaMaw4budbmcgMiwgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1711015441952!5m2!1svi!2s"
        );
        break;
      default:
        setDefaultMap(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.734418912784!2d103.90216307567066!3d1.335567361620145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17facdccfd85%3A0x892528be69cb328b!2s63%20Kaki%20Bukit%20Pl%2C%20Singapore%20416234!5e0!3m2!1svi!2s!4v1711007545735!5m2!1svi!2s"
        );
        break;
    }
  };
  const onFinish = async (values: any) => {
    console.log("Success:", values);
  };
  return (
    <>
      <Row gutter={30} align={"middle"}>
        <Col xs={24} sm={24} md={24} lg={12} id={styles.contactForm}>
          <Form
            name='contactForm'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'>
            <Title id={styles.labelForm}>Your Name:</Title>
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}>
              <Input size='middle' />
            </Form.Item>
            <Title id={styles.labelForm}>Your Email:</Title>
            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please input the correct email!",
                },
              ]}>
              <Input size='middle' />
            </Form.Item>
            <Title id={styles.labelForm}>What is kind of your contact?</Title>
            <Form.Item name='kind'>
              <Select size='large' defaultValue={"customerService"}>
                <Option value='customerService'>For Customer Service</Option>
                <Option value='sales'>For Sales</Option>
                <Option value='billing'>For Billing</Option>
              </Select>
            </Form.Item>
            <Title id={styles.labelForm}>Your Message:</Title>
            <Form.Item
              name='message'
              rules={[
                {
                  required: true,
                  message: "Please enter a message",
                },
              ]}>
              <Input.TextArea maxLength={200} rows={5} size='middle' />
            </Form.Item>
            <Form.Item>
              <button type='submit' id={styles.btnForm} className='mr-5'>
                SEND
              </button>
              <button type='reset' id={styles.btnForm}>
                RESET
              </button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} id={styles.contactMap}>
          <iframe
            src={defaultMap}
            id={styles.contactGoogleMap}
            width='100%'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
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
        </Col>
      </Row>
    </>
  );
};

export default FormAndMap;
