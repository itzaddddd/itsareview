import React , {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom'


import adHome from './components/admin_home/adhome';
import adUser from './components/admin_user/aduser';
import adReview from  './components/admin_review/adreview';
import adBoard from './components/admin_board/adboard';
import adCategory from './components/admin_cate/adcate';
import adAdvertise from './components/admin_ads/ads';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Menu from './components/Menu/menu';
import UserInfo from './components/Userinfo/userinfo';
import ReviewPage from './components/ReviewPage/review_page';
import ReviewForm from './components/ReviewFormPage/ReviewFormPage'; 
import UserHis from './components/Userhis/userhis';
import UserHisReview from './components/UserhisReview/userhisReview';
import Dashboard from './components/dashboardReview/dashboard';
// import Search from './components/Search/search';
function App() {
  return (
    <div>
      <Switch>
        {/* <Dashboard/> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user" component={UserInfo} />
        <Route exact path="/review" component={ReviewPage} />
        <Route exact path="/review/create" component={ReviewForm} />
        <Route exact path="/" component={Dashboard}/>


        {/* admin */}
        <Route exact path="/admin" component={adHome} />
        <Route exact path="/admin/banner" component={adAdvertise} />
        <Route exact path="/admin/user" component={adUser} />          
        <Route exact path="/admin/review" component={adReview} />
        <Route exact path="/admin/board" component={adBoard} />
        <Route exact path="/admin/category" component={adCategory} />
      </Switch>
    </div>
  );
}
export default App;
