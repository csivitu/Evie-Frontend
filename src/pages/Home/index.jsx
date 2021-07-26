import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../../components/modal";


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal)
  const [date,setDate]=useState('')

  return (
    <div className="md:container md:mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={(current)=>{
          setDate(current.dateStr)
          setShowModal(true)
        }}
        headerToolbar={{
          start: 'prev next', // will normally be on the left. if RTL, will be on the right
          center: 'title',
          end: 'today' // will normally be on the right. if RTL, will be on the left
        }
        }
        showNonCurrentDates={false}
      />

      {showModal?<Modal closeModal={setShowModal} date={date}/>:null}
    </div>
  );
};

export default Home;
