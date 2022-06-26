import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import axios from 'axios';
import Countdown from 'react-countdown';
import { useNavigate, useParams } from 'react-router-dom';

const AboutEvent = () => {
    const { id } = useParams()
    
    const navigate = useNavigate()
    const url = `http://localhost:8000/view/${id}`;
    const [events, setEvents] = useState(null);

    if (events) {
        var countDownDate = new Date(`${events.date}`).getTime();
    }

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setEvents(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <h5>EXPIRED</h5>;
        } else {
            return <span>{days} days : {hours} hours : {minutes} minutes : {seconds} seconds</span>;
        }
    };

    function handleSubmit() {
        navigate(`../login/${id}`);
    }

    if (events) {
        return (
            <div className='about-event'>
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">Logo</a>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-danger bg-dark" type="submit" onClick={handleSubmit}>Join Now</button>
                        </form>
                    </div>
                </nav>

                <div className='event-decs' style={{ display: "flex" }}>
                    <div className='time-notice'>
                        <div className="card" style={{ width: "40rem" }}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center" }}><Countdown date={events.date} renderer={renderer} /></h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: "40rem", marginTop: "15px", height: "300px" }}>
                            <h5 className='card-header'>NOTICE BOARD</h5>
                            <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: "center" }}>Under Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: "60rem", marginLeft: "25px", height: "380px" }}>
                        <h5 className='card-header' style={{ textAlign: "center" }}>{events.nam.toUpperCase()}</h5>
                        <div className="card-body">
                            <p className="card-title">{events.des}</p>
                        </div>
                    </div>
                </div>
                <div className='match-schedule'>
                    <h4>MATCH SCHEDULE</h4>
                    <div className="card match" style={{ backgroundColor: "#18b99e", marginTop: "20px", color: "white" }}>
                        <div className="card-body" style={{ display: "flex", justifyContent: "space-between" }}>
                            <h5 className="card-title">{events.masch}</h5>
                        </div>
                    </div>
                </div>
                {/* <div className='leader-board'>
                    <h4>LEADER BOARD</h4>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">College Name</th>
                                <th scope="col">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Haldia Institute of Technology</td>
                                <td>9.15</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div> */}
                <div className='leader-board'>
                    <h4>LEADER BOARD</h4>
                    <div className="card match" style={{ backgroundColor: "#18b99e", marginTop: "20px", color: "white" }}>
                        <div className="card-body" style={{ display: "flex", justifyContent: "space-between" }}>
                            <h5 className="card-title">{events.leader}</h5>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div></div>
    )
}

export default AboutEvent;
