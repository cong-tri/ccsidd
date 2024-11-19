/** @format */
"use client";

import React from "react";

import Image from "next/image";

import { Carousel, Col, Row } from "antd";

import styleComponent from "../_css/banner.module.scss";
import styles from "../../../../styles/index.module.scss";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "100vh",
  color: "black",
  lineHeight: "100vh",
  textAlign: "center",
  width: "100%",
};

type BannerList = {
  slogan: React.ReactElement;
  label: string;
  content: string;
  btnContent: string;
  pathname: string;
};

const listBanner: BannerList[] = [
  {
    slogan: (
      <>
        Connecting <br /> Communication & <br /> Solutions
      </>
    ),
    label: "Connecting Communication & Solutions Private Limited (CCS)",
    content:
      "(CCS) is service-based operator that specialized in providing overseas calls (Voice, Fax and Inmarsat), roaming solutions and mobile services to corporate market in Singapore.",
    btnContent: "More About Us",
    pathname: "#aboutus",
  },
  {
    slogan: (
      <>
        Bridging <br /> Globally
      </>
    ),
    label: "",
    content: "",
    btnContent: "Services of CCSIDD",
    pathname: "#services",
  },
];

const Banner = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Carousel
        afterChange={onChange}
        dotPosition="right"
        // draggable
        // autoplay
        autoplaySpeed={5000}
      >
        {listBanner.map((items, index) => {
          return (
            <div key={index}>
              <section id={styleComponent.banner}>
                <div className="relative h-screen w-full mt-8">
                  <h1 id={styleComponent.bannerSlogan}>{items.slogan}</h1>

                  <div className="absolute container w-full h-full top-48">
                    <Row align={"top"} justify={"center"} gutter={[24, 24]}>
                      <Col xs={10} md={14}>
                        <Image
                          src={"/images/CCS-logo.png"}
                          alt="Logo CCSIDD"
                          className="float-right h-full"
                          width={300}
                          height={400}
                          quality={100}
                        />
                      </Col>
                      <Col xs={14} md={10}>
                        <div id={styleComponent.bannerContent}>
                          <h1>{items.label}</h1>
                          <p>{items.content}</p>
                          <div>
                            <button className="transition duration-300 ease-in-out hover:-translate-y-2">
                              <a href={items.pathname}>{items.btnContent}</a>
                            </button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Banner;

{
  /* <div className="flex items-center h-full">
              <div id={styleComponent.bannerContent}>
                <h1 className={styles.colorBlue1}>
                  Connecting <br /> Communication & <br /> Solutions
                </h1>

                <p className={styles.colorBlue1}>
                  Connecting Communication & Solutions Private Limited (CCS) is{" "}
                  <br />
                  service-based operator that specialized in providing overseas
                  call <br />
                  service (voice, fax, and inmarsat) to corporate markets
                </p>

                <div>
                  <button className="transition duration-300 ease-in-out hover:-translate-y-2">
                    <a href="#aboutus" className={styles.colorWhite}>
                      More About Us
                    </a>
                  </button>
                </div>
              </div>

              <div className="w-1/4 hidden min-w-[768px]:block"></div>
            </div> */
}
