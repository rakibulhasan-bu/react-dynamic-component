import DynamicComponent from "./DynamicComponent/DynamicComponent";
import middleSvgicon from "../public/icon-1.svg";
import leftSvg1 from "../public/retailer-icon.svg";
import leftSvg2 from "../public/data-icon.svg";

function App() {
  const text = "How it works";
  const color = "#284620";
  // const middleSvg = middleSvgIcon;
  const leftSvgs = [leftSvg1, leftSvg2];

  return (
    <div>
      <DynamicComponent
        text={text}
        color={color}
        leftSvgs={leftSvgs}
        middleSvg={middleSvgicon}
      />
    </div>
  );
}

export default App;
