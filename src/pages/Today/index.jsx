import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getDate } from "../../api/Request";
import { modalDate } from "../../components/dateFormat";
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

  console.log(event)
  return (
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>x

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block self-center align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-screen sm:w-9/12">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4" style={{backgroundColor:"#2A2B2E"}}>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-sm sm:text-lg leading-6 font-medium"
                    id="modal-title" style={{color:"aliceblue"}}
                  >
                    {modalDate}
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
            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" style={{backgroundColor:"#2A2B2E"}}>
            </div>
          </div>
        </div>
    );
  }

export default Today;