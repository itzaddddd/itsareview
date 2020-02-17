import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import Typebar from '../Typebar/Typebar'
import UserhisReview from '../UserhisReview/userhisReview';
import UserHisBoard from '../UserhisBoard/userhisBoard';
    
export default class Dashboard extends Component {

    render() {

        return (
            <div class = "Nav"> <NavBar/>                        
                <div className="row">
                    <div className="col-sm">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">

                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active" ></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                            </ol>

                            <div class="carousel-inner">
                                <div class="item active">
                                    <img src="main2.jpg" border="0" alt="main2.jpg"/>
                                    <div class="carousel-caption">
                                        <h3 class = "mareview">แบ่งปันนิยายที่คุณชอบได้ทุกที่</h3>
                                        <p class = "mareview">มารีวิวนิยายที่คุณอยากแชร์กับอิสสิ!</p>
                                        <button type="button" class="dark">เขียนรีวิวนิยาย</button>
                                    </div>
                                </div>

                                <div class="item">
                                    <img src="main2.jpg" border="0" alt="main2.jpg" />
                                    <div class="carousel-caption">
                                        <h3 class = "mareview">New York</h3>
                                        <p class = "mareview">We love the Big Apple!</p>
                                        <button type="button" class="dark">เขียนรีวิวนิยาย</button>
                                    </div>
                                </div>
                            </div>

    
                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
     
                        <Typebar/>

                        <div class = "re">
                            <i class="fas fa-star" id="icona"></i>รีวิวยอดนิยม
                        </div>

                        <div className="inlineReviewDashboard flex-container">
                            <div className="inlineReview"><UserhisReview/></div>
                            <div className="inlineReview"><UserhisReview/></div>
                            <div className="inlineReview"><UserhisReview/></div>
                            <div className="inlineReview"><UserhisReview/></div>
                            <div className="inlineReview"><UserhisReview/></div>
                            <div className="inlineReview"><UserhisReview/></div>
                            <div className="inlineReview"><UserhisReview/></div>
                            
                        </div>

                        <div class = "re">
                            <i class="fas fa-star" id="icona"></i>กระทู้ยอดนิยม
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

                        

                        <center class = "more">
                            <button class="btn">เพิ่มเติม<br></br><i class="fas fa-arrow-down"></i></button>
                        </center>



                        {/* <div class = "re">
                            <i class="fas fa-comments" id = "icona"></i>กระทู้ยอดนิยม
                        </div>
     
                        <UserhisReview/>

                        <center class = "more">
                            <button class="btn">เพิ่มเติม<br></br><i class="fas fa-arrow-down"></i></button>
                        </center> */}
                    </div>
                </div>
            </div>    
        );
    } 
}