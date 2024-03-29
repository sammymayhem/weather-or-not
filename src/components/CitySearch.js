import React, { useState } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import '../styles/CitySearch.css';

const CitySearch = ({onSearch}) => {

    const [city, setCity] = useState('');

    // const onKeyDown = (event) => {
    //     if (event.keyCode === 13) {
    //         onSearch();
    //     }
    // };

    return (
        <div className='search-container'>
            <Row>
                <Col>
                    <h1 className='search-title'>Enter a city</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={4} className="text-center">
                    <FormControl
                        placeholder="Enter a city"
                        onChange={(event) => setCity(event.target.value)}
                        value={city}
                        // onKeyDown={onKeyDown}
                         />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button className='search-btn' onClick={() => onSearch(city)}>Check Weather</Button>
                </Col>
            </Row>
        </div>
    );

};

export default CitySearch;