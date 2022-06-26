import React from 'react';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';
import Events from '../components/Events';
import Map from '../components/Map';
import Footer from '../components/Footer';
import Quotes from '../components/Quotes';

const Home = () => {
    return (
        <div className='home-page'>
            <NavBar/>
            <Carousel/>
            <Events/>
            <hr />
            <h3 style={{textAlign: "center"}}>Sponsor</h3>
            <hr />
            <Quotes/>
            <Map/>
            <Footer/>
        </div>
    )
}

export default Home;