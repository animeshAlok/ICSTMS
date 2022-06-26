import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { LogIn } from './Log In'
import axios from 'axios'

export const Register = () => {
    const navi = useNavigate()
    let [hold, sethold] = useState({
        email: "",
        pass: "",
        college: ""
    })
    let update = e => {
        sethold({ ...hold, [e.target.name]: e.target.value });
    }
    let url = "http://localhost:8000/register1"
    let display = (e) => {
        e.preventDefault();
        // const { email, pass, namea } = hold;
        axios.post(url, hold)
            .then((res) => { alert(res.data.massege) })
    }
    return (
        <form style={{ border: "2px solid black", margin: "13%", padding: "50px", borderRadius: "10px" }}>
            <div className="row mb-3"><span style={{ fontSize: "50px" }}>Sign Up Page</span></div>
            <div className="row mb-3">
                <div>Enter Your Email</div>
                <div>
                    <input type="email" className="form-control" id="inputEmail3" name='email' value={hold.email} onChange={update} style={{ border: "2px solid black" }} required />
                </div>
            </div>
            <div className="row mb-3">
                <div>Create An Password</div>
                <div>
                    <input type="password" className="form-control" id="inputPassword3" name='pass' value={hold.pass} onChange={update} style={{ border: "2px solid black" }} required />
                </div>
            </div>
            <div className="row mb-3">
                <div>Enter Your Name</div>
                <div>
                    <input type="email" className="form-control" id="inputEmail3" name='college' value={hold.college} onChange={update} style={{ border: "2px solid black" }} required />
                </div>
            </div>
            <button type="submit" className="btn btn-success" onClick={display}>Register</button>
            <div><span>or</span></div>
            <span>Already Have an Account </span>
            <button type="submit" className="btn btn-success" onClick={() => { navi('/LogIn') }}>Sign In</button>
        </form>
    )
}