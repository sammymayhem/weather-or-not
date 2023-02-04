import React, { useState } from 'react';
import { Row, Col, FormControl, Button, Form } from 'react-bootstrap';

const CitySearch = () => {

    const [city, setCity] = useState('');

    return (
        <>
            <Row>
                <Col>
                    <h1>Search your city</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={4} className="text-center">
                    <FormControl
                        placeholder="Enter city"
                        onChange={(event) => setCity(event.target.value)}
                        value={city} />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button onClick={onSearch} >Check Weather</Button>
                </Col>
            </Row>
        </>
    );

};

export default CitySearch;