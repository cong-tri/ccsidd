/** @format */

import React from "react";

import Link from "next/link";

import { Col, Collapse, CollapseProps, Row, Tabs, TabsProps } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import {
  AudioOutlined,
  DoubleRightOutlined,
  DownloadOutlined,
  LinkOutlined,
  MobileOutlined,
  PhoneOutlined,
  ReadOutlined,
} from "@ant-design/icons";

import { premium_vq_connect } from "../_assets/premium_vq_connect";
import { mobile } from "../_assets/mobile";
import { call_back } from "../_assets/call_back";
import { call_forwarding } from "../_assets/call_forwarding";
import { rtone } from "../_assets/rtone";
import { definitions } from "../_assets/definitions";
import { download } from "../_assets/download";

import styleResource from "../_css/resources.module.scss";
import styleGlobal from "../../../index.module.scss";

const contentPremiumConnect: CollapseProps["items"] =
  premium_vq_connect.info.map((item, index) => {
    return {
      key: index + 1,
      label: item.title,
      children: (
        <Paragraph id={styleResource.resContextCollapse}>
          {item.description}
        </Paragraph>
      ),
    };
  });

const contentMobileService: CollapseProps["items"] = mobile.info.map(
  (item, index) => {
    return {
      key: index + 1,
      label: item.title,
      children: (
        <Paragraph id={styleResource.resContextCollapse}>
          {item.description}
        </Paragraph>
      ),
    };
  }
);

const contentCallBack: CollapseProps["items"] = call_back.info.map(
  (item, index) => {
    return {
      key: index + 1,
      label: item.title,
      children: (
        <Paragraph id={styleResource.resContextCollapse}>
          {item.description}
        </Paragraph>
      ),
    };
  }
);

const contentCallForward: CollapseProps["items"] = call_forwarding.info.map(
  (item, index) => {
    return {
      key: index + 1,
      label: item.title,
      children: (
        <Paragraph id={styleResource.resContextCollapse}>
          {item.description}
        </Paragraph>
      ),
    };
  }
);

const contentRTONE: CollapseProps["items"] = rtone.info.map((item, index) => {
  return {
    key: index + 1,
    label: item.title,
    children: (
      <Paragraph id={styleResource.resContextCollapse}>
        {item.description}
      </Paragraph>
    ),
  };
});

const contentDefinitions: CollapseProps["items"] = definitions.info.map(
  (item, index) => {
    return {
      key: index + 1,
      label: item.title,
      children: (
        <Paragraph id={styleResource.resContextCollapse}>
          {item.description}
        </Paragraph>
      ),
    };
  }
);

const contentDowload = download.info.map((item, index) => {
  return {
    id: index + 1,
    label: item.title,
    download_url: item.download_url,
  };
});

const TabCollapse = () => {

  const itemResourcesTab: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <>
          <div className='hidden xl:block'>{premium_vq_connect.header}</div>
          <div className='block xl:hidden'>
            <LinkOutlined />
          </div>
        </>
      ),
      children: (
        <>
          <Collapse
            items={contentPremiumConnect}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <div className='hidden xl:block'>{mobile.header}</div>
          <div className='block xl:hidden'>
            <MobileOutlined />
          </div>
        </>
      ),
      children: (
        <>
          <Collapse
            items={contentMobileService}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "3",
      label: (
        <>
          <div className='hidden xl:block'>{call_back.header}</div>
          <div className='block xl:hidden'>
            <PhoneOutlined />
          </div>
        </>
      ),
      children: (
        <>
          <Collapse
            items={contentCallBack}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "4",
      label: (
        <>
          <div className='hidden xl:block'>{call_forwarding.header}</div>
          <div className='block xl:hidden'>
            <PhoneOutlined />
          </div>
        </>
      ),
      children: (
        <>
          <Collapse
            items={contentCallForward}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "5",
      label: (
        <>
          <div className='hidden xl:block'>{rtone.header}</div>
          <div className='block xl:hidden'>
            <AudioOutlined />
          </div>
        </>
      ),
      children: (
        <>
          <Collapse
            items={contentRTONE}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "6",
      label: (
        <>
          <div className='hidden xl:block'>{definitions.header}</div>
          <div className='block xl:hidden'>
            <ReadOutlined />
          </div>
        </>
      ),
      children: (
        <>
          <Collapse
            items={contentDefinitions}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "7",
      label: (
        <>
          <div className='hidden xl:block'>{download.header}</div>
          <div className='block xl:hidden'>
            <DownloadOutlined />
          </div>
        </>
      ),
      children: (
        <>
          <Row gutter={20} align={"middle"} className='mt-4'>
            {contentDowload.map((items) => {
              return (
                <Col span={12} key={items.id} className='mb-8'>
                  <h1
                    className={`${styleGlobal.colorBlue1} xs:text-base md:text-lg lg:text-xl 3xl:text-2xl font-bold`}>
                    <DoubleRightOutlined />{" "}
                    <span className='ml-4'>{items.label}</span>
                    <Link
                      href={items.download_url}
                      className={`${styleGlobal.colorChanging} font-bold xs:text-sm md:text-base lg:text-lg 3xl:text-xl ml-6 border-0 bg-transparent`}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <i>dowload</i>
                    </Link>
                  </h1>
                </Col>
              );
            })}
          </Row>
        </>
      ),
    },
  ];

  return (
    <>
      <Tabs
        centered
        type='card'
        defaultActiveKey='1'
        items={itemResourcesTab}
      />
    </>
  );
};

export default TabCollapse;
