/** @format */

import React from "react";
import { Carousel, Col, Row, Timeline } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { RightOutlined } from "@ant-design/icons";
import styles from "../../../index.module.scss";
const Profile = () => {
  return (
    <>
      <section id='profile'>
        <Row align={"middle"} id={styles.profile}>
          <Col span={24} className='container'>
            <Title level={1} id={styles.title}>
              PROFILE
            </Title>
            <TimeLineProfile />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Profile;

const items1TimeLine = [
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        1998
      </Title>
    ),
    children: (
      <>
        <Paragraph id={styles.timelineContext}>
          Incorporated May 1998 in Singapore <br />
          ProvPaided Callback Service using in-house <br />
          Developed traditional Callback
        </Paragraph>
      </>
    ),
  },
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        1999
      </Title>
    ),
    children: (
      <>
        <Paragraph id={styles.timelineContext}>
          Designed and developed DBDZ <br /> CallBack Switch using Immix
        </Paragraph>
      </>
    ),
  },
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2001
      </Title>
    ),
    children: (
      <>
        <Paragraph id={styles.timelineContext}>
          Awarded Service Base <br />
          OperPaator (SBO) Class License from Infocomm <br />
          Development Authority of Singapore
        </Paragraph>
      </>
    ),
  },
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2002
      </Title>
    ),
    children: (
      <>
        <Paragraph id={styles.timelineContext}>
          Constructed VPN between
          <br /> Singapore to Hong Kong and Taiwan
        </Paragraph>
      </>
    ),
  },
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2003
      </Title>
    ),
    children: (
      <>
        <Paragraph
          id={styles.timelineContext}
          ellipsis={{
            rows: 3,
            expandable: true,
            symbol: <RightOutlined className={styles.colorBlue1} />,
          }}>
          Awarded Services - Based Operator (SBO) Individual License from
          Infocomm Development Authority (IDA) of Singapore. Construct Managed
          VoIP Network between Singapore and Korea. Obtain 1505 CCS IDD Access
          Code from IDA.
        </Paragraph>
      </>
    ),
  },
];
const items2TimeLine = [
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2004
      </Title>
    ),
    children: (
      <>
        <Paragraph id={styles.timelineContext}>
          CCS 1505 IDD Service launch
        </Paragraph>
      </>
    ),
  },
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2005
      </Title>
    ),
    children: (
      <>
        <Paragraph id={styles.timelineContext}>
          CS International Call Forwarding (ICF) Service Launch
        </Paragraph>
      </>
    ),
  },
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2006
      </Title>
    ),
    children: (
      <>
        <Paragraph id={styles.timelineContext}>
          CCS CallBack Service Launch <br /> CCS 15050 Budget IDD Service Launch
        </Paragraph>
      </>
    ),
  },
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2008
      </Title>
    ),
    children: (
      <>
        <Paragraph
          id={styles.timelineContext}
          ellipsis={{
            rows: 3,
            expandable: true,
            symbol: <RightOutlined className={styles.colorBlue1} />,
          }}>
          CS Mobile Dialer Launch <br /> CCS Mobile & CB-Roaming Services Launch
          Obtain <br /> (MVNO) Mobile Virtual Network Operator <br /> license
          from IDA Reselling Mobile services <br />
          Incorporated subsidiary office at Batam, Indonesia
        </Paragraph>
      </>
    ),
  },
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2009
      </Title>
    ),
    children: (
      <>
        <Paragraph id={styles.timelineContext}>
          Launch R-connect service apps <br /> Launch CCS Long Distance Calls
          appPas
        </Paragraph>
      </>
    ),
  },
];
const items3TimeLine = [
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2010
      </Title>
    ),
    children: (
      <>
        <Paragraph id={styles.timelineContext}>
          Acquired Digiphonic Systems Pte Ltd.
        </Paragraph>
      </>
    ),
  },
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2014
      </Title>
    ),
    children: (
      <>
        <Paragraph
          id={styles.timelineContext}
          ellipsis={{
            rows: 3,
            expandable: true,
            symbol: <RightOutlined className={styles.colorBlue1} />,
          }}>
          Incorporated subsidiary office at Ho Chi Minh City, Vietnam
        </Paragraph>
      </>
    ),
  },
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2015
      </Title>
    ),
    children: (
      <>
        <Paragraph id={styles.timelineContext}>
          CCS Dial 1505 apps (replace CCS Long Distance Calls apps) <br /> CCS R
          TonPae Lite apps (replace R-connect apps)
        </Paragraph>
      </>
    ),
  },
  {
    label: (
      <Title level={1} id={styles.timelineLabelYear}>
        2016
      </Title>
    ),
    children: (
      <>
        <Paragraph id={styles.timelineContext}>
          Abtain Digit 3 numbers (L3VL) form IDA R Tone apps launch
        </Paragraph>
      </>
    ),
  },
];
const items4TimeLine = [
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          1998
        </Title>
        <Paragraph id={styles.timelineContext}>
          Incorporated May 1998 in Singapore <br />
          ProvPaided Callback Service using in-house <br />
          Developed traditional Callback
        </Paragraph>
      </>
    ),
  },
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          1999
        </Title>
        <Paragraph id={styles.timelineContext}>
          Designed and developed DBDZ <br /> CallBack Switch using Immix
        </Paragraph>
      </>
    ),
  },
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2001
        </Title>
        <Paragraph id={styles.timelineContext}>
          Awarded Service Base <br />
          OperPaator (SBO) Class License from Infocomm <br />
          Development Authority of Singapore
        </Paragraph>
      </>
    ),
  },
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2002
        </Title>
        <Paragraph id={styles.timelineContext}>
          Constructed VPN between
          <br /> Singapore to Hong Kong and Taiwan
        </Paragraph>
      </>
    ),
  },
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2003
        </Title>
        <Paragraph
          id={styles.timelineContext}
          ellipsis={{
            rows: 3,
            expandable: true,
            symbol: <RightOutlined className={styles.colorBlue1} />,
          }}>
          Awarded Services - Based Operator (SBO) Individual License from
          Infocomm Development Authority (IDA) of Singapore. Construct Managed
          VoIP Network between Singapore and Korea. Obtain 1505 CCS IDD Access
          Code from IDA.
        </Paragraph>
      </>
    ),
  },
];
const items5TimeLine = [
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2004
        </Title>
        <Paragraph id={styles.timelineContext}>
          CCS 1505 IDD Service launch
        </Paragraph>
      </>
    ),
  },
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2005
        </Title>
        <Paragraph id={styles.timelineContext}>
          CS International Call Forwarding (ICF) Service Launch
        </Paragraph>
      </>
    ),
  },
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2006
        </Title>
        <Paragraph id={styles.timelineContext}>
          CCS CallBack Service Launch <br /> CCS 15050 Budget IDD Service Launch
        </Paragraph>
      </>
    ),
  },
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2008
        </Title>
        <Paragraph
          id={styles.timelineContext}
          ellipsis={{
            rows: 3,
            expandable: true,
            symbol: <RightOutlined className={styles.colorBlue1} />,
          }}>
          CS Mobile Dialer Launch <br /> CCS Mobile & CB-Roaming Services Launch
          Obtain <br /> (MVNO) Mobile Virtual Network Operator <br /> license
          from IDA Reselling Mobile services <br />
          Incorporated subsidiary office at Batam, Indonesia
        </Paragraph>
      </>
    ),
  },
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2009
        </Title>
        <Paragraph id={styles.timelineContext}>
          Launch R-connect service apps <br /> Launch CCS Long Distance Calls
          appPas
        </Paragraph>
      </>
    ),
  },
];
const items6TimeLine = [
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2010
        </Title>
        <Paragraph id={styles.timelineContext}>
          Acquired Digiphonic Systems Pte Ltd.
        </Paragraph>
      </>
    ),
  },
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2014
        </Title>
        <Paragraph id={styles.timelineContext}>
          Incorporated subsidiary office at Ho Chi Minh City, Vietnam
        </Paragraph>
      </>
    ),
  },
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2015
        </Title>
        <Paragraph id={styles.timelineContext}>
          CCS Dial 1505 apps (replace CCS Long Distance Calls apps) <br /> CCS R
          TonPae Lite apps (replace R-connect apps)
        </Paragraph>
      </>
    ),
  },
  {
    children: (
      <>
        <Title level={1} id={styles.timelineLabelYear}>
          2016
        </Title>
        <Paragraph id={styles.timelineContext}>
          Abtain Digit 3 numbers (L3VL) form IDA R Tone apps launch
        </Paragraph>
      </>
    ),
  },
];
const TimeLineProfile = () => {
  return (
    <>
      <div id={styles.timeline}>
        <Carousel
          id={styles.timelineCarousel1}
          dots={false}
          draggable
          pauseOnDotsHover={true}
          pauseOnHover={true}
          autoplay
          autoplaySpeed={3000}>
          <div className='h-auto'>
            <Timeline mode='alternate' items={items1TimeLine} />
          </div>
          <div className='h-auto'>
            <Timeline mode='alternate' items={items2TimeLine} />
          </div>
          <div className='h-auto'>
            <Timeline mode='alternate' items={items3TimeLine} />
          </div>
        </Carousel>
        <Carousel
          id={styles.timelineCarousel2}
          dots={false}
          pauseOnDotsHover={true}
          pauseOnHover={true}
          autoplay
          autoplaySpeed={3000}>
          <div>
            <Timeline items={items4TimeLine} />
          </div>
          <div>
            <Timeline items={items5TimeLine} />
          </div>
          <div>
            <Timeline items={items6TimeLine} />
          </div>
        </Carousel>
      </div>
    </>
  );
};
