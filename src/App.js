import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar'
import routes from './routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {routes}
    </div>
  );
}

export default App;
