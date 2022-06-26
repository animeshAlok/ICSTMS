import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import MoreEvents from './components/MoreEvents';
import Home from './components/Home';
import { LogIn } from './components/Login';
import { Admin_Home } from './components/Admin_Home';
import AboutEvent from './components/AboutEvent';
import AdminLogin from './components/AdminLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>} />
        </Route>
        <Route path="/aboutevent/:id" element={<AboutEvent/>}/>
        <Route path="/events" element={<MoreEvents/>}/>
        <Route path="/login/:id" element={<LogIn/>}/>
        <Route path="/login" element={<AdminLogin/>}/>
        <Route path="/admin" element={<Admin_Home/>}/>
      </Routes>
    </BrowserRouter>
    // <App />
);


