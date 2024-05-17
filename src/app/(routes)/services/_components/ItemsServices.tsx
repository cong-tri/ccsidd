/** @format */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Modal, Row } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { services } from "../_assets/services";
import styleServices from "../_css/services.module.scss";
import styleModal from "../_css/modal.module.scss";
import styleGlobal from "../../../index.module.scss";

const listServices = services.map((item, index) => {
  return {
    key: index + 1,
    serName: item.title,
    serDesc: item.description,
    serImage: item.img,
  };
});
const ItemsServices = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});
  const ModalService = ({ data }: any) => {
    console.log(data);
    if (Object.keys(data).length == 0) {
      return;
    }
    const { serName, serDesc } = data;
    return (
      <>
        <Modal
          centered
          open={open}
          footer={false}
          onCancel={() => setOpen(false)}
          width={1000}>
          <Title level={1} id={styleModal.modSerName}>
            {serName}
          </Title>
          <Paragraph id={styleModal.modSerDesc}>{serDesc}</Paragraph>
          <p className='text-right'>
            For more information, please kindly{" "}
            <Link href={"/contact"} className={styleGlobal.colorBlue2}>
              contact
            </Link>{" "}
            us.
          </p>
        </Modal>
      </>
    );
  };
  return (
    <>
      <div className='container'>
        <Row
          align={"middle"}
          justify={"center"}
          gutter={{ xs: 20, sm: 24, md: 30, lg: 30, xxl: 40 }}>
          {listServices.map((item) => {
            return (
              <>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={12}
                  xl={12}
                  xxl={12}
                  id={styleServices.serItems}
                  key={item.key}>
                  <Image
                    src={item.serImage}
                    quality={100}
                    width={100}
                    height={100}
                    id={styleServices.serItemsImage}
                    alt={item.serName}
                  />
                  <Title level={1} id={styleServices.serItemsLabel}>
                    {item.serName}
                  </Title>
                  <Paragraph
                    id={styleServices.serItemsContent}
                    key={item.key}
                    ellipsis={{
                      rows: 5,
                    }}>
                    {item.serDesc}
                  </Paragraph>
                  <div className='text-right'>
                    <button
                      id={styleServices.serItemsBtnSeeMore}
                      className={`${styleGlobal.colorChanging}`}
                      onClick={() => {
                        setOpen(true);
                        setData(item);
                      }}>
                      <i>see more</i>
                    </button>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </div>
      <ModalService data={data} />
    </>
  );
};

export default ItemsServices;
