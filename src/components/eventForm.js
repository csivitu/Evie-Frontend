import React from 'react'
import "../styles/styles.css" 

function EventForm() {
    return (
    <div>
        <div class="container">
            <form>
                <div class="row">
                    <h4>Event Details</h4>
                    <div class="input-group input-group-icon"><input type="text" placeholder="Title" />
                        <div class="input-icon"><i class="fa fa-user"></i></div>
                    </div>
                    <div class="input-group input-group-icon"><input type="text" placeholder="Email" />
                        <div class="input-icon"><i class="fa fa-user"></i></div>
                    </div>
                    <div class="input-group input-group-icon"><input type="textarea" placeholder="Event Description" />
                        <div class="input-icon"><i class="fa fa-user"></i></div>
                    </div>
                    <div class="input-group input-group-icon"><input type="email" placeholder="Club/Chapter Name" />
                        <div class="input-icon"><i class="fa fa-envelope"></i></div>
                    </div>
                    <div class="input-group input-group-icon">
                    </div>
                </div>
                <div class="row">
                    <div class="col-half">
                        <h4>Start Date of Event</h4>
                        <div class="input-group">
                            <div class="col-full"><input type="date" placeholder="DD" /></div>
                        </div>
                    </div>
                    <div class="col-half">
                        <h4>Start Time of Event</h4>
                        <div class="input-group">
                            <div class="col"><input type="time"  /></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-half">
                        <h4>End Date of Event</h4>
                        <div class="input-group">
                            <div class="col-full"><input type="date" placeholder="DD" /></div>
                        </div>
                    </div>
                    <div class="col-half">
                        <h4>End Time of Event</h4>
                        <div class="input-group">
                            <div class="col"><input type="time" placeholder="DD" /></div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="input-group"></div>
                </div>
                <div class="input-group input-group-icon"><input type="text" placeholder="Image URL" />
                    <div class="input-icon"><i class="fa fa-user"></i></div>
                </div>
                <div class="input-group input-group-icon"><input type="text" placeholder="Event URL" />
                    <div class="input-icon"><i class="fa fa-user"></i></div>
                </div>
                <div>
                    <input type="submit" class="submit-event" value="Submit Event for Approval"/>
                </div> 
            </form>
        </div>
    </div>
    )
}

export default EventForm