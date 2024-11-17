/** @format */
"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Col, Modal, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

import { ListServices, services } from "../_assets/services";

import styleServices from "../_css/services.module.scss";
import styleModal from "../_css/modal.module.scss";
import styleGlobal from "../../../../styles/index.module.scss";

const ItemsServices = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<ListServices>();

  const ModalService = ({ data }: { data?: ListServices }) => {
    if (!data) {
      return;
    }
    const { name, description } = data;

    return (
      <>
        <Modal
          centered
          open={open}
          footer={false}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <Title level={1} id={styleModal.modSerName}>
            {name}
          </Title>
          <Paragraph id={styleModal.modSerDesc}>{description}</Paragraph>
          <p className="text-right">
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
      {services.map((item, index) => {
        return (
          <>
            <div
              id={styleServices.serItems}
              key={index}
              className={`${(index + 1) % 2 !== 0 ? "bg-white" : styleServices.bgBlack
                }`}
            >
              <Row
                align={"middle"}
                className={`container ${index === 0 ? "pb-10 xl:pb-20" : "py-10 xl:py-20"}`}
              >
                <Col
                  xs={24}
                  xl={10}
                  className={`order-last ${(index + 1) % 2 === 0 ? "xl:order-first" : ""
                    }`}
                >
                  <Image
                    src={item.img}
                    quality={100}
                    width={100}
                    height={100}
                    id={styleServices.serItemsImage}
                    alt={item.title}
                  />
                </Col>
                <Col
                  xs={24}
                  xl={14}
                  className={`${(index + 1) % 2 !== 0 ? "text-right" : "float-left"
                    }`}
                >
                  <Title level={1} id={styleServices.serItemsTitle}>
                    {item.title}
                  </Title>

                  <div className={`flex ${(index + 1) % 2 !== 0 ? 'flex-row-reverse' : ''} align-middle pb-4`}>
                    <Title level={1} id={styleServices.serItemsName}>
                      {item.name}
                    </Title>
                    <div
                      className={`py-4 px-5 text-xl xl:text-2xl rounded-lg font-bold ${(index + 1) % 2 !== 0
                        ? styleServices.bgBlack + " " + "text-white order-first ml-6"
                        : "bg-white text-black order-first mr-6"
                        }`}
                    >
                      0{index + 1}.
                    </div>
                  </div>

                  <Paragraph
                    id={styleServices.serItemsContent}
                    className={`${(index + 1) % 2 !== 0 ? "" : styleGlobal.colorWhite
                      }`}
                    ellipsis={{
                      rows: 5,
                    }}
                  >
                    {item.description}
                  </Paragraph>
                  <div className="text-right">
                    <button
                      id={styleServices.serItemsBtnSeeMore}
                      className={`${styleGlobal.colorChanging}`}
                      onClick={() => {
                        setOpen(true);
                        setData(item);
                      }}
                    >
                      <i>see more</i>
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </>
        );
      })}

      <ModalService data={data} />
    </>
  );
};

export default ItemsServices;
