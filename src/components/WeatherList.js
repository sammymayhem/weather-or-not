import React from "react";
import { Col, Row } from 'react-bootstrap';
import moment from "moment";
import Weather from './Weather';
import '../styles/WeatherList.css';

const WeatherList = ({ weathers }) => {

    console.log(weathers);

    const date = weathers[0].dt_text;

    const formatDate = moment(date).format("dddd, MMMM Do");

    return (
        <div className="weather-container">
            <Row className="title-row">
                <h2>{formatDate} <span className="title-right">(12 hour forecast)</span></h2>
            </Row>
            <Row className="weather-row">
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