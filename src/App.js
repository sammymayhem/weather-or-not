import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import { API_KEY, API_BASE_URL } from './apis/config';
import CitySearch from './components/CitySearch';
import WeatherList from './components/WeatherList';
import Header from './components/Header';

const App = () => {

  const {data, error, isLoading, setUrl} = UseFetch();

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if (!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  }

  return (
    <Container className="App">
      <Header />
      <CitySearch
        onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} />

        {getContent()}
    </Container>
  );
};

export default App;
