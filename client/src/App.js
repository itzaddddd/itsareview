import React , {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Switch, Redirect} from 'react-router-dom';

// import adUser from './components/admin_user/aduser';
import adHome from './components/admin/admin_home/adhome';
import adReview from  './components/admin/admin_review/adreview';
//import adBoard from './components/admin_board/adboard';
import adCategory from './components/admin/admin_cate/adcate';
//import adAdvertise from './components/admin_ads/ads';
import Register from './components/Auth/Register/register';
import Login from './components/Auth/Login/login';
// import Menu from './components/Menu/menu';
import UserInfo from './components/User/UserInfo/userinfo';
// import Review from './components/Review/review';
import ReviewPage from './components/Review/ReviewPage/review_page';
import ReviewForm from './components/Review/ReviewForm/ReviewFormPage'; 
// import UserHis from './components/Userhis/userhis';
// import UserHisReview from './components/UserhisReview/userhisReview';
// import Search from './components/Search/search';
import Navbar from './components/Bar/NavBar/NavBar';
import Dashboard from './components/Review/DashboardReview/dashboard';

import ProtectedRoute from './components/ExtraRoute/ProtectedRoute/ProtectedRoute' // show user info only authenticated

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './Redux/store'
import { loadUser } from './Redux/Actions/userAction'
import firebase from 'firebase'
import axios from 'axios'
// const PrivateRoute = ({component: Component, ...rest}) => {
//   <Route {...rest} render={ (props) => (
//     store.getState().user.isAuthenticated === true
//     ? <Component {...props}/>
//     : <Redirect to="/" />
//   )}/>
// }
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
            <Route exact path="/review/create" component={ReviewForm} />
            <Route path="/review/:id" component={ReviewPage} />
            <Route exact path="/" component={Dashboard}/>
            <ProtectedRoute exact path="/user" component={UserInfo} />
            

            {/* admin */}
            <Route exact path="/admin" component={adHome} />
            {/*<Route exact path="/admin/banner" component={adAdvertise} />
            <Route exact path="/admin/user" component={adUser} />*/}          
            <Route exact path="/admin/review" component={adReview} />
            {/*<Route exact path="/admin/board" component={adBoard} />*/}
            <Route exact path="/admin/category" component={adCategory} />

            
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
