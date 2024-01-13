/* eslint-disable react/prop-types */
import "./DynamicComponent.css";
import bg from "../../public/bg-card.svg";

const DynamicComponent = ({ text, color, middleSvg, leftSvgs }) => {
  return (
    <div className="define-layout">
      {/* this is heading text  */}
      <h1 style={{ color }} className="heading-style">
        {text}
      </h1>

      {/* this is main div  */}
      <div className="main-div-layout">
        {/* this is left div  */}
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", position: "relative" }}>
            <div
              style={{
                backgroundImage: bg,
              }}
              className="retailer-data-style"
            >
              <img src={leftSvgs[0]} alt="" />
              <div className="text-center ml-3">
                <h2 className="text-green-1000 font-bold font-sans text-xl">
                  Retailer
                  <br />
                  Data
                </h2>
              </div>
            </div>
            <div className="absolute bottom-10 right-[-75px]">
              <img src="images/arrow-1.svg" className="w-[73px]" alt="" />
            </div>
          </div>
          <div className="flex relative">
            <div className="max-w-[240px] w-full mt-[27px] bg-[url('../images/bg-card2.png')] relative bg-no-repeat bg-[length:100%_100%] flex items-center pr-16 p-3 pt-[27px] pb-4">
              <img src={leftSvgs[1]} className="w-[54px] pt-2 ml-5" alt="" />
              <div className="text-center ml-3">
                <h2 className="text-green-1000 font-bold font-sans text-xl">
                  Distributer <br />
                  Data
                </h2>
              </div>
            </div>
            <div className="absolute top-[30px] right-[-72px]">
              <img
                src="images/arrow-1.svg"
                className="w-[73px] scale-y-[-1]"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* this is middle div  */}
        <div className="">
          <img src={middleSvg} alt="Middle svg icon" />
        </div>

        {/* this is right div  */}
        <div className="">
          <img src={middleSvg} alt="Middle svg icon" />
        </div>
      </div>
    </div>
  );
};

export default DynamicComponent;
