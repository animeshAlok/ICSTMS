import React, { useEffect, useState } from 'react';
import './Admin_Event_View.css';
import Axios from 'axios';
// import {Link, useNavigate} from 'react-router-dom'
import { Admin_AddEvent } from './Admin_AddEvent';
import { Admin_Manage_Event } from './ManageEvent';

// let temp;
export const Admin_Event_View = () => {
    let [temp,settemp]=useState()
    let [hold, setHold] = useState([])
    let [ren, setRen] = useState("first")
    let url = "http://localhost:8000/view"
    useEffect(() => {
        Axios.get(url)
            .then((res) => {
                setHold(res.data);
            })
            console.log(hold);
    }, [])
    // hold.map(ele => { console.log(ele.id) })
    let valua=(holder)=>{
        settemp(holder);
        // console.log(temp);
        setRen("manage")
    }
    return (
        <>
            <div className="container">
                {ren==="first" && <div className="content">
                    <div><h1>Dashboard</h1></div>
                    <div className="cars">
                        {
                            hold.map(ele => {
                                return (
                                    <div className="car" style={{ borderRadius: "10px" }}>
                                        <h2>{ele.nam}</h2>
                                        <p>{ele.date}</p>
                                        <button type="button" className="btn btn-outline-warning" onClick={()=>{valua(ele._id)}} >Manage</button>
                                    </div>
                                )
                            })
                        }
                        <div className="car" id='adder' onClick={()=>{setRen("admin")}} style={{ borderRadius: "10px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>
                        </div>
                    </div>
                </div>}
                {ren === "admin" && <Admin_AddEvent />}
                {ren === "manage" && <Admin_Manage_Event id={temp}/>}
            </div>
        </>
    )
}
