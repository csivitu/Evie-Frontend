import React, { useState } from "react"; 
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../../components/modal";
import { useHistory } from "react-router-dom";
import { getMonth } from "../../api/Request";
import { useEffect } from "react";
import listPlugin from "@fullcalendar/list";
import { isMobile } from "react-device-detect";
import "./styles.css";
import { RegisterSW } from "../../components/serviceWorker";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState();
  const history = useHistory();

  const routeChange = () => {
    let path = "/addevent";
    history.push(path);
  };
  const todayRouteChange = () =>{
    let path = "/today";
    history.push(path);
  }
  const [finalDate, setFinalDate] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (finalDate.length !== 0) {
      const AsyncEvent = async () => {
        let res = await getMonth(finalDate);
        setEvents(res);
        RegisterSW();
      };
      AsyncEvent();
    }
  }, [finalDate]);
  return (
    <div className="md:mx-auto box" >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        events={events}
        initialView={"dayGridMonth"}
        height="100vh"
        eventAdd={events}
        eventDisplay={"block"}
        // slotLabelFormat={{hour:"numeric",minute:"numeric"}}
        customButtons={{
          eventform: {
            text: "Event Form",
            click: () => {
              routeChange();
            },
          },
          customToday: {
            text: `Today`,
            click: () => {
              todayRouteChange();
            },
          },
        }}
        dateClick={(current) => {
          setDate(current.date);
          setShowModal(true);
        }}
        eventClick={(info)=>{
          info.jsEvent.preventDefault();
          if(info.event.url){
            window.open(info.event.url);
          }
        }}
        headerToolbar={
          isMobile
            ? {
                start: "prev",
                center: "title",
                end: "next",
              }
            : {
                start: "customToday",
                center: "prev title next",
                end: "eventform",
              }
        }
        footerToolbar={
          isMobile
            ? {
                start: "",
                center: "customToday eventform",
                end: "",
              }
            : false
        }
        showNonCurrentDates={false}
        datesSet={(dateInfo) => {
          const endDate = dateInfo.end;
          endDate.setDate(endDate.getDate() - 1);
          setFinalDate([dateInfo.start.toISOString(), endDate.toISOString()]);
        }
      }
      />

      {showModal ? <Modal closeModal={setShowModal} date={date} /> : null}
    </div>
  );
};

export default Home;
