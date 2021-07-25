import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import renderEventContent from "./components/renderEventContent";
const Home = () => {
  return (
    <body>
      <div class="container mx-auto">
        <FullCalendar
          plugins={[dayGridPlugin]}
        />
      </div>
    </body>
  );
};

export default Home;
