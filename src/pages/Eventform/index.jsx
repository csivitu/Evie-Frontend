import React from "react";
import "./styles.css";
import { BASEURL } from "../../api/Api";

const EventForm = () => {
  return (
    <div className="bg-yellow-500 md:container md:mx-auto">
      <div className="container">
        <form action={`${BASEURL}/api/add`} method="POST">
          <div className="row">
            <h4>Event Details</h4>
            <div className="input-group input-group-icon">
              <input
                type="text"
                placeholder="Event Name"
                name="title"
                required="required"
              />
              <div className="input-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input
                type="email"
                placeholder="Email"
                name="email"
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                required
              />
              <div className="input-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
            <div className="input-group input-group-icon">
              <input
                type="text"
                placeholder="Club/Chapter Name"
                name="org"
                required
              />
              <div className="input-icon">
                <i className="fa fa-envelope"></i>
              </div>
            </div>
            <div className="input-group input-group-icon" rows="10" cols="58">
              <input
                type="textarea"
                placeholder="Event Description"
                name="desc"
                rows="10"
                cols="58"
                required
              />
              <div className="input-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
            <div className="input-group input-group-icon"></div>
          </div>
          <div className="row">
            <div className="col-half">
              <h4>Start Date of Event</h4>
              <div className="input-group">
                <div className="col-full">
                  <input type="date" placeholder="DD" name="start" required />
                </div>
              </div>
            </div>
            <div className="col-half">
              <h4>Start Time of Event</h4>
              <div className="input-group">
                <div className="col">
                  <input type="time" name="start_time" required />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-half">
              <h4>End Date of Event</h4>
              <div className="input-group">
                <div className="col-full">
                  <input type="date" placeholder="DD" name="end" required />
                </div>
              </div>
            </div>
            <div className="col-half">
              <h4>End Time of Event</h4>
              <div className="input-group">
                <div className="col">
                  <input
                    type="time"
                    placeholder="DD"
                    name="end_time"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-group"></div>
          </div>
          <div className="input-group input-group-icon">
            <input type="text" placeholder="Image URL" name="img" />
            <div className="input-icon">
              <i className="fa fa-user"></i>
            </div>
          </div>
          <div className="input-group input-group-icon">
            <input type="text" placeholder="Event URL" name="url" />
            <div className="input-icon">
              <i className="fa fa-user"></i>
            </div>
          </div>
          <div className="h-12">
            <button className="text-white font-bold bg-yellow-500 hover:bg-yellow-600 w-1/2 md:w-full scale-100 h-12">
              Submit Event For Approval
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
