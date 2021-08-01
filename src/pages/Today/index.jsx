import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getDate } from "../../api/Request";
import EventProfile from "../../components/EventProfile";

const Today = () => {
  let date = new Date()
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const AsyncDay = async () => {
      let res = await getDate(date);
      setEvent(res);
    };
    AsyncDay();
  }, []);
  const history=useHistory()
  const routeChange = () => {
    let path = "/";
    history.push(path);
  };

  return (
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
         
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4" style={{backgroundColor:"#2A2B2E"}}>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                   <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm fc-button"
                onClick={() => {
                  routeChange()
                }}
              >
                Go Back
              </button>
                  <h3
                    className="text-center text-md sm:text-lg leading-6 font-medium"
                    id="modal-title" style={{color:"aliceblue"}}
                  >
                    Events for Today
                  </h3>
                  <div className="mt-2">
                    <div className="flex flex-col">
                      {event ? (
                        event.map((item) => {
                          return <EventProfile key={item._id} {...item} />;
                        })
                      ) : (
                        <>
                          <h1>No events Today!</h1>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }

export default Today;