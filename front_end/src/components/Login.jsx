import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
// import { Register } from './Register'
import axios from 'axios'

export const LogIn = () => {
  const { id } = useParams()
  const navi=useNavigate()
  let [hold,sethold]=useState({
    email:"",
    pass:""
  })

  useEffect(() => {
    axios.get(`http://localhost:8000/view/${id}`)
      .then(res=>{
        console.log(res.data);
      })
  })

  let containt=(e)=>{
    e.preventDefault();
    // const { email , pass }=hold;
    axios.post('http://localhost:8000/login',hold)
    .then(res=>{
      alert(res.data.message)
      alert(res.data.checker)

      axios.post(`http://localhost:8000/view/${id}`, {name: res.data.checker})
        .then(res=> {
          alert(res.data.message)
        })      
      // if(res.data.checker) {
      //     <Link to="admoin"></Link>
      // }
      navi('../');
    })
    .catch(err=>{alert(err)})
    console.log(hold);
  }
  let control=(e)=>{
    sethold({...hold,[e.target.name]:e.target.value})
  }
  return (
    <form style={{border:"2px solid black",margin:"13%",padding:"50px",borderRadius:"10px"}}>
      <div className="row mb-3"><span style={{fontSize:"50px"}}>Log In Page</span></div>
    <div className="row mb-3">
      <div>Email</div>
      <div>
        <input type="email" className="form-control" name='email' value={hold.email} onChange={control} id="inputEmail3" style={{border:"2px solid black"}}/>
      </div>
    </div>
    <div className="row mb-3">
      <div>Password
      <div>
        <input type="password" className="form-control" name='pass' value={hold.pass} onChange={control} id="inputPassword3" style={{border:"2px solid black"}}/>
      </div>
    </div>
    </div>.
    
    <button className="btn btn-success" onClick={containt}>Log In</button>
  </form>
  )
}