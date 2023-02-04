import React from 'react';
import CitySearch from './components/CitySearch';
import './App.css';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container className="App">
      <CitySearch />
    </Container>
  );
}

export default App;
