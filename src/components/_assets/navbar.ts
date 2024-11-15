import React from "react";

type NavBar = {
  label: React.ReactNode;
  key: string;
  path: string;
};

export const listNav: NavBar[] = [
  {
    label: "Home",
    key: "home",
    path: "/",
  },
  {
    label: "Services",
    key: "service",
    path: "#services",
  },
  {
    label: "About Us",
    key: "about",
    path: "#aboutus",
  },

  {
    label: "Profile",
    key: "profile",
    path: "#profile",
  },
  {
    label: "Contact",
    key: "contact",
    path: "#contact",
  },
  {
    label: "Resources",
    key: "resource",
    path: "#resources",
  },
];
