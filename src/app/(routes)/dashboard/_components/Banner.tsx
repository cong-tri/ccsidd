/** @format */

import React from "react";
import styleComponent from "../_css/banner.module.scss";
import styles from "../../../index.module.scss";
const Banner = () => {
  return (
    <>
      <section id={styleComponent.banner}>
        <div className='container flex items-center h-full'>
          <div id={styleComponent.bannerContent}>
            <h1 className={styles.colorBlue1}>
              Connecting <br /> Communication & <br /> Solutions
            </h1>
            <p className={styles.colorBlue1}>
              Connecting Communication & Solutions Private Limited (CCS) is{" "}
              <br />
              service-based operator that specialized in providing overseas call{" "}
              <br />
              service (voice, fax, and inmarsat) to corporate markets
            </p>
            <div>
              <button className='transition duration-300 ease-in-out hover:-translate-y-2'>
                <a href='#about' className={styles.colorWhite}>
                  More About Us
                </a>
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
