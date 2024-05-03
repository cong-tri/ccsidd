/** @format */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Drawer, Menu, Row } from "antd";
import type { MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../public/images/logo.png";
import styles from "../app/index.module.scss";
const items: MenuProps["items"] = [
  {
    label: (
      <Link href={"/"} className={styles.colorBlue2}>
        Home
      </Link>
    ),
    key: "home",
  },
  {
    label: (
      <Link href={"/services"} className={styles.colorBlue2}>
        Services
      </Link>
    ),
    key: "service",
  },
  {
    label: (
      <Link href={"/resources"} className={styles.colorBlue2}>
        Resources
      </Link>
    ),
    key: "resource",
  },
  {
    label: (
      <Link href={"/contact"} className={styles.colorBlue2}>
        Contact
      </Link>
    ),
    key: "contact",
  },
];

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header>
        <Row gutter={0} align={"middle"}>
          <Col span={8}>
            <Link href={"/"}>
              <Image
                id={styles.headerLogoImg}
                className='cursor-pointer object-contain'
                src={logo}
                quality={100}
                alt='Logo Compony'
              />
            </Link>
          </Col>
          <Col xs={0} sm={0} md={16}>
            <Navbar />
          </Col>
          <Col xs={16} sm={16} md={0}>
            <MenuOutlined
              id={styles.headerCollapseBtn}
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          </Col>
        </Row>
        <Drawer
          placement='right'
          style={{ width: 250 }}
          className='float-right border-none w-auto'
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
          closable={false}>
          <Navbar isInline />
        </Drawer>
      </header>
    </>
  );
};

const Navbar = ({ isInline = false }) => {
  return (
    <>
      <Menu
        mode={isInline ? "inline" : "horizontal"}
        id={styles.headerNav}
        items={items}
      />
    </>
  );
};

export default Header;
