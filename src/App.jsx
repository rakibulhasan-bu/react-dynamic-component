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
  const leftTopComponent = {
    text: "Retailer Data",
    icon: GiIndianPalace,
  };

  const leftBottomComponent = {
    text: "Distributer Data",
    icon: MdSocialDistance,
  };

  const rightSideComponents = [
    {
      text: "Internal Operations",
      icon: AiOutlineApartment,
    },
    {
      text: "BI + Reporting",
      icon: SiGooglesearchconsole,
    },
    {
      text: "Analytics + Data Science",
      icon: SiReacttable,
    },
    {
      text: "External Partners",
      icon: GiAnatomy,
    },
  ];

  return (
    <div>
      <DynamicComponent
        heading={heading}
        color={color}
        bgcolor={bgcolor}
        borderColor={borderColor}
        leftTopComponent={leftTopComponent}
        leftBottomComponent={leftBottomComponent}
        rightSideComponents={rightSideComponents}
        MiddleIcon={SiDask}
      />
    </div>
  );
}

export default App;
