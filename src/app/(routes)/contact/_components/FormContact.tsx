/** @format */
"use client";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormState } from "react-dom";
import { handleSendMail } from "../actions";
import { Form, Input, Select, message } from "antd";
import Title from "antd/es/typography/Title";
import styleContact from "../_css/contact.module.scss";

const { Option } = Select;
const FormContact = () => {
  const siteKey: string = process.env.SITE_KEY as string ?? "";
  const [form] = Form.useForm();
  const [state, formAction] = useFormState(handleSendMail, "");
  const handleOnchangeCaptcha = (value: any) => {
    console.log(value);
  };
  if (state != "") {
    message.success(state);
  }

  return (
    <>
      <Form
        name='contactForm'
        form={form}
        onFinish={formAction}
        autoComplete='off'>
        <Title id={styleContact.labelForm}>Your Name:</Title>
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
        <Title id={styleContact.labelForm}>Your Email:</Title>
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
        <Title id={styleContact.labelForm}>What is kind of your contact?</Title>
        <Form.Item name='kind' initialValue={"service@ccsidd.com"}>
          <Select size='large'>
            <Option value='service@ccsidd.com'>For Customer Service</Option>
            <Option value='sales@ccsidd.com'>For Sales</Option>
            <Option value='ar@ccsidd.com'>For Billing</Option>
          </Select>
        </Form.Item>
        <Title id={styleContact.labelForm}>Your Message:</Title>
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
            <button
              type='submit'
              id={styleContact.btnForm}
              className='ml-auto mr-5'>
              SEND
            </button>
            <button type='reset' id={styleContact.btnForm}>
              RESET
            </button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormContact;
