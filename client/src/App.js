import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {Route, Link} from 'react-router-dom';

import Menu from './components/Menu/menu';
function App() {
  return (
    <div>
      <h1>Home</h1>
      <Menu />
    </div>
  );
}

export default App;
