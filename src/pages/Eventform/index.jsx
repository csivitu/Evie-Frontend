import React, { useState } from "react";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EventProfile from "../../components/EventProfile";
import { useHistory } from "react-router-dom";
import eventFormSchema from "../../validation/eventform.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postEvent } from "../../api/Request";
const EventForm = () => {

  const [start, setStart] = useState(new Date());
  const [end, setEndDate] = useState(new Date());
  const [img, setImg] = useState(
    "https://external-preview.redd.it/fBai3DKZrSGf3YRd89f9pUHJua_lyGNS3LF0I-joA8Y.jpg?width=640&crop=smart&auto=webp&s=d53d81a152b17cbb467151b7513a7e0aac378567"
  );
  const [org, setOrg] = useState("Club/Chapter");
  const [title, setTitle] = useState("Event Title");
  const [email, setEmail] = useState("example@example.com");
  const [desc, setDesc] = useState("Description of the Event");
  const [url, setURL] = useState("URL of the Event");
  const [textColor, setTextColor] = useState("#ffffff");
  const [backgroundColor, setbackgroundColor] = useState("#4C42C2");
  const history = useHistory();
  const routeChange = (path) => {
    // let  = "/";
    history.push(path);
  };
  const validate = async () => {
    
    const eventDetails={
      title,
      email,
      desc,
      url,
      img,
      org,
      backgroundColor,
      textColor,
      start,
      end
    }
    const { error } = eventFormSchema.validate(eventDetails);

    if (error) {
      toast.error(error.message, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else{
      let res=await postEvent(eventDetails)
      // console.log
      if (res.code==="6969"){
        routeChange("/verify")
      }
      else{
        toast.error("Submission Failed! Please retry.  ", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <div className="flex-col md:container md:mx-auto items-center sm:flex-row">
      <ToastContainer />
      <div className="container w-screen">
        <div>
          <div className="h-12">
            <button
              className="static left-36 w-full inline-flex justify-center rounded-md border border-transparent 
              shadow-sm px-4 py-2 bg-indigo-700 text-base font-medium text-white hover:bg-green-700 
              focus:outline-none sm:ml-3 sm:w-auto sm:text-sm fc-button"
              style={{ marginLeft: 0 }}
              onClick={() => {
                routeChange("/");
              }}
            >
              Go Back
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row w-full">
              <div className="w-full sm:w-11/12 formdiv" style={{ top: "100%" }}>
                <div className="row">
                <h2>Event Details</h2> <br />
                  <br />
                  <div className="input-group">
                  <h4>Event Name</h4>
                    <input
                      type="text"
                      placeholder="Event Name"
                      name="title"
                      required="required"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="input-icon">
                      <i className="fa fa-user"></i> 
                    </div>
                  </div>

                  <div className="input-group">
                  <h4>Club/Chapter</h4>
                    <input
                      type="text"
                      placeholder="Club/Chapter Name"
                      name="org"
                      required
                      onChange={(e) => setOrg(e.target.value)}
                    />
                    <div className="input-icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                  </div>
                  <div className="input-group">
                  <h4>Email</h4>
                    <input
                      placeholder="Email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div className="input-icon">
                      <i className="fa fa-user"></i>
                    </div>
                  </div>
                  <h4>Event Description</h4>
                  <div className="input-icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <div rows="10" cols="58">
                    <textarea
                      placeholder="Event Description"
                      name="desc" id="scroll-bar"
                      className="description w-full px-4 pt-4 resize:none"
                      required 
                      onChange={(e) => setDesc(e.target.value)}
                    />
                    <div className="input-icon">
                      <i className="fa fa-user"></i>
                    </div>
                  </div>
                  <div className="input-group"></div>
                </div>
                <div className="row"></div>

                <div className="col-half h-16 flex flex-wrap content-start">
                  <div className="input-icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <h4>Label Color </h4>
                  <div className="input-icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <input
                    className="input label-color"
                    type="color"
                    value={backgroundColor}
                    placeholder="Label Color"
                    name="backgroundColor"
                    required
                    style={{ height: "30px" }}
                    onChange={(e) => setbackgroundColor(e.target.value)}
                  />
                  <br></br>
                  <br></br>
                </div>

                <div className="col-half h-16 flex flex-wrap content-start">
                  <h4>Text Color </h4>
                  <div className="input-icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <input
                    className="input text-color"
                    type="color"
                    placeholder="Text Color"
                    name="textColor"
                    value={textColor}
                    required
                    style={{ height: "30px" }}
                    onChange={(e) => setTextColor(e.target.value)}
                  />
                  <div className="col-full">
                    <div className="col-full"></div>
                  </div>
                </div>
                <div className="input-group col-full"></div>
                <div className="col-full">
                  <h4>Start Date and Time of Event (IST +5:30) </h4>
                  <div className="input-group">
                    <div className="col-full">
                      <DatePicker
                        selected={start}
                        onChange={(date) => setStart(date)}
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        showTimeInput
                        name="start"
                        className="my-2 "
                      />
                    </div>
                  </div>
                </div>
                <div className="input-group"></div>
                <br></br>
                <br></br>
                <div className="input-group"></div>
                <div className="col-full">
                  <h4>End Date and Time of Event (IST +5:30) </h4>
                  <div className="input-group">
                    <div className="col-full">
                      <DatePicker
                        selected={end}
                        onChange={(date) => setEndDate(date)}
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        showTimeInput
                        required
                        name="end"
                        minDate={start}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="input-group"></div>
                </div>

                <div className="row">
                  <div className="input-group"></div>
                  <h4>Image URL</h4>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Image URL"
                    name="img"
                    onChange={(e) => setImg(e.target.value)}
                  />
                  <div className="input-icon">
                    <i className="fa fa-user"></i>
                  </div>
                </div>
                <div className="input-group">
                <h4>Event URL</h4>
                  <input
                    type="text"
                    placeholder="Event URL"
                    name="url"
                    onChange={(e) => setURL(e.target.value)}
                    required
                  />
                  <div className="input-icon">
                    <i className="fa fa-user"></i>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-top">
                <div className="w-full flex-row sm: flex-col">
                <h2 class="preview">Preview</h2>
                  <EventProfile id="livepreview"
                    img={img}
                    org={org}
                    title={title}
                    start={start}
                    end={end}
                    email={email}
                    desc={desc}
                    url={url}
                    textColor={textColor}
                    backgroundColor={backgroundColor}
                    className="w-auto inline-block"
                  />
                </div>
              </div>
            </div>
            <div className="h-12">
              <button
                type="submit"
                className="text-white font-bold bg-indigo-700 hover:bg-indigo-900 w-1/2 w-full 
                scale-100 h-12 transition ease-in duration-200 text-center text-base font-semibold 
                shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg fc-button" 
              >
                Submit Event For Approval
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
