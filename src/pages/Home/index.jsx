import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../../components/modal";
import { useHistory } from "react-router-dom";
import { getDate, getEvents } from "../../api/Request";
import { useEffect } from "react";
import listPlugin from "@fullcalendar/list";
import { isMobile } from "react-device-detect";

import "./styles.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");
  const history = useHistory();

  const routeChange = () => {
    let path = `/event-form`;
    history.push(path);
  };
  const [finalDate, setFinalDate] = useState([]);
  const [events, setEvents] = useState([]);

  const AsyncEvent = async () => {
    let res = await getEvents( finalDate );
    // let anotherRes = await getDate("2021-07-26T18:30:00.000Z");
    setEvents(res);
  };

  useEffect(() => {
    if (finalDate.length!==0) {
      // console.log(finalDate)
      AsyncEvent();
    }
  }, [finalDate]);

  return (
    <div className="md:container md:mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        events={events}
        initialView={isMobile ? "listWeek" : "dayGridMonth"}
        height="100vh"
        eventAdd={events}
        customButtons={{
          eventform: {
            text: "Event Form",
            click: () => {
              routeChange();
            },
          },
        }}
        dateClick={(current) => {
          console.log(current.date.toUTCString())
          setDate(current.date);
          // console.log(date)
          setShowModal(true);
        }}
        headerToolbar={
          isMobile
            ? {
                start: "prev",
                center: "title",
                end: "next",
              }
            : {
                start: "prev next",
                center: "title",
                end: "today eventform",
              }
        }
        footerToolbar={
          isMobile
            ? {
                start: "",
                center: "today eventform",
                end: "",
              }
            : false
        }
        timeZone="UTC"
        showNonCurrentDates={false}
        datesSet={(dateInfo) => {
          const endDate = dateInfo.end;
          endDate.setDate(endDate.getDate() - 1);
          
          
          setFinalDate([dateInfo.start.toISOString(), endDate.toISOString()]);
        }}
        
      />
    

      {showModal && !isMobile ? (
        <Modal closeModal={setShowModal} date={date} />
      ) : null}
    </div>
  );
};

export default Home;
