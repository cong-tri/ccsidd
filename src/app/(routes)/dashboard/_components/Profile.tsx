/** @format */
"use client";

import React from "react";

import { Carousel, Timeline } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

import { profile } from "../_assets/profile";

import styleProfile from "../_css/profile.module.scss";
import styleGlobal from "../../../index.module.scss";

const Profile = () => {
  return (
    <>
      <section id={styleProfile.profile}>
        <Title level={1} id={styleGlobal.title}>
          PROFILE
        </Title>
        <TimeLineProfile />
      </section>
    </>
  );
};

export default Profile;

const TimeLineProfile = () => {
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
            className={styleGlobal.colorBlue1}>
            {item.title}
          </Title>
        ),
        children: (
          <Paragraph
            id={styleProfile.timelineContext}
            className={styleGlobal.colorBlue1}>
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
              className={styleGlobal.colorBlue1}>
              {item.title}
            </Title>

            <Paragraph
              id={styleProfile.timelineContext}
              className={styleGlobal.colorBlue1}>
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
      <div id={styleProfile.timeline}>
        <div className='xs:hidden md:block'>
          <Carousel
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
        </div>
        <div className='xs:block md:hidden'>
          <Carousel
            dots={false}
            draggable
            pauseOnDotsHover={true}
            pauseOnHover={true}
            // autoplay
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
      </div>
    </>
  );
};
