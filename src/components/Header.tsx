/** @format */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Col, Drawer, Menu, Row } from "antd";
import type { MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import logo from "../../public/images/logo.png";

import styleHeader from "./css/header.module.scss";
import styleGlobal from "../styles/index.module.scss";

import { listNav } from "./_assets/navbar";

const items: MenuProps["items"] = listNav.map((items) => {
  return {
    label: (
      <Link href={items.path} className={styleGlobal.colorBlue2}>
        {items.label}
      </Link>
    ),
    key: items.key,
  };
});

const Header: React.FC = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState('home');

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentPath(e.key);
    console.log(e.key);
  }

  return (
    <>
      <header>
        <Row gutter={0} align={"middle"} justify={"space-between"}>
          <Col span={"auto"}>
            <Link href={"/"}>
              <Image
                id={styleHeader.headerLogoImg}
                className="cursor-pointer object-contain"
                src={logo}
                quality={100}
                alt="Logo Compony"
              />
            </Link>
          </Col>

          <Col span={"auto"}>
            <MenuOutlined
              className={styleGlobal.colorBlue2}
              id={styleHeader.headerCollapseBtn}
              onClick={() => {
                setOpenMenu(true);
              }}
            />
          </Col>
        </Row>

        <Drawer
          placement="right"
          style={{ width: 350 }}
          className="float-right border-none w-auto"
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
          closable={true}
        >
          <Menu
            mode="vertical"
            id={styleHeader.headerNav}
            items={items}
            defaultSelectedKeys={[currentPath]}
            selectedKeys={[currentPath]}
            onClick={onClick}
          />
        </Drawer>
      </header>
    </>
  );
};

export default Header;
