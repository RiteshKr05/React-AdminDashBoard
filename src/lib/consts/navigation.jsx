import React from "react";

// Import other icons as needed
import { RiDashboard2Fill } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiHumanTarget } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { LuBadgeHelp } from "react-icons/lu";
import { BsFillPersonLinesFill } from "react-icons/bs";

// Import other necessary components and libraries

// Rest of the code

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <RiDashboard2Fill />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <MdOutlineProductionQuantityLimits />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <GiHumanTarget />,
  },
  {
    key: "income",
    label: "Income",
    path: "/income",
    icon: <FcMoneyTransfer />,
  },
  {
    key: "promote",
    label: "Promote",
    path: "/promote",
    icon: <GiHumanTarget />,
  },
  {
    key: "help",
    label: "Help",
    path: "/help",
    icon: <LuBadgeHelp />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "evan",
    label: "Evan",

    path: "/evan",
    icon: <BsFillPersonLinesFill />,

    occupation: "Project Manager",
  },
];
