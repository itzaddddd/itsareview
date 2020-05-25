import React , {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Switch, Redirect} from 'react-router-dom';

import Dashboard_Show_review from './components/Review/Dashboard_show_review/dashboard_show_review';
import Dashboard_show_board from './components/Review/Dashboard_show_board/dashboard_show_board';
import adUser from './components/admin/admin_user/aduser';
import adHome from './components/admin/admin_home/adhome';
import adReview from  './components/admin/admin_review/adreview';
//import adBoard from './components/admin_board/adboard';
import adCategory from './components/admin/admin_cate/adcate';
//import adAdvertise from './components/admin_ads/ads';
import Register from './components/Auth/Register/register';
import Login from './components/Auth/Login/login';
// import Menu from './components/Menu/menu';
import UserInfo from './components/User/UserInfo/userinfo';
import UserEditForm from './components/User/UserEditForm/UserEditForm'
import ReviewPage from './components/Review/ReviewPage/review_page';
import ReviewForm from './components/Review/ReviewForm/ReviewFormPage'; 
import SearchForm from './components/Search/SearchForm/search';
import SearchResult from './components/Search/SearchResult/SearchResult'
import Navbar from './components/Bar/NavBar/NavBar';
import Dashboard from './components/Review/DashboardReview/dashboard';
import TypeReview from './components/Review/TypeReview/TypeReview'
import TagReview from './components/Review/TagReview/TagReview'
import ReadLater from './components/ReadLater/ReadLater/ReadLater'
import EditReviewForm from './components/Review/EditReviewForm/EditReviewForm'
import ProtectedRoute from './components/ExtraRoute/ProtectedRoute/ProtectedRoute' // show user info only authenticated
import ForgotForm from './components/Auth/Password/Forgot/ForgotForm'
import ResetForm from './components/Auth/Password/Reset/ResetPassForm'
import ChangePassword from './components/Auth/Password/Change/ChangePass'
// import popUpEditCategory from './components/admin/admin_cate/popUpEditCategory'

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './Redux/store'
import { loadUser } from './Redux/Actions/userAction'
class App extends Component{

  // load user
  componentDidMount(){
    store.dispatch(loadUser());
  }
  
  render(){


    return (
      /* set redux store */
      <Provider store={store}>
        {/* set router*/}
        <Router> 
          <Switch>

            {/* User */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot" component={ForgotForm} />
            <Route exact path="/reset/:token" component={ResetForm} />
            <Route exact path="/search" component={SearchForm} />
            <Route exact path="/search/result" component={SearchResult} />
            <Route exact path="/review/category" component={TypeReview} />
            <ProtectedRoute exact path="/review/create" component={ReviewForm} />
            <Route exact path="/review/tag" component={TagReview} />
            <Route exact path="/review/:id" component={ReviewPage} />
            <ProtectedRoute exact path="/review/:id/edit" component={EditReviewForm} />
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/dashboardShowReview" component= {Dashboard_Show_review} />
            <Route exact path="/dashboardshowboard" component= {Dashboard_show_board} />
            <ProtectedRoute exact path="/user/:id" component={UserInfo} />
            <ProtectedRoute exact path="/user/:id/changepass" component={ChangePassword} />
            <ProtectedRoute exact path="/user/:id/edit" component={UserEditForm} />
            <ProtectedRoute path="/user/:id/readlater" component={ReadLater} />
            <ProtectedRoute path="/user//readlater" component={ReadLater} />
            
            
            

            {/* admin */}
            <Route exact path="/admin" component={adHome} />
            {/*<Route exact path="/admin/banner" component={adAdvertise} />*/}
            <Route exact path="/admin/users" component={adUser} />          
            <Route exact path="/admin/reviews" component={adReview} />
            {/*<Route exact path="/admin/board" component={adBoard} />*/}
            <Route exact path="/admin/categories" component={adCategory} />
            
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;