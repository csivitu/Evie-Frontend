import React from "react";
import { finalDate } from "./dateFormat";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { VscGlobe } from "react-icons/vsc";
import { isMobile } from "react-device-detect";

const EventProfile = ({img,org,title,desc,start,end,url,backgroundColor,textColor,todayChecker}) => {
  console.log(todayChecker);
  start = new Date(start);
  end = new Date(end);
  let myRegexp=new RegExp("^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)")
  
  let urlReg = myRegexp.exec(url);

  return (
    <div className="w-full h-1/2">
      <div className="flex flex-col">
        <div
          className="border border-gray-900  p-4 m-4 w-auto flex-col md:flex-row"
          style={{ backgroundColor,borderRadius:"8px",display:"flex",height:todayChecker?(isMobile?"auto":"220px"):"auto"}}
        >
          <div className="md:mb-0 mb-3 w-full md:w-1/5 flex items-center justify-center" >
            <img src={img}
                alt={org}
                className="object-contain self-center"
                style={{height:"200px"}}
            />
            </div>
          <div className="flex-none md:flex w-full md:w-4/5" style={{overflowY:todayChecker?"auto":"none"}}>
            <div className="flex-auto md:ml-5 justify-evenly">
              <div className="flex items-center justify-center sm:justify-between md:mt-2">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div
                      className="w-full flex-none text-4xl font-bold leading-none"
                      style={{ color: textColor }}
                    >
                      {title}
                    </div>
                    <div
                      className="flex-auto my-3"
                      style={{ color: textColor, fontFamily: "Inter" }}
                    >
                      <span className="mr-3 font-bold">
                        <AiOutlineCalendar
                          style={{ display: "inline" }}
                          className="mb-1"
                        />
                        {finalDate(start)} - {finalDate(end)}
                      </span>
                      <br></br>
                      <div className="mt-3">
                      <span
                        className="font-bold"
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
                      <span className="font-bold ml-2 md:ml-28 sm:ml-6">
                        <FiUsers
                          style={{ display: "inline" }}
                          className="mb-1"
                        />{" "}
                        {org}
                      </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center"></div>
              <div className="flex text-sm " style={{ color: textColor }}></div>
              <hr
            style={{
              backgroundColor: textColor,
              color: textColor,
              border: `1px solid ${textColor}`,
            }}
          ></hr>
          <div className="mt-2 text-md" style={{ color: textColor,fontFamily:"Inter" }}>
            <p>
              {desc}
            </p>
            <br />
          </div>
            </div>
            
          </div>
          <br />
          
        </div>
      </div>
    </div>
  );
};

export default EventProfile;
