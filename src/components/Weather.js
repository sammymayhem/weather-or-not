import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Weather.css';

const Weather = ({ dt, temp_min, temp_max, main, icon }) => {

    const date = new Date(dt);

    const tempMin = Math.round(temp_min);
    const tempMax = Math.round(temp_max);

    return (
        <div className='weather-card'>
            <Card style={{ width: '12rem' }}>
                <Card.Img
                    className='weather-image'
                    variant="top"
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                <Card.Body className='weather-body'>
                    <Card.Title>{main}</Card.Title>
                    <p>
                        {date.toLocaleTimeString()}
                    </p>
                    <p>Min: {tempMin} deg</p>
                    <p>Max: {tempMax} deg</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Weather;