import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import base64 from 'image-to-base64';

export const Admin_AddEvent = () => {
  const navigate = useNavigate();
  let [hold, sethold] = useState({
    nam: "",
    des: "",
    id: "",
    date: "",
    imaga: ""
  })
  let murgi = (e) => {
    sethold({ ...hold, [e.target.name]: e.target.value })
  }

  const [img, updateImg] = useState("");

  let url = "http://localhost:8000/register"
  let sender = (e) => {
    console.log(hold)
    e.preventDefault();
    // alert(hold.des)
    // const { nam, des } = hold;
    Axios.post(url, hold)
      .then((res) => { alert(res.data.message) });

    navigate('../admin');

  }
  return (
    <>
      <div className="container">
        <div className="header" style={{ display: 'flex', justifyContent: "space-between" }}>
          <h1>Add Event</h1>
          <button type="button" className="btn btn-success" style={{ margin: "10px" }} onClick={sender}>Add +</button>
        </div>
        <div className="adder" style={{ margin: "20px" }}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Event Title</label>
            <input type="text" className="form-control" name='nam' value={hold.nam} id="exampleFormControlInput1" placeholder="name@example.com" onChange={murgi} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Event ID</label>
            <input type="number" className="form-control" name='id' value={hold.id} id="exampleFormControlInput1" placeholder="name@example.com" onChange={murgi} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Date of Event</label>
            <input type="date" className="form-control" name='date' value={hold.date} id="exampleFormControlInput1" onChange={murgi} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" name='des' value={hold.des} id="exampleFormControlTextarea1" rows="3" onChange={murgi}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Image</label>
            <input className="form-control" name='imaga' value={hold.imaga} id="exampleFormControlTextarea1" placeholder="Enter image link" onChange={murgi} />
          </div>
        </div>
      </div>
    </>
  )
}
