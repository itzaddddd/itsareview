import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Link} from 'react-router-dom';

import Brand from './components/Brand/brand';
import Review from './components/Review/review';

function App() {
  return (
    <div>
      <h1>Home</h1>
      <Route path="/brand" component={Brand}  />
      <Route path="/review" component={Review} />
      <Link to="/brand">Brand</Link>
      <Link to="/review">Review</Link>
      
    </div>
  );
}

export default App;
