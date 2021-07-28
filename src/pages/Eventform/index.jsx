import React, {useState} from "react";
import "./styles.css";
import { BASEURL } from "../../api/Api"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="flex md:container md:mx-auto md:h-screen md:w-screen items-center">
      <div className="container" >
        <form action={`${BASEURL}/api/add`} method="POST">
          <div className="row"> 
            <h4>Event Details</h4> 
            <div className="input-group input-group-icon" > 
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
            </div>
            <div className="col-full">
              <h4>Start Date and Time of Event (IST +5:30) </h4>
              <div className="input-group">
                <div className="col-full">
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
                timeInputLabel="Time:" dateFormat="MM/dd/yyyy h:mm aa" showTimeInput
                required name = "start" />
                {console.log(startDate)}
                </div>
              </div>
            </div>
            <div className="input-group input-group-icon"></div>
            <br></br>
            <br></br>
            <div className="input-group input-group-icon"></div>
            <div className="col-full">
              <h4>End Date and Time of Event (IST +5:30) </h4>
              <div className="input-group">
                <div className="col-full">
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} 
                timeInputLabel="Time:" dateFormat="MM/dd/yyyy h:mm aa" showTimeInput
                required name = "end" />
                {console.log(endDate)}
                </div>
              </div>
            </div>

          <div className="row">
            <div className="input-group"></div>
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
            <button className="text-white font-bold bg-yellow-500 hover:bg-yellow-600 w-1/2 w-full scale-100 h-12">
              Submit Event For Approval
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
