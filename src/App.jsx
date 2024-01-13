import DynamicComponent from "./DynamicComponent/DynamicComponent";

import dataIcon from "./DynamicComponent/assets/data-icon.svg";
import middleIcon from "./DynamicComponent/assets/icon-1.svg";
import retailerIcon from "./DynamicComponent/assets/retailer-icon.svg";
import partnerIcon from "./DynamicComponent/assets/partner-icon.svg";
import optionalIcon from "./DynamicComponent/assets/optional.svg";
import scienceIcon from "./DynamicComponent/assets/science-icon.svg";
import retailerBg from "./DynamicComponent/assets/bg-card.png";
import dataBg from "./DynamicComponent/assets/bg-card2.png";
import searchIcon from "./DynamicComponent/assets/icon-2.svg";
import arrow1 from "./DynamicComponent/assets/arrow-1.svg";
import arrow3 from "./DynamicComponent/assets/arrow-3.svg";
import arrow4 from "./DynamicComponent/assets/arrow-4.svg";
import arrow5 from "./DynamicComponent/assets/arrow-5.svg";

function App() {
  const heading = "How it Works";
  const color = "#284620";

  return (
    <div>
      <DynamicComponent
        heading={heading}
        color={color}
        middleIcon={middleIcon}
        dataIcon={dataIcon}
        retailerIcon={retailerIcon}
        partnerIcon={partnerIcon}
        optionalIcon={optionalIcon}
        scienceIcon={scienceIcon}
        dataBg={dataBg}
        retailerBg={retailerBg}
        arrow1={arrow1}
        arrow3={arrow3}
        arrow4={arrow4}
        arrow5={arrow5}
        searchIcon={searchIcon}
      />
    </div>
  );
}

export default App;
