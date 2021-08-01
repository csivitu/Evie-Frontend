import React from 'react';
import "./styles.css";

const Thankyou=() =>{
    return (
        <div className="content flex md:container md:mx-auto items-center">
        <div className="wrapper-1">
          <div class="wrapper-2">
            <h1>Thank you!</h1>
            <p> Thank you for submitting your event for approval.  </p>
            <p> Please check your email for updates from the admin. </p>
            <br></br>
            <br></br>
            <a href="/" className="go-home">
            Go back to V-Cal
            </a>
          </div>
      </div>
      </div>
    );
};

export default Thankyou;