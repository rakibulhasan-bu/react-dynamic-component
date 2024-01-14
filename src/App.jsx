import DynamicComponent from "./DynamicComponent/DynamicComponent";

import { SiDask } from "react-icons/si";
import { GiIndianPalace } from "react-icons/gi";
import { MdSocialDistance } from "react-icons/md";
import { SiReacttable } from "react-icons/si";
import { SiGooglesearchconsole } from "react-icons/si";
import { AiOutlineApartment } from "react-icons/ai";
import { GiAnatomy } from "react-icons/gi";

function App() {
  const heading = "How it Works";
  const color = "#3D5B2B";
  const bgcolor = "#F1F4D9";
  const borderColor = "#3D5B2B";

  const leftSideComponents = [
    {
      text: "Retailer Data",
      icon: GiIndianPalace,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#367B2B",
    },
    {
      text: "Retailer Data",
      icon: GiIndianPalace,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#367B2B",
    },
    {
      text: "Retailer Data",
      icon: GiIndianPalace,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#367B2B",
    },
    {
      text: "Distributer Data",
      icon: MdSocialDistance,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#367B2B",
    },
    {
      text: "Distributer Data",
      icon: MdSocialDistance,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#367B2B",
    },
    {
      text: "Distributer Data",
      icon: MdSocialDistance,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#367B2B",
    },
  ];

  const rightSideComponents = [
    {
      text: "Internal Operations",
      icon: AiOutlineApartment,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#367B2B",
    },
    {
      text: "BI + Reporting",
      icon: SiGooglesearchconsole,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#367B2B",
    },
    {
      text: "Analytics + Data Science",
      icon: SiReacttable,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#367B2B",
    },
    {
      text: "External Partners",
      icon: GiAnatomy,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#367B2B",
    },
    {
      text: "External Partners",
      icon: GiAnatomy,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#367B2B",
    },
    {
      text: "External Partners",
      icon: GiAnatomy,
      textColor: "#3D5B65",
      bgColor: "#365B2B",
      borderColor: "#362B2B",
    },
  ];

  return (
    <div>
      <DynamicComponent
        heading={heading}
        color={color}
        bgcolor={bgcolor}
        borderColor={borderColor}
        leftSideComponents={leftSideComponents}
        rightSideComponents={rightSideComponents}
        MiddleIcon={SiDask}
      />
    </div>
  );
}

export default App;
