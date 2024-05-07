/** @format */
"use client";
import React from "react";
import { useFormState } from "react-dom";
import { handleSendMail } from "../actions";
import { Form, Input, Select, message } from "antd";
import Title from "antd/es/typography/Title";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "../../../index.module.scss";
const { Option } = Select;

const siteKey = process.env.SITE_KEY as string;

const FormContact = () => {
  const [state, formAction] = useFormState(handleSendMail, { message: "" });
  const handleOnchangeCaptcha = (value: any) => {
    console.log(value);
  };
  if (state.message != "") {
    message.success(state.message);
  }

  return (
    <>
      <Form name='contactForm' onFinish={formAction} autoComplete='off'>
        <Title id={styles.labelForm}>Your Name:</Title>
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input size='small' />
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
          <Input size='small' />
        </Form.Item>
        <Title id={styles.labelForm}>What is kind of your contact?</Title>
        <Form.Item name='kind' initialValue={"service@ccsidd.com"}>
          <Select size='large'>
            <Option value='service@ccsidd.com'>For Customer Service</Option>
            <Option value='sales@ccsidd.com'>For Sales</Option>
            <Option value='ar@ccsidd.com'>For Billing</Option>
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
          <Input.TextArea maxLength={200} rows={3} size='small' />
        </Form.Item>
        <Form.Item>
          <div className='xl:flex xl:items-center'>
            <ReCAPTCHA
              size='normal'
              sitekey={siteKey}
              onChange={handleOnchangeCaptcha}
            />
            <button type='submit' id={styles.btnForm} className='ml-auto mr-5'>
              SEND
            </button>
            <button type='reset' id={styles.btnForm}>
              RESET
            </button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormContact;
