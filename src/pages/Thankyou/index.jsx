import React from 'react';
import "./styles.css";

const Thankyou=() =>{
    return (
        <div class="content flex md:container md:mx-auto items-center">
        <div class="wrapper-1">
          <div class="wrapper-2">
            <h1>Thank you!</h1>
            <p> Thank you for submitting your event for approval.  </p>
            <p> Please check your email for updates from the admin. </p>
            <br></br>
            <br></br>
            <a href="/" class="go-home">
            Go back to V-Cal
            </a>
          </div>
      </div>
      </div>
    );
};

export default Thankyou;