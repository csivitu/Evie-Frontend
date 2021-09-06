import React from "react";
import { finalDate } from "./dateFormat";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { VscGlobe } from "react-icons/vsc";

const EventProfile = ({img,org,title,desc,start,end,url,backgroundColor,textColor,todayChecker}) => {
  start = new Date(start);
  end = new Date(end);
  let myRegexp=new RegExp("^(?:https?://)?(?:[^@]+@)?(?:www.)?([^:/?]+)")
  
  let urlReg = myRegexp.exec(url);
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div
          className="border border-gray-900 align-center text-left p-2 mr-2 mb-2 mt-2 w-full h-full sm:h-56 flex-col sm:flex-row"
          style={{ backgroundColor,borderRadius:"8px",display:"flex",}}
        >
          <div className="h-80 w-80  self-center sm:w-48 sm:h-48 my-2 flex items-center justify-center imgdiv">
            <img src={img}
                alt={org}
                className="object-cover rounded self-center w-full h-full"
            />
            </div>
          <div id="eventprofilecard" className="flex-none sm:flex w-full sm:w-3/4" style={{overflowY:todayChecker?"auto":"none",overflowX:"hidden"}}>
            <div className="flex-auto w-full p-2 sm:ml-2 justify-evenly">
              <div className="flex items-start sm:justify-between sm:mt-2">
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
                      <span className="sm:mr-3 font-bold inline-block">
                        <AiOutlineCalendar
                          style={{ display: "inline" }}
                          className="mb-1"
                        />
                        {finalDate(start)} - {finalDate(end)}
                      </span>
                      <div className=" flex sm:block flex-col sm:flex-none sm:mt-3">
                      <span className="font-bold mt-3 sm:mt-0">
                        <FiUsers
                          style={{ display: "inline" }}
                          className="mb-1"
                        />{" "}
                        {org}
                      </span>
                      <span
                        className="font-bold mt-3 sm:mt-0 ml-0 sm:ml-28 italic hover:underline"
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
                        {urlReg?urlReg[1]:" "}{" "}
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
              height:1.5,
              border:0,
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
