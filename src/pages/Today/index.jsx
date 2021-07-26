import React, { useEffect } from "react";
import axios from 'axios'
  // useEffect( () => {
  //   async function fetchdata(){
  //     let events=await getEvents()
  //     events.current=events;


  //   }fetchdata()
  // }, [])
  const Today= () =>{
  return (
      <body>
        <div class="md:container md:mx-auto">
          <p class="text-3xl">Events for today</p>
        </div>
      </body>
  );
};
export default Today;
