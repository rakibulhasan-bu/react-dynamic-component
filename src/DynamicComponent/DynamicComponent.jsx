/* eslint-disable react/prop-types */
import "./DynamicComponent.css";

const DynamicComponent = ({
  textColor,
  bgcolor,
  borderColor,
  heading,
  middleComponents,
  leftSideComponents,
  rightSideComponents,
}) => {
  const MiddleIcon = middleComponents?.icon;
  const length = rightSideComponents.length;
  const lengthLeft = leftSideComponents.length;
  return (
    <div className="md:max-w-[800px] overflow-hidden  mx-auto text-center mt-5 px-2 pb-5 md:px-3 lg:px-0">
      {/* this is heading text  */}
      <h2
        style={{ color: textColor }}
        className="w-full font-bold text-center font-sans text-2xl md:text-4xl"
      >
        {heading}
      </h2>

      {/* this is main div  */}
      <div className="w-full flex items-center justify-center mx-auto mt-3 md:mt-5 lg:mt-10">
        {/* this is left div  */}
        <div className="relative">
          {leftSideComponents?.map((leftDiv, index) => {
            const Icon = leftDiv?.icon;
            return (
              <div key={leftDiv?.text + toString(index)} className="">
                {(lengthLeft === 1 && index === 0) ||
                (lengthLeft === 2 && index === 0) ||
                (lengthLeft === 3 && (index === 0 || index === 1)) ||
                (lengthLeft === 4 && (index === 0 || index === 1)) ||
                (lengthLeft === 5 &&
                  (index === 0 || index === 1 || index === 2)) ||
                (lengthLeft === 6 &&
                  (index === 0 || index === 1 || index === 2)) ? (
                  <div className="flex relative">
                    <div
                      className={`${
                        lengthLeft >= 3
                          ? "w-[120px] md:w-[150px] lg:w-[150px]"
                          : "w-[120px] md:w-[150px] lg:w-[150px]"
                      } relative flex items-center p-3 md:pt-4 pt-2 lg:pt-4 pb-[18px]`}
                    >
                      <div className=" absolute top-0 left-0 z-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 249 133"
                          className={`w-[120px] md:w-[150px] lg:w-[150px]  h-[55px] md:h-[75px] lg:h-[75px]`}
                        >
                          <g
                            fill="none"
                            stroke={leftDiv?.borderColor}
                            strokeWidth="2"
                          >
                            <path
                              d="M224.834 19.535a18.01 18.01 0 00-19.252-16.676L19.081 16.227A18.01 18.01 0 002.404 35.48l4.862 67.826a18.01 18.01 0 0019.252 16.676l186.501-13.368a18.01 18.01 0 0016.677-19.252l-4.862-67.826"
                              vectorEffect="non-scaling-stroke"
                            ></path>
                            <path
                              d="M51 120.6q-.06.01-.09.04-.04.06-.04-.02 0 0 0 0 .01-.06.07-.06c3.54.25 7.02-.23 10.61-.27q76.5-.72 153.59-1.27 7.79-.06 11-1.39 7.39-3.06 10.21-10.55 1.27-3.39 1.16-9.62-.5-28.78-.54-60.26-.01-6.79-1.08-10.11-2.1-6.45-8.57-10.15-.69-.4-.63.4 2.3 33.21 4.76 66.21.55 7.48-.53 10.81-2.85 8.76-10.9 12.54-3.26 1.53-9.71 1.98-71.73 5.11-149.94 10.55-5.08.36-9.37 1.17"
                              vectorEffect="non-scaling-stroke"
                            ></path>
                            <path
                              d="M239.62 29.89q-1.59-1.24-.97.68.23.71.23 1.48.15 32.96.61 64.85.09 6.32-.89 9.74c-2.3 8.06-10.16 14.15-18.35 14.23q-93.85.88-187.96 1.65c-.86.01-1.66-.15-2.5-.19q-.86-.04-.15.45 5.04 3.55 10.59 3.66 92.2 1.79 185.81 3.82c8.06.18 14.67-3.62 17.97-11q1.44-3.22 1.53-10.6.35-27.5 1.15-55.79.26-9.24-.15-11.67-1.15-6.85-6.92-11.31"
                              vectorEffect="non-scaling-stroke"
                            ></path>
                          </g>
                          <path
                            fill={leftDiv?.borderColor}
                            d="M238.43 26.7q9.24 5.63 10.13 15.27.37 3.94.21 9.24-.86 28.65-1.26 58.17-.07 5.9-1.08 9.1c-2.72 8.65-10.96 13.96-20.05 13.77q-93.17-1.98-185.68-3.86c-5.55-.11-10.55-1.98-14.38-5.95a1.47 1.46 69.3 00-.97-.44c-8.14-.33-14.31-4-18.18-11.38q-1.77-3.35-2.23-10.69-2-31.39-4.31-60.06-.54-6.7.4-10.67c2.16-9.13 10.04-14.47 19.1-15.1q91.42-6.41 182.58-12.97 6.74-.48 9.82.53 9.3 3.06 12.87 11.71.27.66.92.95 7.87 3.44 11.24 11.38.27.64.87 1zm-13.596-7.165a18.01 18.01 0 00-19.252-16.676L19.081 16.227A18.01 18.01 0 002.404 35.48l4.862 67.826a18.01 18.01 0 0019.252 16.676l186.501-13.368a18.01 18.01 0 0016.677-19.252l-4.862-67.826zM51 120.6q-.06.01-.09.04-.04.06-.04-.02.01-.06.07-.06c3.54.25 7.02-.23 10.61-.27q76.5-.72 153.59-1.27 7.79-.06 11-1.39 7.39-3.06 10.21-10.55 1.27-3.39 1.16-9.62-.5-28.78-.54-60.26-.01-6.79-1.08-10.11-2.1-6.45-8.57-10.15-.69-.4-.63.4 2.3 33.21 4.76 66.21.55 7.48-.53 10.81-2.85 8.76-10.9 12.54-3.26 1.53-9.71 1.98-71.73 5.11-149.94 10.55-5.08.36-9.37 1.17zm188.62-90.71q-1.59-1.24-.97.68.23.71.23 1.48.15 32.96.61 64.85.09 6.32-.89 9.74c-2.3 8.06-10.16 14.15-18.35 14.23q-93.85.88-187.96 1.65c-.86.01-1.66-.15-2.5-.19q-.86-.04-.15.45 5.04 3.55 10.59 3.66 92.2 1.79 185.81 3.82c8.06.18 14.67-3.62 17.97-11q1.44-3.22 1.53-10.6.35-27.5 1.15-55.79.26-9.24-.15-11.67-1.15-6.85-6.92-11.31z"
                          ></path>
                          <rect
                            width="223"
                            height="104.02"
                            x="-111.5"
                            y="-52.01"
                            fill={leftDiv?.bgColor}
                            rx="18.01"
                            transform="rotate(-4.1 915.977 -1590.348)"
                          ></rect>
                          <path
                            fill={leftDiv?.bgColor}
                            d="M51 120.6q4.29-.81 9.37-1.17 78.21-5.44 149.94-10.55 6.45-.45 9.71-1.98 8.05-3.78 10.9-12.54 1.08-3.33.53-10.81-2.46-33-4.76-66.21-.06-.8.63-.4 6.47 3.7 8.57 10.15 1.07 3.32 1.08 10.11.04 31.48.54 60.26.11 6.23-1.16 9.62-2.82 7.49-10.21 10.55-3.21 1.33-11 1.39-77.09.55-153.59 1.27c-3.59.04-7.07.52-10.61.27q-.06 0-.07.06 0 .08.04.02.03-.03.09-.04z"
                          ></path>
                          <path
                            fill={leftDiv?.bgColor}
                            d="M239.62 29.89q5.77 4.46 6.92 11.31.41 2.43.15 11.67-.8 28.29-1.15 55.79-.09 7.38-1.53 10.6c-3.3 7.38-9.91 11.18-17.97 11q-93.61-2.03-185.81-3.82-5.55-.11-10.59-3.66-.71-.49.15-.45c.84.04 1.64.2 2.5.19q94.11-.77 187.96-1.65c8.19-.08 16.05-6.17 18.35-14.23q.98-3.42.89-9.74-.46-31.89-.61-64.85 0-.77-.23-1.48-.62-1.92.97-.68z"
                          ></path>
                        </svg>
                      </div>
                      <Icon
                        style={{ color: leftDiv?.textColor || textColor }}
                        className={`z-10  ${
                          lengthLeft >= 3
                            ? "text-4xl md:text-5xl"
                            : "text-4xl md:text-5xl"
                        } `}
                      />
                      <div className="text-center ml-1 z-10">
                        <h2
                          style={{ color: leftDiv?.textColor || textColor }}
                          className={`font-bold font-sans  ${
                            lengthLeft >= 3
                              ? "text-xs md:text-sm"
                              : "text-xs md:text-sm"
                          }`}
                        >
                          {leftDiv?.text}
                        </h2>
                      </div>
                    </div>

                    {(lengthLeft === 1 && index === 0) ||
                    (lengthLeft === 3 && index === 1) ||
                    (lengthLeft === 5 && index === 2) ? (
                      <div
                        className={`absolute bottom-10  -right-[28px] top-2 md:top-[15px] md:right-[-65px]`}
                      >
                        <svg
                          className={`absolute w-[24px] md:w-14 lg:w-[50px] top-5 z-10 -left-8 md:-left-16 lg:left-[-65px]`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 65 23"
                        >
                          <path
                            fill={leftDiv?.borderColor || borderColor}
                            d="M64.061 12.56a1.502 1.502 0 000-2.121L54.515.893a1.502 1.502 0 00-2.122 0 1.502 1.502 0 000 2.122l8.486 8.485-8.486 8.485a1.502 1.502 0 000 2.122 1.502 1.502 0 002.122 0l9.546-9.546zM0 13h63v-3H0v3z"
                          ></path>
                        </svg>
                      </div>
                    ) : (
                      <div
                        className={`absolute bottom-10 ${
                          lengthLeft >= 3
                            ? " -right-6 top-[25px] md:right-[-55px]"
                            : "  -right-6 top-[25px] md:right-[-55px]"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 59 30"
                          className={`${
                            lengthLeft >= 3
                              ? "w-6 md:w-[50px] h-5 md:h-[30px] "
                              : "w-6 md:w-[50px] h-5 md:h-[30px] "
                          }`}
                        >
                          <path
                            fill={leftDiv?.borderColor || borderColor}
                            d="M2.33.264A1.5 1.5 0 101.67 3.19L2.33.264zm55.21 26.84a1.5 1.5 0 001.193-1.755L56.2 12.089a1.501 1.501 0 00-2.947.563l2.25 11.787-11.786 2.25a1.5 1.5 0 10.563 2.948l13.26-2.533zM1.67 3.19l15.28 3.46.662-2.925L2.33.264 1.669 3.19zM43.84 18.329l12.576 8.543 1.686-2.482-12.576-8.543-1.686 2.482zM16.949 6.65A78.838 78.838 0 0143.84 18.329l1.686-2.482A81.864 81.864 0 0017.61 3.725l-.662 2.926z"
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex relative">
                    <div
                      className={`${
                        lengthLeft >= 3
                          ? "w-[120px] md:w-[120px] lg:w-[150px]"
                          : "w-[120px] md:w-[120px] lg:w-[150px]"
                      } relative flex items-center p-3 md:pt-4 pt-2 lg:pt-4 pb-[18px]`}
                    >
                      <div className="w-full absolute top-0 left-0 z-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 253 136"
                          className={`w-[120px] md:w-[150px] lg:w-[150px] h-[55px] md:h-[75px] lg:h-[75px]`}
                        >
                          <g
                            fill="none"
                            stroke={leftDiv?.borderColor}
                            strokeWidth="2"
                          >
                            <path
                              d="M13.25 3.78C6.55 6.61 1.96 13.03 1.98 20.35q.09 33.9-.05 66.05c-.03 7.44 2.34 13.5 8.57 17.43a.25.25 0 00.38-.23Q9.71 73.93 8.61 44.51q-.44-11.62-.14-13.5c1.37-8.7 9.01-16.4 18.23-16.76q94.09-3.64 188.88-7.24c.98-.04 2.03.25 3.03.35q.94.09.21-.51-5.39-4.39-11.93-4.38-89.8.11-183.82-.05-6.58-.01-9.82 1.36"
                              vectorEffect="non-scaling-stroke"
                            ></path>
                            <path
                              d="M21.41 48.04c-.51-7.79 4.37-15.62 11.29-18.83q3.33-1.54 9.33-1.95 94.63-6.47 185.18-12.6 1-.07.26-.74c-3.52-3.23-8.06-5.07-12.78-4.89q-96.63 3.69-186.75 7.12c-10.05.39-18.19 8.54-17.75 18.69q1.24 28.63 2.26 60.11.31 9.71 1.37 12.86 2.38 7.08 10.9 11.47 1.54.8 1.42-.94-2.4-34.48-4.73-70.3"
                              vectorEffect="non-scaling-stroke"
                            ></path>
                            <path
                              d="M245.871 33.404a18.04 18.04 0 00-19.225-16.77L40.14 29.347a18.04 18.04 0 00-16.771 19.225l4.62 67.783a18.04 18.04 0 0019.226 16.77l186.507-12.714a18.04 18.04 0 0016.771-19.225l-4.62-67.783"
                              vectorEffect="non-scaling-stroke"
                            ></path>
                          </g>
                          <path
                            fill={leftDiv?.borderColor}
                            d="M0 90.39V18.44Q2.19 5.88 12.98 1.84 16.66.47 22.59.47q92.97.06 184.63.03 8.52 0 14.71 6.78 1.37 1.51 2.93 2.35 3.44 1.86 5.71 4.77.35.43.89.55c10.52 2.29 15.97 9.91 16.6 20.26q1.85 30.39 4.18 61.44.56 7.44-.41 10.93c-2.72 9.77-10.3 14.44-20.02 15.07q-88.01 5.72-181.53 12.27-6.48.46-10.11-.67-9-2.78-12.92-11.93-.2-.47-.7-.6-11.58-2.98-15.16-14.68-.15-.51-.62-.76Q1.56 101.17 0 90.39zM13.25 3.78C6.55 6.61 1.96 13.03 1.98 20.35q.09 33.9-.05 66.05c-.03 7.44 2.34 13.5 8.57 17.43a.25.25 0 00.38-.23Q9.71 73.93 8.61 44.51q-.44-11.62-.14-13.5c1.37-8.7 9.01-16.4 18.23-16.76q94.09-3.64 188.88-7.24c.98-.04 2.03.25 3.03.35q.94.09.21-.51-5.39-4.39-11.93-4.38-89.8.11-183.82-.05-6.58-.01-9.82 1.36zm8.16 44.26c-.51-7.79 4.37-15.62 11.29-18.83q3.33-1.54 9.33-1.95 94.63-6.47 185.18-12.6 1-.07.26-.74c-3.52-3.23-8.06-5.07-12.78-4.89q-96.63 3.69-186.75 7.12c-10.05.39-18.19 8.54-17.75 18.69q1.24 28.63 2.26 60.11.31 9.71 1.37 12.86 2.38 7.08 10.9 11.47 1.54.8 1.42-.94-2.4-34.48-4.73-70.3zm224.461-14.636a18.04 18.04 0 00-19.225-16.77L40.14 29.347a18.04 18.04 0 00-16.771 19.225l4.62 67.783a18.04 18.04 0 0019.226 16.77l186.507-12.714a18.04 18.04 0 0016.771-19.225l-4.62-67.783z"
                          ></path>
                          <path
                            fill={leftDiv?.bgColor}
                            d="M1.98 20.35C1.96 13.03 6.55 6.61 13.25 3.78q3.24-1.37 9.82-1.36 94.02.16 183.82.05 6.54-.01 11.93 4.38.73.6-.21.51c-1-.1-2.05-.39-3.03-.35q-94.79 3.6-188.88 7.24c-9.22.36-16.86 8.06-18.23 16.76q-.3 1.88.14 13.5 1.1 29.42 2.27 59.09a.25.25 0 01-.38.23C4.27 99.9 1.9 93.84 1.93 86.4q.14-32.15.05-66.05z"
                          ></path>
                          <path
                            fill={leftDiv?.bgColor}
                            d="M32.7 29.21c-6.92 3.21-11.8 11.04-11.29 18.83q2.33 35.82 4.73 70.3.12 1.74-1.42.94-8.52-4.39-10.9-11.47-1.06-3.15-1.37-12.86-1.02-31.48-2.26-60.11c-.44-10.15 7.7-18.3 17.75-18.69q90.12-3.43 186.75-7.12c4.72-.18 9.26 1.66 12.78 4.89q.74.67-.26.74-90.55 6.13-185.18 12.6-6 .41-9.33 1.95z"
                          ></path>
                          <rect
                            width="223.02"
                            height="104.02"
                            x="-111.51"
                            y="-52.01"
                            fill={leftDiv?.bgColor}
                            rx="18.04"
                            transform="rotate(-3.9 1168.12 -1973.453)"
                          ></rect>
                        </svg>
                      </div>
                      <div className="text-center flex md:ml-1 z-10">
                        <Icon
                          style={{ color: leftDiv?.textColor || textColor }}
                          className={`z-10 pt-1 lg:pt-2 ml-1 ${
                            lengthLeft >= 3
                              ? "text-4xl md:text-5xl"
                              : "text-4xl md:text-5xl"
                          } `}
                        />
                        <h2
                          style={{ color: leftDiv?.textColor || textColor }}
                          className={`font-bold pt-1 lg:pt-0 font-sans  ${
                            lengthLeft >= 3
                              ? "text-xs md:text-sm"
                              : "text-xs md:text-sm"
                          }`}
                        >
                          {leftDiv?.text}
                        </h2>
                      </div>
                    </div>
                    <div
                      className={`absolute ${
                        lengthLeft >= 3
                          ? "top-[15px] -right-6 md:right-[-55px]"
                          : "top-[15px] -right-6 md:right-[-55px]"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 59 30"
                        className={` scale-y-[-1] ${
                          lengthLeft >= 3
                            ? "w-6 md:w-[50px] h-5 md:h-[30px]"
                            : "w-6 md:w-[50px] h-5 md:h-[30px]"
                        }`}
                      >
                        <path
                          fill={leftDiv?.borderColor}
                          d="M2.33.264A1.5 1.5 0 101.67 3.19L2.33.264zm55.21 26.84a1.5 1.5 0 001.193-1.755L56.2 12.089a1.501 1.501 0 00-2.947.563l2.25 11.787-11.786 2.25a1.5 1.5 0 10.563 2.948l13.26-2.533zM1.67 3.19l15.28 3.46.662-2.925L2.33.264 1.669 3.19zM43.84 18.329l12.576 8.543 1.686-2.482-12.576-8.543-1.686 2.482zM16.949 6.65A78.838 78.838 0 0143.84 18.329l1.686-2.482A81.864 81.864 0 0017.61 3.725l-.662 2.926z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* this is middle div  */}
        <div
          style={{
            backgroundColor: middleComponents?.bgColor || bgcolor,
            borderColor: middleComponents?.borderColor || borderColor,
          }}
          className="ml-6 md:ml-16 lg:ml-[70px] px-3 md:px-[34px] py-2 md:py-[18px] rounded-md md:rounded-xl border md:border-2"
        >
          <MiddleIcon
            style={{ color: middleComponents?.textColor }}
            className={`text-6xl md:text-8xl lg:text-9xl`}
          />
        </div>

        {/* this is right div  */}
        <div
          className={`relative  ${
            length >= 4
              ? "ml-8 md:ml-16 lg:ml-[75px]"
              : "ml-8 md:ml-16 lg:ml-[75px]"
          }`}
        >
          {rightSideComponents?.map((singleDiv, index) => {
            const Icon = singleDiv?.icon;
            return (
              <div
                key={singleDiv?.text + toString(index)}
                className="flex mb-2 relative"
              >
                {(length === 1 || length === 2) && index === 0 && (
                  <svg
                    className={`absolute scale-y-[-1] w-6 md:w-14 lg:w-[53px] h-4 md:h-6 top-5 z-10 -left-7 md:-left-16 lg:left-[-65px]`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 65 23"
                  >
                    <path
                      fill={singleDiv?.borderColor || textColor}
                      d="M64.061 12.56a1.502 1.502 0 000-2.121L54.515.893a1.502 1.502 0 00-2.122 0 1.502 1.502 0 000 2.122l8.486 8.485-8.486 8.485a1.502 1.502 0 000 2.122 1.502 1.502 0 002.122 0l9.546-9.546zM0 13h63v-3H0v3z"
                    ></path>
                  </svg>
                )}

                {length >= 4 && index === 0 && (
                  <svg
                    className={`absolute scale-y-[-1] md:h-7 lg:h-[50px] w-6 md:w-14 lg:w-[53px] top-7 z-10 -left-7 md:-left-16 lg:left-[-65px]`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 59 30"
                  >
                    <path
                      fill={singleDiv?.borderColor || textColor}
                      d="M52.91 24.41q-6.58-4.75-13.86-8.99C27.69 8.79 15.65 6.15 1.88 3.34Q.4 3.04.57 1.55q.02-.18.08-.35Q1.07.09 2.23.32q12.73 2.54 22.33 5.41c11.13 3.32 20.73 9.54 29.9 16.3q.66.49.51-.32l-1.63-8.56q-.28-1.45.98-2.2.21-.13.45-.15 1.16-.12 1.38 1.03l2.54 13.27a1.64 1.64 0 01-1.28 1.91l-13.37 2.78a1.07 1.06-29.7 01-.93-.25q-.57-.52-.57-1.13.01-1.42 1.4-1.69l8.84-1.71q.76-.15.13-.6z"
                    ></path>
                  </svg>
                )}

                {length > 4 && index === 1 && (
                  <svg
                    className={`absolute scale-y-[-1] md:h-7 lg:h-[50px] w-6 md:w-14 lg:w-[53px] top-5 z-10 -left-7 md:-left-16 lg:left-[-65px]`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 59 30"
                  >
                    <path
                      fill={singleDiv?.borderColor || textColor}
                      d="M52.91 24.41q-6.58-4.75-13.86-8.99C27.69 8.79 15.65 6.15 1.88 3.34Q.4 3.04.57 1.55q.02-.18.08-.35Q1.07.09 2.23.32q12.73 2.54 22.33 5.41c11.13 3.32 20.73 9.54 29.9 16.3q.66.49.51-.32l-1.63-8.56q-.28-1.45.98-2.2.21-.13.45-.15 1.16-.12 1.38 1.03l2.54 13.27a1.64 1.64 0 01-1.28 1.91l-13.37 2.78a1.07 1.06-29.7 01-.93-.25q-.57-.52-.57-1.13.01-1.42 1.4-1.69l8.84-1.71q.76-.15.13-.6z"
                    ></path>
                  </svg>
                )}

                {length <= 4 && index === 1 && (
                  <svg
                    className={`absolute scale-y-[-1] w-6 md:w-14 lg:w-[53px] h-4 md:h-6  top-6 z-10 -left-7 md:-left-16 lg:left-[-65px]`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 65 23"
                  >
                    <path
                      fill={singleDiv?.borderColor || textColor}
                      d="M64.061 12.56a1.502 1.502 0 000-2.121L54.515.893a1.502 1.502 0 00-2.122 0 1.502 1.502 0 000 2.122l8.486 8.485-8.486 8.485a1.502 1.502 0 000 2.122 1.502 1.502 0 002.122 0l9.546-9.546zM0 13h63v-3H0v3z"
                    ></path>
                  </svg>
                )}

                {length === 3 && index === 0 && (
                  <svg
                    className={`absolute scale-y-[-1] h-4 md:h-7 lg:h-[50px] lg:w-[53px] w-6 md:w-14  top-7 z-10 -left-7 md:-left-16 lg:left-[-65px]`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 59 30"
                  >
                    <path
                      fill={singleDiv?.borderColor || textColor}
                      d="M52.91 24.41q-6.58-4.75-13.86-8.99C27.69 8.79 15.65 6.15 1.88 3.34Q.4 3.04.57 1.55q.02-.18.08-.35Q1.07.09 2.23.32q12.73 2.54 22.33 5.41c11.13 3.32 20.73 9.54 29.9 16.3q.66.49.51-.32l-1.63-8.56q-.28-1.45.98-2.2.21-.13.45-.15 1.16-.12 1.38 1.03l2.54 13.27a1.64 1.64 0 01-1.28 1.91l-13.37 2.78a1.07 1.06-29.7 01-.93-.25q-.57-.52-.57-1.13.01-1.42 1.4-1.69l8.84-1.71q.76-.15.13-.6z"
                    ></path>
                  </svg>
                )}

                {length > 3 && index === 2 && (
                  <svg
                    className={`absolute scale-y-[-1] w-6 md:w-14 lg:w-[53px] h-4 md:h-6 top-5 z-10 -left-7 md:-left-16 lg:left-[-65px]`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 65 23"
                  >
                    <path
                      fill={singleDiv?.borderColor || textColor}
                      d="M64.061 12.56a1.502 1.502 0 000-2.121L54.515.893a1.502 1.502 0 00-2.122 0 1.502 1.502 0 000 2.122l8.486 8.485-8.486 8.485a1.502 1.502 0 000 2.122 1.502 1.502 0 002.122 0l9.546-9.546zM0 13h63v-3H0v3z"
                    ></path>
                  </svg>
                )}

                {length === 3 && index === 2 && (
                  <svg
                    className={`absolute  w-6 md:w-14 lg:w-[53px] h-4 md:h-[50px]  top-0 z-10 -left-7 md:-left-16 lg:left-[-65px]`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 59 30"
                  >
                    <path
                      fill={singleDiv?.borderColor || textColor}
                      d="M52.91 24.41q-6.58-4.75-13.86-8.99C27.69 8.79 15.65 6.15 1.88 3.34Q.4 3.04.57 1.55q.02-.18.08-.35Q1.07.09 2.23.32q12.73 2.54 22.33 5.41c11.13 3.32 20.73 9.54 29.9 16.3q.66.49.51-.32l-1.63-8.56q-.28-1.45.98-2.2.21-.13.45-.15 1.16-.12 1.38 1.03l2.54 13.27a1.64 1.64 0 01-1.28 1.91l-13.37 2.78a1.07 1.06-29.7 01-.93-.25q-.57-.52-.57-1.13.01-1.42 1.4-1.69l8.84-1.71q.76-.15.13-.6z"
                    ></path>
                  </svg>
                )}
                {length === 6 && index === 3 && (
                  <svg
                    className={`absolute scale-y-[-1] w-6 md:w-14 lg:w-[53px] h-4 md:h-6  top-[20px] z-10 -left-7 md:-left-16 lg:left-[-65px]`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 65 23"
                  >
                    <path
                      fill={singleDiv?.borderColor || textColor}
                      d="M64.061 12.56a1.502 1.502 0 000-2.121L54.515.893a1.502 1.502 0 00-2.122 0 1.502 1.502 0 000 2.122l8.486 8.485-8.486 8.485a1.502 1.502 0 000 2.122 1.502 1.502 0 002.122 0l9.546-9.546zM0 13h63v-3H0v3z"
                    ></path>
                  </svg>
                )}

                {length <= 5 && index === 3 && (
                  <svg
                    className={`absolute w-6 md:w-14 lg:w-[53px] h-4 md:h-[50px]  top-0 z-10 -left-7 md:-left-16 lg:left-[-65px]`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 59 30"
                  >
                    <path
                      fill={singleDiv?.borderColor || textColor}
                      d="M52.91 24.41q-6.58-4.75-13.86-8.99C27.69 8.79 15.65 6.15 1.88 3.34Q.4 3.04.57 1.55q.02-.18.08-.35Q1.07.09 2.23.32q12.73 2.54 22.33 5.41c11.13 3.32 20.73 9.54 29.9 16.3q.66.49.51-.32l-1.63-8.56q-.28-1.45.98-2.2.21-.13.45-.15 1.16-.12 1.38 1.03l2.54 13.27a1.64 1.64 0 01-1.28 1.91l-13.37 2.78a1.07 1.06-29.7 01-.93-.25q-.57-.52-.57-1.13.01-1.42 1.4-1.69l8.84-1.71q.76-.15.13-.6z"
                    ></path>
                  </svg>
                )}

                {index >= 4 && (
                  <svg
                    className={`absolute w-6 md:w-14 lg:w-[53px] h-4 md:h-[50px] lg:h-[40px]  top-0 z-10 -left-7 md:-left-16 lg:left-[-65px]`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 59 30"
                  >
                    <path
                      fill={singleDiv?.borderColor || textColor}
                      d="M52.91 24.41q-6.58-4.75-13.86-8.99C27.69 8.79 15.65 6.15 1.88 3.34Q.4 3.04.57 1.55q.02-.18.08-.35Q1.07.09 2.23.32q12.73 2.54 22.33 5.41c11.13 3.32 20.73 9.54 29.9 16.3q.66.49.51-.32l-1.63-8.56q-.28-1.45.98-2.2.21-.13.45-.15 1.16-.12 1.38 1.03l2.54 13.27a1.64 1.64 0 01-1.28 1.91l-13.37 2.78a1.07 1.06-29.7 01-.93-.25q-.57-.52-.57-1.13.01-1.42 1.4-1.69l8.84-1.71q.76-.15.13-.6z"
                    ></path>
                  </svg>
                )}

                <div
                  style={{
                    backgroundColor: singleDiv?.bgColor || bgcolor,
                    borderColor: singleDiv?.borderColor || borderColor,
                  }}
                  className="max-w-28 md:max-w-52 lg:w-[240px] border md:border-2 rounded-lg md:rounded-2xl flex items-center pr-3 md:pr-[16px] pl-3 pt-[2px] pb-[5px]"
                >
                  <Icon
                    style={{ color: singleDiv?.textColor || textColor }}
                    className={`text-2xl md:text-4xl lg:text-5xl `}
                  />
                  <div className="text-center ml-1 md:ml-3">
                    <h2
                      style={{ color: singleDiv?.textColor || textColor }}
                      className="lg:leading-5 font-bold font-sans text-[10px] md:text-base lg:text-lg"
                    >
                      {singleDiv?.text}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DynamicComponent;
