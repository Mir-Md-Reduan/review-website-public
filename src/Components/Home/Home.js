import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('./Home.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className="home-container">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Home;