import React from 'react';
import { Admin_AddEvent } from './Admin_AddEvent';
import { Admin_Event_View } from './Admin_Event_View';
import './Admin_Home.css';
import logo from '../images/logo.jpeg'
import CollegeDB from './CollegeDB';
import { useNavigate } from 'react-router-dom';


export const Admin_Home = () => {
  const navigate = useNavigate();
  let adminLogOut = (e) => {
    e.preventDefault();
    navigate('../')
  }

  return (
    <>
      <div className="d-flex align-items-start" id='fuck'>
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <div><img src={logo} alt="" srcset="" style={{ height: "70%", width: "40%" }}/></div>
          <div id='admin-btns'>
            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Dashboard</button>
            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">College Database</button>
          </div>
          <button id='logout' type="button" className="btn btn-warning" onClick={adminLogOut}>Log Out</button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0"><div><Admin_Event_View/></div></div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0"><CollegeDB/></div>
        </div>
      </div>
    </>
  )
}
