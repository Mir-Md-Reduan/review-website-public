import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="services-container">
            {
                services.map(service => <Service
                    key={service.key}
                    service={service}></Service>)
            }
        </div>
    );
};

export default Services;