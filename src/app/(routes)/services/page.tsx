/** @format */
import React from "react";
import ItemsServices from "./_component/ItemsServices";
import styles from "../../index.module.scss";

const ServicesPage = () => {
  return (
    <>
      <section id={styles.services}>
        <ItemsServices />
      </section>
    </>
  );
};

export default ServicesPage;
