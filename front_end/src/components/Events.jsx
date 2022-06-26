import event1 from '../images/event1.jpg';
import event2 from '../images/event2.jpg';
import event3 from '../images/event3.jpg';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
    const url = "http://localhost:8000/view";
    const [events, setEvents] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setEvents(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])

    if (events) {
        console.log(events[0].imaga);
        return (
            <div className='events'>
                <div className='event-header'>
                    <h3>Upcoming Events</h3>
                    <button className='browse-btn'><Link to="events" className='link-btn'>Browse More Events</Link></button>
                </div>
                <div className='cards'>
                    <div class="event-card" style={{ width: "25rem", alignItems: "center" }}>
                        <Link to={`aboutevent/${events[0]._id}`}>
                            <img src={events[0].imaga} height="100%" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text" >{events[0].nam.toUpperCase()}</p>
                            </div>
                        </Link>
                    </div>
                    <div class="event-card" style={{ width: "25rem", alignItems: "center" }}>
                        <Link to={`aboutevent/${events[1]._id}`}>
                            <img src={events[1].imaga} height="100%" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text" >{events[1].nam.toUpperCase()}</p>
                            </div>
                        </Link>
                    </div>
                    <div class="event-card" style={{ width: "25rem", alignItems: "center" }}>
                        <Link to={`aboutevent/${events[2]._id}`}>
                            <img src={events[2].imaga} height="100%" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text" >{events[2].nam.toUpperCase()}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>No Upcoming events</div>
    )
}

export default Events;