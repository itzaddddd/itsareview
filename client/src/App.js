import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom'
// import {Route, Link} from 'react-router-dom';

// import Menu from './components/Menu/menu';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Menu from './components/Menu/menu';
import UserInfo from './components/Userinfo/userinfo';
import ReviewPage from './components/ReviewPage/review_page';
import ReviewForm from './components/ReviewFormPage/ReviewFormPage'; 
import UserHis from './components/Userhis/userhis';
import UserHisReview from './components/UserhisReview/userhisReview';
// import Search from './components/Search/search';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user" component={UserInfo} />
        <Route exact path="/review" component={ReviewPage} />
        <Route exact path="/review/create" component={ReviewForm} />
      </Switch>
      <Menu />
    </div>
  );
}
export default App;
