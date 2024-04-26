/** @format */
"use client";
import React, { useState } from "react";
import { Modal } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

const ModalService = ({ data }: any) => {
  const [open, setOpen] = useState(true);
  console.log(data);
  if (Object.keys(data).length == 0) {
    return;
  }
  const { serName, serDesc } = data;
  return (
    <>
      <Modal
        title='Modal 1000px width'
        centered
        open={open}
        footer={false}
        onCancel={() => setOpen(false)}
        width={1000}>
        <Title level={1}>{serName}</Title>
        <Paragraph>{serDesc}</Paragraph>
      </Modal>
    </>
  );
};

export default ModalService;
