import React from "react";
import { finalDate } from "./dateFormat";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { VscGlobe } from "react-icons/vsc";
import { isMobile } from "react-device-detect";

const EventProfile = ({img,org,title,desc,start,end,url,backgroundColor,textColor,todayChecker}) => {
  console.log(todayChecker?"true":"false")
  start = new Date(start);
  end = new Date(end);
  let myRegexp=new RegExp("^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)")
  
  let urlReg = myRegexp.exec(url);

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div
          className="border border-gray-900 text-center sm:text-left p-2 mr-2 mb-2 mt-2 w-full h-full  sm:h-52 flex-col sm:flex-row"
          style={{ backgroundColor,borderRadius:"8px",display:"flex",}}
        >
          <div className="w-full h-44 sm:h-38 my-2 md:w-1/5 flex items-center justify-center">
            <img src={img}
                alt={org}
                className="object-contain rounded self-center w-full h-full"
            />
            </div>
          <div className="flex-none sm:flex sm:w-4/5" style={{overflowY:todayChecker?"auto":"none",overflowX:"hidden"}}>
            <div className="flex-auto w-full sm:ml-5 justify-evenly">
              <div className="flex items-center justify-center sm:justify-between sm:mt-2">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div
                      className="w-full flex-none text-4xl font-extrabold leading-none"
                      style={{ color: textColor }}
                    >
                      {title}
                    </div>
                    <div
                      className="flex-auto my-3 text-sm"
                      style={{ color: textColor, fontFamily: "Inter" }}
                    >
                      <span className="mr-3 font-bold inline-block">
                        <AiOutlineCalendar
                          style={{ display: "inline" }}
                          className="mb-1"
                        />
                        {finalDate(start)} - {finalDate(end)}
                      </span>
                      <div className="mt-3">
                      <span className="font-bold">
                        <FiUsers
                          style={{ display: "inline" }}
                          className="mb-1"
                        />{" "}
                        {org}
                      </span>
                      <span
                        className="font-bold ml-2 md:ml-28 sm:ml-6"
                        style={{cursor:"pointer"}}
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(url, "_blank");
                        }}
                      >
                        <VscGlobe
                          style={{ display: "inline" }}
                          className="mb-0.5"
                        />{" "}
                        {urlReg[1]}{" "}
                      </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
            style={{
              backgroundColor: textColor,
              color: textColor,
              border: `1px solid ${textColor}`,
              width: "100%"
            }}
          ></hr>
          <div className="mt-2 text-sm w-full sm:w-11/12" style={{ color: textColor,fontFamily:"Inter"}}>
            <p style={{overflowWrap:"break-word"}}>
              {desc}
            </p>
          </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EventProfile;
