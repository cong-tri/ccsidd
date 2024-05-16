/** @format */

import React from "react";
import Link from "next/link";
import { Col, Collapse, CollapseProps, Row, Tabs, TabsProps } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import {
  ArrowRightOutlined,
  AudioOutlined,
  DoubleRightOutlined,
  DownloadOutlined,
  LinkOutlined,
  MobileOutlined,
  PhoneOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { premium_vq_connect } from "../(assets)/premium_vq_connect";
import { mobile } from "../(assets)/mobile";
import { call_back } from "../(assets)/call_back";
import { call_forwarding } from "../(assets)/call_forwarding";
import { rtone } from "../(assets)/rtone";
import { definitions } from "../(assets)/definitions";
import { download } from "../(assets)/download";
import styles from "../../../index.module.scss";

const contentPremiumConnect: CollapseProps["items"] =
  premium_vq_connect.info.map((item, index) => {
    return {
      key: index + 1,
      label: item.title,
      children: (
        <Paragraph id={styles.resContextCollapse}>{item.description}</Paragraph>
      ),
    };
  });

const contentMobileService: CollapseProps["items"] = mobile.info.map(
  (item, index) => {
    return {
      key: index + 1,
      label: item.title,
      children: (
        <Paragraph id={styles.resContextCollapse}>{item.description}</Paragraph>
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
        <Paragraph id={styles.resContextCollapse}>{item.description}</Paragraph>
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
        <Paragraph id={styles.resContextCollapse}>{item.description}</Paragraph>
      ),
    };
  }
);

const contentRTONE: CollapseProps["items"] = rtone.info.map((item, index) => {
  return {
    key: index + 1,
    label: item.title,
    children: (
      <Paragraph id={styles.resContextCollapse}>{item.description}</Paragraph>
    ),
  };
});

const contentDefinitions: CollapseProps["items"] = definitions.info.map(
  (item, index) => {
    return {
      key: index + 1,
      label: item.title,
      children: (
        <Paragraph id={styles.resContextCollapse}>{item.description}</Paragraph>
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
          <LinkOutlined className='block xl:hidden' />
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
          <MobileOutlined className='block xl:hidden' />
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
          <PhoneOutlined className='block xl:hidden' />
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
      label: call_forwarding.header,
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
      label: rtone.header,
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
      label: definitions.header,
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
      label: download.header,
      children: (
        <>
          <Row gutter={20} align={"middle"} className='mt-4'>
            {contentDowload.map((items) => {
              return (
                <Col span={12} key={items.id} className='mb-8'>
                  <Title level={4} className={`${styles.colorBlue1}`}>
                    <DoubleRightOutlined />{" "}
                    <span className='ml-4'>{items.label}</span>
                    <Link
                      href={items.download_url}
                      className={`${styles.colorChanging} text-lg ml-6 border-0 bg-transparent`}
                      // download
                      target='_blank'
                      rel='noopener noreferrer'>
                      <i>dowload</i>
                    </Link>
                  </Title>
                </Col>
              );
            })}
          </Row>
        </>
      ),
    },
  ];
  const itemResourcesTab1: TabsProps["items"] = [
    {
      key: "1",
      label: <LinkOutlined />,
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
      label: <MobileOutlined />,
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
      label: <PhoneOutlined />,
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
      label: <PhoneOutlined />,
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
      label: <AudioOutlined />,
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
      label: <ReadOutlined />,
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
      label: <DownloadOutlined />,
      children: (
        <>
          {contentDowload.map((items) => {
            return (
              <div key={items.id} className='mb-6'>
                <Title level={5} className={`${styles.colorBlue1}`}>
                  <span>
                    <DoubleRightOutlined />
                  </span>
                  <span className='ml-4 w-full'>{items.label}</span>
                  <Link
                    href={items.download_url}
                    className={`${styles.colorChanging} text-base ml-4`}
                    download={"file"}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <i>dowload</i>
                  </Link>
                </Title>
              </div>
            );
          })}
        </>
      ),
    },
  ];
  return (
    <>
      <Tabs
        centered
        id={styles.resourceTabDesktop}
        type='card'
        defaultActiveKey='1'
        items={itemResourcesTab}
      />
      <Tabs
        centered
        id={styles.resourceTabMobile}
        type='card'
        defaultActiveKey='1'
        items={itemResourcesTab1}
      />
    </>
  );
};

export default TabCollapse;
