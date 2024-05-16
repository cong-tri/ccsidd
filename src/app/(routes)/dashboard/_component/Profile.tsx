/** @format */
"use client";
import React, { useEffect, useState } from "react";
import { Carousel, Timeline } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { RightOutlined } from "@ant-design/icons";
import styleComponent from "./css/profile.module.scss";
import styles from "../../../index.module.scss";
import { profile } from "./(assests)/profile";

const Profile = () => {
  return (
    <>
      <section id={styleComponent.profile}>
        <Title level={1} id={styles.title}>
          PROFILE
        </Title>
        <TimeLineProfile />
      </section>
    </>
  );
};

export default Profile;

const items1TimeLine = [
  {
    label: (
      <Title
        level={1}
        id={styleComponent.timelineLabelYear}
        className={styles.colorBlue1}>
        1998
      </Title>
    ),
    children: (
      <>
        <Paragraph
          id={styleComponent.timelineContext}
          className={styles.colorBlue1}>
          Incorporated May 1998 in Singapore Provided Callback Service using
          in-house Developed traditional Callback.
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
          Designed and developed DBDZ CallBack Switch using Immix.
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
          Awarded Service-Based Operator (SBO) Class License from Infocomm
          Development Authority of Singapore.
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
          Constructed VPN between Singapore to Hong Kong and Taiwan.
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
        <Paragraph id={styles.timelineContext}>
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
          CCS 1505 IDD Service launch.
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
          CCS CallBack Service Launch CCS 15050 Budget IDD Service Launch
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
        <Paragraph id={styles.timelineContext}>
          CS Mobile Dialer Launch CCS Mobile & CB-Roaming Services Launch Obtain
          (MVNO) Mobile Virtual Network Operator license from IDA Reselling
          Mobile services Incorporated subsidiary office at Batam, Indonesia.
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
        <Paragraph id={styles.timelineContext}>
          Incorporated subsidiary office at Ho Chi Minh City, Vietnam.
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
          CCS Dial 1505 apps (replace CCS Long Distance Calls apps) CCS R Tone
          Lite apps (replace R-connect apps)
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
          Awarded Service Base OperPaator (SBO) <br /> Class License from
          Infocomm <br />
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
  const useWidth = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  };
  var width_screen = useWidth();
  console.log(width_screen);
  const chunkArray = (myArray: any, chunk_size: any) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    for (index = 0; index < arrayLength; index += chunk_size) {
      const myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }
    return tempArray;
  };

  const contentTimeline = profile.info.map((item: any) => {
    if (width_screen > 576) {
      return {
        label: (
          <Title
            level={1}
            id={styleComponent.timelineLabelYear}
            className={styles.colorBlue1}>
            {item.title}
          </Title>
        ),
        children: (
          <Paragraph
            id={styleComponent.timelineContext}
            className={styles.colorBlue1}>
            {item.description}
          </Paragraph>
        ),
      };
    } else {
      return {
        children: (
          <>
            <Title
              level={1}
              id={styles.timelineLabelYear}
              className={styles.colorBlue1}>
              {item.title}
            </Title>
            <Paragraph
              id={styles.timelineContext}
              className={styles.colorBlue1}>
              {item.description}
            </Paragraph>
          </>
        ),
      };
    }
  });
  const itemsTimeline = chunkArray(contentTimeline, 5);
  console.log(itemsTimeline);

  return (
    <>
      <div id={styleComponent.timeline}>
        <Carousel
          className='block sm:hidden'
          dots={false}
          draggable
          pauseOnDotsHover={true}
          pauseOnHover={true}
          autoplay
          autoplaySpeed={3000}>
          <div>
            <Timeline mode='alternate' items={itemsTimeline[0]} />
          </div>
          <div>
            <Timeline mode='alternate' items={itemsTimeline[1]} />
          </div>
          <div>
            <Timeline mode='alternate' items={itemsTimeline[2]} />
          </div>
        </Carousel>
        <Carousel
          className='hidden sm:block'
          dots={false}
          draggable
          pauseOnDotsHover={true}
          pauseOnHover={true}
          autoplay
          autoplaySpeed={3000}>
          <div>
            <Timeline items={itemsTimeline[0]} />
          </div>
          <div>
            <Timeline items={itemsTimeline[1]} />
          </div>
          <div>
            <Timeline items={itemsTimeline[2]} />
          </div>
        </Carousel>
      </div>
    </>
  );
};
