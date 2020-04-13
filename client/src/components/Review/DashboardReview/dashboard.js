import React, { Component } from 'react';
import NavBar from '../../Bar/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import Typebar from '../../Bar/Typebar/Typebar'
import Review from '../Review/userhisReview';
import UserHisBoard from '../../Board/Board/userhisBoard';
    
export default class Dashboard extends Component {

    render() {

        return (
            <div className = "Nav"> <NavBar/>                        
                <div className="row">
                    <div className="col-sm">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">

                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active" ></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="item active">
                                    <img src="main2.jpg" border="0" alt="main2.jpg"/>
                                    <div className="carousel-caption">
                                        <h3 className = "mareview">แบ่งปันนิยายที่คุณชอบได้ทุกที่</h3>
                                        <p className = "mareview">มารีวิวนิยายที่คุณอยากแชร์กับอิสสิ!</p>
                                        <a href="/review/create"><button type="button" className="dark">เขียนรีวิวนิยาย</button></a>
                                    </div>
                                </div>

                                <div className="item">
                                    <img src="main2.jpg" border="0" alt="main2.jpg" />
                                    <div className="carousel-caption">
                                        <h3 className = "mareview">New York</h3>
                                        <p className = "mareview">We love the Big Apple!</p>
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
                            <div className="inlineReview"></div>
                            <div className="inlineReview"></div>
                            <div className="inlineReview"></div>
                            
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