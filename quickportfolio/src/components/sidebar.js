import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

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
  {
    title: "Datenschutz",
    path: "/datenschutz",
    icon: <FaIcons.FaDatabase />,
    cName: "nav-text",
  },
  {
    title: "Impressum",
    path: "/impressum",
    icon: <BsIcons.BsBlockquoteLeft />,
    cName: "nav-text",
  },
];
