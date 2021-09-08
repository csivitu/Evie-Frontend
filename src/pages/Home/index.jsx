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
import swal from "sweetalert";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState();
  const history = useHistory();

  const routeChange = () => {
    let path = "/addevent";
    history.push(path);
  };
  const todayRouteChange = () => {
    let path = "/today";
    history.push(path);
  };
  const [finalDate, setFinalDate] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (finalDate.length !== 0) {
      const AsyncEvent = async () => {
        let res = await getMonth(finalDate);
        setEvents(res);
      };
      AsyncEvent();
      var promptEvent;
      let rejectApp = localStorage.getItem("rejectApp");
      if (!rejectApp) {
        window.addEventListener("beforeinstallprompt", function (e) {
          e.preventDefault();
          promptEvent = e;
          swal({
            title: "Add Evie to Home Screen",
            buttons: {
              Remember: "No and Remember!",
              "Nope!": true,
              "Yup!": true,
            },
          }).then((value) => {
            console.log(value);
            if (value === "Yup!") presentAddToHome();
            else if (value === "Remember")
              localStorage.setItem("rejectApp", true);
          });
        });
      }

      function presentAddToHome() {
        promptEvent.prompt(); // Wait for the user to respond to the prompt
        promptEvent.userChoice.then((choice) => {
          if (choice.outcome === "accepted") {
            console.log("User accepted");
          } else {
            console.log("User dismissed");
          }
        });
      }
    }
  }, [finalDate]);

  return (
    <div className="md:mx-auto box overflow-x-hidden">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        events={events}
        initialView={"dayGridMonth"}
        height="100vh"
        eventAdd={events}
        eventDisplay={"block"}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "numeric",
          omitZeroMinute: true,
        }}
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
        eventClick={(info) => {
          info.jsEvent.preventDefault();
          if (info.event.url) {
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
                center: "customToday eventform",
              }
            : false
        }
        showNonCurrentDates={false}
        datesSet={(dateInfo) => {
          const endDate = dateInfo.end;
          endDate.setDate(endDate.getDate() - 1);
          setFinalDate([dateInfo.start.toISOString(), endDate.toISOString()]);
        }}
      />
      {showModal ? <Modal closeModal={setShowModal} date={date} /> : null}
    </div>
  );
};

export default Home;
