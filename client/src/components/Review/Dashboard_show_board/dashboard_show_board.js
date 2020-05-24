import React, { Component } from 'react';
import './dashboard_show_board.css';
import NavBar from '../../Bar/NavBar/NavBar';
import Typebar from '../../Bar/Typebar/Typebar';
import Review from '../Review/userhisReview';

function Dashboard_show_board(){
    return(
        <div className = "Nav"> <NavBar/>                        
            
                    <div className = "boarddash">หมวดหมู่กระทู้  <i id="iconBoardDash" className="menu far fa-comments fa-x"></i>
                        <hr className="underline"></hr>
                        
                    </div>

                    <div className="Typebar">
                         <Typebar />
                    </div>
                    <div className = "popboarddash">
                            กระทู้ยอดนิยม  <i id="iconBoardDash" className="menu far fa-comments fa-x"></i>
                    </div> 

                <div className="row">
                    <div className="col-sm">
                        <div className="inlineBoardDashboard2 flex-container">
                            
                                <div className="inlineBoard"><Review/></div> 
                                <div className="inlineBoard"><Review/></div> 
                                <div className="inlineBoard"><Review/></div> 
                                <div className="inlineBoard"><Review/></div> 
                                <div className="inlineBoard"><Review/></div> 
                                <div className="inlineBoard"><Review/></div> 
                        </div>     
                    </div>  
                </div>
                    <div className = "newboarddash">
                            กระทู้มาใหม่  <i id="iconBoardDash" className="menu far fa-comments fa-x"></i>
                    </div>

                <div className="row">
                    <div className="col-sm">  
                        <div className="inlineBoardDashboard2 flex-container">
                            
                                <div className="inlineBoard"><Review/></div> 
                                <div className="inlineBoard"><Review/></div> 
                                <div className="inlineBoard"><Review/></div> 
                                <div className="inlineBoard"><Review/></div>
                                <div className="inlineBoard"><Review/></div> 
                                <div className="inlineBoard"><Review/></div> 
                        </div>
                    </div>        
                </div>
            </div>
                   
        )
    }
    export default Dashboard_show_board;