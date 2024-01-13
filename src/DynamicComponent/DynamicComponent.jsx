/* eslint-disable react/prop-types */
import "./DynamicComponent.css";

const DynamicComponent = ({
  heading,
  middleIcon,
  dataIcon,
  retailerIcon,
  partnerIcon,
  optionalIcon,
  scienceIcon,
  retailerBg,
  searchIcon,
  dataBg,
  arrow1,
  arrow3,
  arrow4,
  arrow5,
}) => {
  return (
    <div className="max-w-[800px] mx-auto text-center mt-5">
      {/* this is heading text  */}
      <h2 className="text-green-1000 font-bold font-sans text-4xl">
        {heading}
      </h2>

      {/* this is main div  */}
      <div className="flex items-center mt-10">
        {/* this is left div  */}
        <div className="relative">
          <div className="flex relative">
            <div
              className={`max-w-[240px] w-full relative flex items-center pr-[30px] p-3 pt-[27px] pb-[33px]`}
            >
              <div className="w-full h-full absolute top-0 left-0 z-0">
                <img src={retailerBg} alt="" className="w-full h-full" />
              </div>
              <img src={retailerIcon} alt="" className="z-10" />
              <div className="text-center ml-3 z-10">
                <h2 className="text-green-1000 font-bold font-sans text-xl">
                  Retailer
                  <br />
                  Data
                </h2>
              </div>
            </div>

            <div className="absolute bottom-10 right-[-75px]">
              <img src={arrow1} className="w-[73px]" alt="" />
            </div>
          </div>

          <div className="flex relative">
            <div
              className={`max-w-[240px] w-full mt-[27px] relative flex items-center pr-16 p-3 pt-[27px] pb-4`}
            >
              <div className="w-full h-full absolute top-0 left-0 z-0">
                <img src={dataBg} alt="" className="w-full h-full" />
              </div>
              <img src={dataIcon} className="w-[54px] pt-2 ml-5 z-10" alt="" />
              <div className="text-center ml-3 z-10">
                <h2 className="text-green-1000 font-bold font-sans text-xl">
                  Distributer <br />
                  Data
                </h2>
              </div>
            </div>
            <div className="absolute top-[30px] right-[-72px]">
              <img src={arrow1} className="w-[73px] scale-y-[-1]" alt="" />
            </div>
          </div>
        </div>

        {/* this is middle div  */}
        <div className="bg-gray-1000 ml-[100px] px-[34px] py-[18px] rounded-xl border-2 border-green-1100">
          <img src={middleIcon} alt="" />
        </div>

        {/* this is right div  */}
        <div className="relative ml-[88px]">
          <div className="flex mb-2 relative">
            <div className="absolute -bottom-2 left-[-75px]">
              <img src={arrow4} alt="" />
            </div>
            <div className="max-w-[240px] w-full bg-gray-1000 border-2 rounded-2xl border-green-1100 flex items-center pr-[33px] pl-3 pt-[2px] pb-[7px]">
              <img src={optionalIcon} alt="" />
              <div className="text-center ml-3">
                <h2 className="text-green-1000 leading-5 font-bold font-sans text-lg">
                  Internal
                  <br />
                  Operations
                </h2>
              </div>
            </div>
          </div>
          <div className="flex mb-2 relative">
            <div className="absolute bottom-[18px] left-[-75px]">
              <img src={arrow3} alt="" />
            </div>
            <div className="max-w-[240px] w-full bg-gray-1000 border-2 rounded-2xl border-green-1100 flex items-center pr-5 pl-3 py-1">
              <img src={searchIcon} alt="" />
              <div className="text-center ml-3">
                <h2 className="text-green-1000 leading-5 font-bold font-sans text-lg">
                  BI + Reporting
                </h2>
              </div>
            </div>
          </div>
          <div className="flex mb-2 relative">
            <div className="absolute bottom-[18px] left-[-75px]">
              <img src={arrow3} alt="" />
            </div>
            <div className="max-w-[240px] w-full bg-gray-1000 border-2 rounded-2xl border-green-1100 flex items-center pr-2.5 pl-3 pt-[2px] pb-[7px]">
              <img src={scienceIcon} alt="" />
              <div className="text-center ml-3">
                <h2 className="text-green-1000 leading-5 font-bold font-sans text-lg">
                  Analytics + Data Science
                </h2>
              </div>
            </div>
          </div>
          <div className="flex relative">
            <div className="absolute bottom-10 left-[-75px]">
              <img src={arrow5} alt="" />
            </div>
            <div className="max-w-[240px] w-full bg-gray-1000 border-2 rounded-2xl border-green-1100 flex items-center pr-[33px] pl-3 pt-[2px] pb-[7px]">
              <img src={partnerIcon} alt="" />
              <div className="text-center ml-3">
                <h2 className="text-green-1000 leading-5 font-bold font-sans text-xl">
                  External
                  <br />
                  Partners
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicComponent;
