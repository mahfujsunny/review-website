import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './ServicesExtra.css';

const ServicesExtra = () => {
    const [service , setService] = useState([]);
    
    useEffect(()=> {
        fetch('./database.json')
        .then(res => res.json())
        .then(data => setService(data[0].services) )
    },[])

    return (
        <div>
            <h2 className="fs-1 fw-bold text-info m-5 heading-text">Services</h2>
            <div className="row">
                
            {
                service.slice(0,4).map(service => <Service 
                service={service}>

                </Service>)
            }
            </div>
            
        </div>
    );
};

export default ServicesExtra;