import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Weather.css';

const Weather = ({ dt, temp_min, temp_max, main, icon }) => {

    const date = new Date(dt);

    

    return (
        <div className='weather-card'>
            <Card style={{ width: '12rem' }}>
                <Card.Img
                    variant="top"
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                <Card.Body>
                    <Card.Title>{main}</Card.Title>
                    <p>
                        {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                    </p>
                    <p>Min: {temp_min}</p>
                    <p>Max: {temp_max}</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Weather;