import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Admin_Event_View } from './Admin_Event_View'
import { Admin_Home } from './Admin_Home'

export const Admin_Manage_Event = ({ id }) => {
    // let [ide,setide]=useState(id)
    let url1 = "http://localhost:8000/view"
    // const [points, setPoints] = useState();
    let [ren, setRen] = useState("first")
    let [hold, setHold] = useState({
        des: "",
        date: "",
        masch: "",
        leader: ""
    })
    const [col, setCol] = useState();

    // const collegeHandler = (e) => {
    //     e.preventDefault();
    //     setPoints(e.target.value);
    //     setCol(e.ta)
    // }

    const url2 = `http://localhost:8000/view/${id}`;
    const updateEvent = () => {
        axios.patch(url2, hold)
            .then((res) => {
                console.log(res)
            })
        setRen("admin");
    }

    let doner = (e) => {
        setHold({ ...hold, [e.target.name]: e.target.value })
    }
    let [temp, settemp] = useState();

    useEffect(() => {
        axios.get(url1 + `/${id}`)
            .then((res) => {
                setHold(res.data)
                // console.log(hold)
                // setHold(temp)
            })
    }, [])

    console.log(hold);

    if (hold.matchs) {
        return (
            <>
                {
                    ren==="first" &&
                <div className="container">
                    <div style={{ marginBottom: "5%" }}>
                        <h1>Manage Event</h1>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Event Name</label>
                        <input type="email" className="form-control" value={hold.nam} id="exampleFormControlInput1" disabled />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Change Description</label>
                        <textarea className="form-control" name='des' value={hold.des} onChange={doner} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Change Date</label>
                        <input type="date" className="form-control" name='date' value={hold.date} onChange={doner} id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Entered Team</label>
                        <input type="email" className="form-control" value={
                            hold.matchs.map(ele => {
                                return (
                                    ele.college + "     "
                                )
                            })
                        } id="exampleFormControlInput1" disabled />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Match Schedule</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name='masch' value={hold.masch} onChange={doner} rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Enter College Name and Points</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name='leader' value={hold.leader} onChange={doner} rows="3"></textarea>
                    </div>
                    <div className="holder" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                        <button type="button" class="btn btn-primary btn-lg " onClick={updateEvent}>Save</button>
                        <button type="button" class="btn btn-danger btn-lg ">Delete</button>
                
                    </div>
            
                </div>
                }
                {ren === "admin" && <Admin_Event_View />}
            </>
        )
    }

}
