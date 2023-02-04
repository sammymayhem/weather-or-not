import React from 'react';
import Weather from './components/Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather
        dt={1602104400 * 1000}
        temp_min='22.67'
        temp_max='24.39'
        main='Clear'
        icon='01d'
      />
    </div>
  );
}

export default App;
