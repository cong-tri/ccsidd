/** @format */
"use client";

import React from "react";

import { Carousel, Tabs, Timeline } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

import { profile } from "../_assets/profile";

import styleProfile from "../_css/profile.module.scss";
import styleGlobal from "../../../../styles/index.module.scss";
//
const Profile = () => {
  return (
    <>
      <section id={styleProfile.profile}>
        <div className="container">
          <Title level={1} id={styleGlobal.title}>
            PROFILE
          </Title>

          <TimeLine />
        </div>
      </section>
    </>
  );
};

export default Profile;

const TimeLine = () => {
  const useWidth = () => {
    const [width, setWidth] = React.useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    React.useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  };

  var width_screen = useWidth();

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
    if (width_screen > 768) {
      return {
        label: (
          <Title
            level={1}
            id={styleProfile.timelineLabelYear}
          >
            {item.title}
          </Title>
        ),
        children: (
          <Paragraph
            id={styleProfile.timelineContext}
          >
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
              id={styleProfile.timelineLabelYear}
            >
              {item.title}
            </Title>

            <Paragraph
              id={styleProfile.timelineContext}
            >
              {item.description}
            </Paragraph>
          </>
        ),
      };
    }
  });

  const itemsTimeline = chunkArray(contentTimeline, 5);

  return (
    <>
      <section id="profile">
        <div id={styleProfile.timeline}>
          <Tabs
            defaultActiveKey="1"
            centered
            type="card"
            size="large"
            items={[
              {
                key: "1",
                label: "1998 - 2003",
                children: <><Timeline mode={width_screen < 768 ? "left" : "alternate"} items={itemsTimeline[0]} /></>
              },
              {
                key: "2",
                label: "2004 - 2009",
                children: <><Timeline mode={width_screen < 768 ? "left" : "alternate"} items={itemsTimeline[1]} /></>
              },
              {
                key: "3",
                label: "2010 - 2016",
                children: <><Timeline mode={width_screen < 768 ? "left" : "alternate"} items={itemsTimeline[2]} /></>
              }
            ]}
          />
        </div>
      </section>
    </>
  );
};
