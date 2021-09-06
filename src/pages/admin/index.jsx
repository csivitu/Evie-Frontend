import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { approveEvent, denyEvent, getCalendar, getEvents, removeEvent } from "../../api/Request";


const Admin = () => {
  const [mode, setMode] = useState("events")
  const [events, setEvents] = React.useState([]);
  const [approveds, setApproveds] = React.useState([]);
  const AsyncEvent = async () => {
    let event = await getEvents();
    let approved = await getCalendar();
    setEvents(event);
    setApproveds(approved);
  };
  const [reason, setReason] = useState("");
  useEffect(() => {
    AsyncEvent();
  }, []);
  const history = useHistory()
  const logOut = () => {
    localStorage.clear();
    history.push('/')
  }
  const finalDate = (date) => {
    function getOrdinalNum(n) {
      return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
    }
    const monthString = (num) => {
      const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return month[num];
    };
    return ` ${getOrdinalNum(date.getDate())} ${monthString(date.getMonth())} ${date.getHours()}:${date.getMinutes()}`;
  };
  if (events && (mode === "events")) {
    return (
      <>
        <header className="text-gray-600 body-font w-full">
          <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-full">
            <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Evie Admin</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center">
              <a href="#/" onClick={() => { setMode("approved") }} className="mr-5 hover:text-green-500 cursor-pointer">Approved Events</a>
              <a href="#/" onClick={() => { setMode("events") }} className="mr-5 hover:text-green-500 cursor-pointer">Moderate Events</a>
            </nav>
            <button onClick={logOut} className="text-white inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">Log Out
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
        {events.map((event) => {
          return (
            <div className="w-full">
              <div className="flex flex-col">
                <div className="border border-green-500 shadow-lg  rounded-3xl p-4 m-4">
                  <div className="flex-none sm:flex">
                    <div className=" relative sm:mb-0 mb-3">
                      <img
                        src={event.img}
                        alt={event.org}
                        className="h-20 object-contain w-28"
                      ></img>
                    </div>
                    <div className="flex-auto sm:ml-5 justify-evenly">
                      <div className="flex items-center justify-between sm:mt-2">
                        <div className="flex items-center">
                          <div className="flex flex-col">
                            <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                              {event.title}
                            </div>
                            <div className="flex-auto text-gray-400 my-1">
                              <span className="mr-3 ">
                                {`${finalDate(new Date(event.start))} - ${finalDate(new Date(event.end))}`}
                              </span>
                              <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                              <span>{event.org}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row text-gray-400">
                        <div className="flex inline-flex items-center">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                          <p className="">Coordinator: {event.cname}</p>
                        </div>
                      </div>
                      <div className="flex flex-col text-sm text-gray-400">
                        <div className="flex-1 inline-flex items-center">
                          <p className="">{event.email}</p>
                        </div>
                        <div className="flex flex-row text-gray-400 mt-2">
                        <div className="flex inline-flex items-center">
                          Label Color:&nbsp; &nbsp; <div className="labelColor" style={{width:"20px",height:"20px",backgroundColor:event.backgroundColor, borderRadius:"50%", border: "1px solid #fff"}}></div>
                          &nbsp; &nbsp;Text Color:&nbsp; &nbsp; <div className="labelColor" style={{width:"20px",height:"20px",backgroundColor:event.textColor, borderRadius:"50%", border: "1px solid #fff"}}></div>
                        </div>
                      </div>
                        <div className="flex flex-row mt-2">
                          <div className="flex-1 inline-flex items-center">
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text"
                              placeholder="Reason"
                              onChange={(e) => setReason(e.target.value)}
                            ></input>
                          </div>
                          <a
                            href={event.url}
                            className="mod-btn flex-no-shrink bg-blue-400 hover:bg-blue-500 px-3 ml-4 py-1 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-300 hover:border-indigo-800 text-white rounded-full transition ease-in duration-300"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <b> → </b>
                          </a>
                          <a
                            href={`#/`}
                            className="mod-btn flex-no-shrink bg-green-400 hover:bg-green-500 px-3 ml-4 py-1 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                            onClick={async ()=>{
                            await approveEvent(event._id)
                            window.location.reload()}}
                          >
                            <b> ✓ </b>
                          </a>
                          <a
                            href={`#/`}
                            className="mod-btn flex-no-shrink bg-red-400 hover:bg-red-500 px-3 ml-4 py-1 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-300 hover:border-red-500 text-white rounded-full transition ease-in duration-300"
                            onClick={async ()=>{
                              await denyEvent(event._id,reason)
                              window.location.reload()
                            }}
                          >
                            <b> ✘ </b>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <hr></hr>
                  <div className="mt-2 text-gray-400 text-sm">
                    <p>
                      <b>Description: </b>
                      {event.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  else if (approveds && (mode === "approved")) {
    return (
      <>
        <header className="text-gray-600 body-font w-full">
          <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-full">
            <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Evie Admin</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center">
              <a href="#/" onClick={() => { setMode("approved") }} className="mr-5 hover:text-green-500">Approved Events</a>
              <a href="#/" onClick={() => { setMode("events") }} className="mr-5 hover:text-green-500">Moderate Events</a>
            </nav>
            <button onClick={logOut} className="text-white inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">Log Out
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
        {approveds.map((event) => {
          return (
            <div className="w-full">
              <div className="flex flex-col">
                <div className="border border-green-500 shadow-lg  rounded-3xl p-4 m-4">
                  <div className="flex flex-row justify-between">
                  <div className="flex-none sm:flex">
                    <div className="flex flex-row justify-between sm:mb-0 mb-3">
                      <img
                        src={event.img}
                        alt={event.org}
                        className="h-20 object-contain w-28"
                      ></img>
                    </div>
                    <div className="flex-auto sm:ml-5 justify-evenly">
                      <div className="flex items-center justify-between sm:mt-2">
                        <div className="flex items-center">
                          <div className="flex flex-col">
                            <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                              {event.title}
                            </div>
                            <div className="flex-auto text-gray-400 my-1">
                              <span className="mr-3 ">
                                {`${finalDate(new Date(event.start))} - ${finalDate(new Date(event.end))}`}
                              </span>
                              <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                              <span>{event.org}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row text-gray-400">
                        <div className="flex inline-flex items-center">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                          <p className="">Coordinator: {event.cname}</p>
                        </div>
                      </div>
                      <div className="flex flex-row text-gray-400">
                        <div className="flex inline-flex items-center">
                          <p className="">{event.email}</p>
                        </div>
                      </div>
                      <div className="flex flex-row text-gray-400">
                        <div className="flex inline-flex items-center">
                          Label Color:&nbsp; &nbsp; <div className="labelColor" style={{width:"20px",height:"20px",backgroundColor:event.backgroundColor, borderRadius:"50%", border: "1px solid #fff"}}></div>
                          &nbsp; &nbsp;Text Color:&nbsp; &nbsp; <div className="labelColor" style={{width:"20px",height:"20px",backgroundColor:event.textColor, borderRadius:"50%", border: "1px solid #fff"}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                          href={`#/`}
                          className="flex-no-shrink bg-red-400 hover:bg-red-500 px-3 ml-4 py-1 text shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-300 hover:border-red-500 text-white rounded-full transition ease-in duration-300"
                          style={{height:"40px"}}
                          onClick={async ()=>{
                            await removeEvent(event._id,reason)
                            window.location.reload()
                          }}
                        >
                          <b> ✘ </b>
                        </a>
                        </div>
                  <br />
                  <hr></hr>
                  <div className="mt-2 text-gray-400 break-words text-sm">
                    <p>
                      <b>Description: </b>
                      {event.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  else {
    return (
      <>
        <br />
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Forbidden</h1>
            <div className="flex w-full justify-center items-end">
              <a href="/login" style={{backgroundColor:"#383844"}} className="inline-flex text-white  py-2 px-6 outline-none rounded text-lg fc-button">Login Here</a>
            </div>
          </div>
        </div>
      </>
    );
  }

};

export default Admin;
