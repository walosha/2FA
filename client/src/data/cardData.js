import React from "react";
import {
  AccountCircleRounded,
  DirectionsBus,
  DriveEtaOutlined,
  House,
} from "@material-ui/icons";

export const cardData = [
  {
    title: "Total Users",
    amount: "165",
    percentChange: 6.7,
    icon: <AccountCircleRounded />,
    colorDark: "green",
    colorLight: "#c0e0c7",
  },
  {
    title: "Total Translator",
    amount: "38",
    percentChange: 6.7,
    icon: <DriveEtaOutlined />,
    colorDark: "blue",
    colorLight: "#d0dce8",
  },
  {
    title: "Users Online",
    amount: "2",
    percentChange: 6.7,
    icon: <DirectionsBus />,
    colorDark: "#e909f4",
    colorLight: "#dec3e0",
  },
  {
    title: "Credit Remaining",
    amount: "5",
    percentChange: 6.7,
    icon: <House />,
    colorDark: "#e5af0d",
    colorLight: "#d3caad",
  },
];
