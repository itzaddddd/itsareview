import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Link} from 'react-router-dom';

import Brand from './components/Brand/brand';
import Review from './components/Review/review';
import Register from './components/register';
function App() {
  return (
    <div>
      <h1>Home</h1>
      <Route path="/brand" component={Brand}  />
      <Route path="/review" component={Review} />
      <Route path="/register" component={Register} />
      <Link to="/brand">Brand</Link>
      <Link to="/review">Review</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default App;
