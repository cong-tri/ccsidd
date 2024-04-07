/** @format */

import { Row, Col } from "antd";
import Title from "antd/es/typography/Title";
import styles from "../../index.module.scss";
import FormAndMap from "./_components/FormAndMap";
const ContactPage = () => {
  return (
    <>
      <section id='contact' className='container'>
        <Row align={"middle"} id={styles.contact}>
          <Col span={24}>
            <Title level={1} id={styles.title}>
              CONTACT
            </Title>
            <FormAndMap />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ContactPage;
