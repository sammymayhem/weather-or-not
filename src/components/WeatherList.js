import React from "react";
import { Col, Row } from 'react-bootstrap';
import Weather from './Weather';
import '../styles/WeatherList.css';

const WeatherList = ({ weathers }) => {

    console.log(weathers)

    return (
        <div className="weather-container">
            <Row>
                {weathers.map(({ dt, main, weather }) => (
                    <Col className="weather-list" key={dt}>
                        <Weather
                            temp_max={main.temp_max}
                            temp_min={main.temp_min}
                            dt={dt * 1000}
                            main={weather[0].main}
                            icon={weather[0].icon}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default WeatherList;