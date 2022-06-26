import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const MoreEvents = () => {
    const url = 'http://localhost:8000/';
    const [eventCard, setEventCard] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url + 'view')
        .then((responce) => {
            console.log(responce.data);
            setEventCard(responce.data);
        })
    }, [])

    const eventNavigator = (id) => {
        navigate(`../aboutevent/${id}`);
    }

    if (eventCard) {
        return (
            <div>
                <NavBar />
                <h4 style={{ paddingTop: "40px", paddingLeft: "30px" }}>All Upcoming Events</h4>
                <div className='cards'>
                    {
                        eventCard.map(event => {
                            return (
                                <div class="event-card" style={{ width: "25rem", alignItems: "center" }} onClick={() => eventNavigator(event._id)}>
                                        <img src={event.imaga} height="100%" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text" >{event.nam}</p>
                                        </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default MoreEvents;