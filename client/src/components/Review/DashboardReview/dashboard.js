import React, { Component } from 'react';
import NavBar from '../../Bar/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import Typebar from '../../Bar/Typebar/Typebar'
import Review from '../Review/userhisReview';
import Pagination from 'react-paginate' 
import UserHisBoard from '../../Board/Board/userhisBoard';
import axios from 'axios'    
export default class Dashboard extends Component {

    constructor(){
        super();

        this.state = {
            reviews:[]
        }
    }

    componentDidMount(){
        console.log('review')
        axios.get('/review')
        .then(res=>{this.setState({reviews:res.data},()=>console.log(this.state.reviews))})
        .catch(err=>console.log(err))
    }

    render() {

        return (
            <div className = "Nav"> <NavBar/>                        
                <div className="row">
                    <div className="col-sm">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">

                            {/* <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active" ></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                            </ol> */}

                            <div className="carousel-inner">
                                <div className="item active">
                                    <img className="imgBanner" src="main2.jpg" border="0" alt="main2.jpg"/>
                                    <div className="carousel-caption">
                                        <h3 className = "mareview">แบ่งปันนิยายที่คุณชอบได้ทุกที่นี่</h3>
                                        <p className = "mareview">มารีวิวนิยายที่คุณอยากแชร์กับอิสสิ!</p>
                                        <a href="/review/create"><button type="button" className="dark">เขียนรีวิวนิยาย</button></a>
                                    </div>
                                </div>

                                <div className="item">
                                    <img className="imgBanner" src="main2.jpg" border="0" alt="main2.jpg" />
                                    <div className="carousel-caption">
                                        <h3 className = "mareview">สนใจโฆษณากับอิสไหม ?</h3>
                                        <p className = "mareview">ติดต่อทีมอิสสิ !</p>
                                        <a href="/review/create"><button type="button" className="dark">เขียนรีวิวนิยาย</button></a>
                                    </div>
                                </div>
                            </div>

    
                            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        
                        <Typebar/>
                        
                        <div className = "re">
                            <i className="fas fa-star" id="icona"></i>รีวิวยอดนิยม
                        </div>

                        <div className="inlineReviewDashboard flex-container">
                            <div>
                                {/*this.state.reviews?this.state.reviews.map(review => 
                                    <div><Review review={review} key={review._id} /></div>
                                ):''*/}  
                            </div>
         
                        </div>

                       {/*<div className = "re">
                            <i className="fas fa-star" id="icona"></i>กระทู้ยอดนิยม
                        </div>

                        <div className="inlineBoardDashboard ">
                            <div className="inlineBoard"><UserHisBoard/></div>
                            <div className="inlineBoard"><UserHisBoard/></div>
                            <div className="inlineBoard"><UserHisBoard/></div>
                            <div className="inlineBoard"><UserHisBoard/></div>
                            <div className="inlineBoard"><UserHisBoard/></div>
                            <div className="inlineBoard"><UserHisBoard/></div>
                            <div className="inlineBoard"><UserHisBoard/></div>
                            
                        </div>

                        

                        <center className = "more">
                            <button className="btn">เพิ่มเติม<br></br><i className="fas fa-arrow-down"></i></button>
                        </center>*/}



                        {/* <div className = "re">
                            <i className="fas fa-comments" id = "icona"></i>กระทู้ยอดนิยม
                        </div>
     
                        <UserhisReview/>

                        <center className = "more">
                            <button className="btn">เพิ่มเติม<br></br><i className="fas fa-arrow-down"></i></button>
                        </center> */}
                    </div>
                </div>
            </div>    
        );
    } 
}