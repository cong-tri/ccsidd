/** @format */
"use client";

import React from "react";

import Image from "next/image";

import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

import ModalService from "./ModalService";

import { ListServices, services } from "../_assets/services";

import styleServices from "../_css/services.module.scss";
import styleGlobal from "../../../../styles/index.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";

const ItemsServices = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<ListServices>();

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
                justify={"space-between"}
                className={`container ${index === 0 ? "pb-10 xl:pb-20" : "py-10 xl:py-20"
                  }`}
              >
                <Col
                  xs={24}
                  xl={10}
                  id={styleServices.serItemsOverlay}
                  className={`order-last ${(index + 1) % 2 === 0 ? "xl:order-first" : ""
                    }`}
                >
                  <Image
                    src={item.img}
                    quality={100}
                    width={450}
                    height={400}
                    objectFit="contain"
                    id={styleServices.serItemsImage}
                    alt={item.title}
                  />

                  <div className={styleServices.overlay}>
                    <Title level={1}>{item.name}</Title>
                    <Paragraph
                      ellipsis={{
                        rows: 5,
                      }}
                    >
                      {item.description}
                    </Paragraph>
                    <div className="text-right">
                      <button onClick={() => {
                        setOpen(true);
                        setData(item);
                      }}>View more <ArrowRightOutlined /></button>
                    </div>
                  </div>
                </Col>

                <Col
                  xs={24}
                  xl={13}
                  className={`${(index + 1) % 2 !== 0 ? "text-right" : "float-left"
                    }`}
                >
                  <Title level={1} id={styleServices.serItemsTitle}>
                    {item.title}
                  </Title>

                  <div
                    className={`flex ${(index + 1) % 2 !== 0 ? "flex-row-reverse" : ""
                      } align-middle pb-4`}
                  >
                    <Title level={1} id={styleServices.serItemsName}>
                      {item.name}
                    </Title>
                    <div
                      className={`py-4 px-5 text-xl xl:text-2xl rounded-lg font-bold ${(index + 1) % 2 !== 0
                        ? styleServices.bgBlack +
                        " " +
                        "text-white order-first ml-6"
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
                </Col>
              </Row>
            </div>
          </>
        );
      })}

      <ModalService data={data} open={open} setOpen={setOpen} />
    </>
  );
};

export default ItemsServices;
