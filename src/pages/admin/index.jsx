import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCalendar, getEvents } from "../../api/Request";


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
        <header class="text-gray-600 body-font w-full">
          <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-full">
            <a href="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Vcal Admin</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-white justify-center">
              <a onClick={() => { setMode("approved") }} class="mr-5 hover:text-green-500">Approved Events</a>
              <a onClick={() => { setMode("events") }} class="mr-5 hover:text-green-500">Moderate Events</a>
            </nav>
            <button onClick={logOut} class="text-white inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">Log Out
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
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
                      <div className="flex flex-col text-sm text-gray-400">
                        <div className="flex-1 inline-flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                          </svg>
                          <p className="">{event.email}</p>
                        </div>
                        <div className="flex flex-row mt-2">
                          <div className="flex-1 inline-flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text"
                              placeholder="Reason"
                              onChange={(e) => setReason(e.target.value)}
                            ></input>
                          </div>
                          <a
                            href={event.url}
                            className="flex-no-shrink bg-blue-400 hover:bg-blue-500 px-3 ml-4 py-1 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-300 hover:border-blue-500 text-white rounded-full transition ease-in duration-300"
                          >
                            <b> → </b>
                          </a>
                          <a
                            href={`http://localhost:3001/admin/approve/${event._id}`}
                            className="flex-no-shrink bg-green-400 hover:bg-green-500 px-3 ml-4 py-1 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                          >
                            <b> ✓ </b>
                          </a>
                          <a
                            href={`http://localhost:3001/admin/deny/${event._id}/${reason}`}
                            className="flex-no-shrink bg-red-400 hover:bg-red-500 px-3 ml-4 py-1 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-300 hover:border-red-500 text-white rounded-full transition ease-in duration-300"
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
        <header class="text-gray-600 body-font w-full">
          <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-full">
            <a href="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Vcal Admin</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-white justify-center">
              <a onClick={() => { setMode("approved") }} class="mr-5 hover:text-green-500">Approved Events</a>
              <a onClick={() => { setMode("events") }} class="mr-5 hover:text-green-500">Moderate Events</a>
            </nav>
            <button onClick={logOut} class="text-white inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">Log Out
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                          </svg>
                          <p className="">{event.email}</p>
                          <a
                          href={`http://localhost:3001/admin/remove/${event._id}`}
                          className="flex-no-shrink bg-red-400 hover:bg-red-500 px-3 ml-4 py-1 text shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-300 hover:border-red-500 text-white rounded-full transition ease-in duration-300"
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
  else {
    return (
      <>
        <br />
        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Forbidden</h1>
            <div class="flex w-full justify-center items-end">
              <a href="/login" class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Login Here</a>
            </div>
          </div>
        </div>
      </>
    );
  }

};

export default Admin;
