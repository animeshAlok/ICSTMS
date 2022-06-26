import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { Register } from './Register'

const AdminLogin = () => {
    const navigate = useNavigate();

    const [hold, setHold] = useState({
        email: "",
        pass: ""
    })

    const containt = (e) => {
        e.preventDefault();
        if (hold.email == "admin@gmail.com" && hold.pass == "admin") {
            navigate('../admin');
        }
    }

    const control = (e) => {
        setHold({...hold, [e.target.name]: e.target.value})
    }


    return (
        <form style={{ border: "2px solid black", margin: "13%", padding: "50px", borderRadius: "10px" }}>
            <div className="row mb-3"><span style={{ fontSize: "50px" }}>Log In As Admin</span></div>
            <div className="row mb-3">
                <div>Email</div>
                <div>
                    <input type="email" className="form-control" name='email' value={hold.email} onChange={control} id="inputEmail3" style={{ border: "2px solid black" }} />
                </div>
            </div>
            <div className="row mb-3">
                <div>Password
                    <div>
                        <input type="password" className="form-control" name='pass' value={hold.pass} onChange={control} id="inputPassword3" style={{ border: "2px solid black" }} />
                    </div>
                </div>
            </div>.

            <button className="btn btn-success" onClick={containt}>Log In</button>
        </form>
    )
}

export default AdminLogin;