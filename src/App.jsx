import DynamicComponent from "./DynamicComponent/DynamicComponent";

import partnerIcon from "./DynamicComponent/assets/partner-icon.svg";
import optionalIcon from "./DynamicComponent/assets/optional.svg";
import scienceIcon from "./DynamicComponent/assets/science-icon.svg";
import searchIcon from "./DynamicComponent/assets/icon-2.svg";
import arrow3 from "./DynamicComponent/assets/arrow-3.svg";
import arrow4 from "./DynamicComponent/assets/arrow-4.svg";
import arrow5 from "./DynamicComponent/assets/arrow-5.svg";

import { SiDask } from "react-icons/si";
import { GiIndianPalace } from "react-icons/gi";
import { MdSocialDistance } from "react-icons/md";

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
      icon: optionalIcon,
      arrow: arrow4,
    },
    {
      text: "BI + Reporting",
      icon: searchIcon,
      arrow: arrow3,
    },
    {
      text: "Analytics + Data Science",
      icon: scienceIcon,
      arrow: arrow5,
    },
    {
      text: "External Partners",
      icon: partnerIcon,
      arrow: arrow5,
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
