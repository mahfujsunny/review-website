import React from 'react';
import Courses from '../Courses/Courses';
import ServicesExtra from '../ServicesExtra/ServicesExtra';
import './Home.css';

const Home = () => {
    return (
        <div>    
            <div className="home-section">
                <h2 ><span className="d-block">Wellcome</span>if you want to learn with a huge ammount of engineer it is the right place</h2>
            

            </div>
            <ServicesExtra/>
            <Courses/>
        </div>
    );
};

export default Home;