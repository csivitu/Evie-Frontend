import React from "react";
import { Link, useHistory } from "react-router-dom";
import { finalDate } from "./dateFormat";

const EventProfile = ({ img, org, title, desc, start,end,url,backgroundColor,textColor }) => {
  start=new Date(start)
  end=new Date(end)
  const history = useHistory();
  const routeChange = () =>{ 
    history.push(url);
  }
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="border border-gray-900   rounded-3xl p-4 m-4 h-auto w-auto" style={{backgroundColor}}>
          <div className="flex-none sm:flex">
            <div className=" relative sm:mb-0 mb-3">
              <img src={img} alt={org} className="h-20 object-contain"/>
            </div>
            <div className="flex-auto sm:ml-5 justify-evenly">
              <div className="flex items-center justify-between sm:mt-2">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="w-full flex-none text-lg font-bold leading-none" style={{color:textColor}}>
                      {title}
                    </div>
                    <div className="flex-auto my-1" style={{color:textColor}}>
                      <span className="mr-3 ">Start Time:{finalDate(start)}</span>
                      <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                      <span className="mr-3 ">End Time:{finalDate(end)}</span>
                      <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                      <span>{org}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center"></div>
              <div className="flex text-sm " style={{color:textColor}}>
              </div>
            </div>
          </div>
          <br />
          <hr style={{backgroundColor:textColor,color:textColor,border:`1.25px solid ${textColor}`}}></hr>
          <div className="mt-2 text-sm" style={{color:textColor}}>
            <p>
              <b>Description:</b>
              {desc}
            </p><br/>
          <button onClick={()=>{
            window.open(url,"_blank");
          }} className="font-bold py-2 px-4 rounded-full border-none outline-none " style={{backgroundColor:textColor,color:backgroundColor}}  >
          Click to view event website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventProfile;
