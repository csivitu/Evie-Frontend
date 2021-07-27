import React from "react";
import "./styles.css";
import baseURL from "../../api/Api"; 

const EventForm = () => {
  return (
    <div className="bg-yellow-500 md:container md:mx-auto">
      <div class="container">
        <form action="http://localhost:3001/api/add" method="POST">
          <div class="row">
            <h4>Event Details</h4>
            <div class="input-group input-group-icon">
              <input type="text" placeholder="Event Name" name="title" required="required"/>
              <div class="input-icon">
                <i class="fa fa-user"></i>
              </div>
            </div>
            <div class="input-group input-group-icon">
              <input type="email" placeholder="Email" name="email" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required/>
              <div class="input-icon">
                <i class="fa fa-user"></i>
              </div>
            </div>
            <div class="input-group input-group-icon">
              <input type="text" placeholder="Club/Chapter Name" name="org" required/>
              <div class="input-icon">
                <i class="fa fa-envelope"></i>
              </div>
            </div>
            <div class="input-group input-group-icon"  rows="10" cols ="58">
              <input type="textarea" placeholder="Event Description" name="desc" rows="10" cols ="58" required /> 
              <div class="input-icon">
                <i class="fa fa-user"></i>
              </div>
            </div>
            <div class="input-group input-group-icon"></div>
          </div>
          <div class="row">
            <div class="col-half">
              <h4>Start Date of Event</h4>
              <div class="input-group">
                <div class="col-full">
                  <input type="date" placeholder="DD" name="start" required/>
                </div>
              </div>
            </div>
            <div class="col-half">
              <h4>Start Time of Event</h4>
              <div class="input-group">
                <div class="col">
                  <input type="time" name="start_time" required/>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-half">
              <h4>End Date of Event</h4>
              <div class="input-group">
                <div class="col-full">
                  <input type="date" placeholder="DD" name="end" required/>
                </div>
              </div>
            </div>
            <div class="col-half">
              <h4>End Time of Event</h4>
              <div class="input-group">
                <div class="col">
                  <input type="time" placeholder="DD" name="end_time" required/>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="input-group"></div>
          </div>
          <div class="input-group input-group-icon">
            <input type="text" placeholder="Image URL" name="img" />
            <div class="input-icon">
              <i class="fa fa-user"></i>
            </div>
          </div>
          <div class="input-group input-group-icon">
            <input type="text" placeholder="Event URL" name="url" />
            <div class="input-icon">
              <i class="fa fa-user"></i>
            </div>
          </div>
          <div class="h-12">
          <button class="text-white font-bold bg-yellow-500 hover:bg-yellow-600 w-1/2 md:w-full scale-100 h-12">
            Submit Event For Approval
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
