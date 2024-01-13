import DynamicComponent from "./DynamicComponent/DynamicComponent";
import middleSvgicon from "./DynamicComponent/assets/icon-1.svg";
import leftSvg1 from "./DynamicComponent/assets/retailer-icon.svg";
import leftSvg2 from "./DynamicComponent/assets/partner-icon.svg";

function App() {
  const heading = "How it Works";
  const color = "#284620";
  // const middleSvg = middleSvgIcon;
  const leftSvgs = [leftSvg1, leftSvg2];

  return (
    <div>
      <DynamicComponent
        heading={heading}
        color={color}
        leftSvgs={leftSvgs}
        middleSvg={middleSvgicon}
      />
    </div>
  );
}

export default App;
