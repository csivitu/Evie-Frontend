import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../../components/modal";
import { useHistory } from "react-router-dom";
import { getEvents } from "../../api/Request";
import { useEffect } from "react";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
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

  const [events, setEvents] = React.useState([]);
  const AsyncEvent = async () => {
    let res = await getEvents();
    setEvents(res);
  };

  useEffect(() => {
    AsyncEvent();
  }, []);
  console.log(events)
  return (
    <div className="md:container md:mx-auto">

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin]}
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
          setDate(current.dateStr);
          console.log(current)
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
        showNonCurrentDates={false}
      />

      {showModal && !isMobile ? (
        <Modal closeModal={setShowModal} date={date} events={events} />
      ) : null}
    </div>
  );
};

export default Home;
