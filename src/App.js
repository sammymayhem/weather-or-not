import React from 'react';
import CitySearch from './components/CitySearch';
import './App.css';
import { Container } from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import { API_KEY, API_BASE_URL } from './apis/config';

const App = () => {

  const {data, error, isLoading, setUrl} = UseFetch();

  return (
    <Container className="App">
      <CitySearch
        onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)} />
    </Container>
  );
};

export default App;
