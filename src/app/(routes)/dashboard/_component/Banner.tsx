/** @format */

import React from "react";
import styles from "../../../index.module.scss";
const Banner = () => {
  return (
    <>
      <section id={styles.banner}>
        <div className='container flex items-center h-full'>
          <div id={styles.bannerContent}>
            <h1>
              Connecting <br /> Communication & <br /> Solutions
            </h1>
            <p>
              Connecting Communication & Solutions Private Limited (CCS) is{" "}
              <br />
              service-based operator that specialized in providing overseas call{" "}
              <br />
              service (voice, fax, and inmarsat) to corporate markets
            </p>
            <div>
              <button className='transition duration-300 ease-in-out hover:-translate-y-2'>
                <a href='#about'>More About Us</a>
              </button>
            </div>
          </div>
          <div className='w-1/4 hidden min-w-[768px]:block'></div>
        </div>
      </section>
    </>
  );
};

export default Banner;
