import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

export const Sidebar = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <BiIcons.BiCoffee />,
    cName: "nav-text",
  },
  {
    title: "Work",
    path: "/work",
    icon: <MdIcons.MdWork />,
    cName: "nav-text",
  },
  {
    title: "Questions",
    path: "/questions",
    icon: <FaIcons.FaQuestion />,
    cName: "nav-text",
  },
];
