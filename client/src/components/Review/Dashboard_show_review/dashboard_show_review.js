import React, { Component } from 'react';
import './dashboard_show_review.css';
import NavBar from '../../Bar/NavBar/NavBar';
import Typebar from '../../Bar/Typebar/Typebar';
import Review from '../Review/userhisReview';

function Dashboard_Show_review(){
    return(
        <div className = "Nav"> <NavBar/>                        
            
                    <div className = "reviewdash">หมวดหมู่รีวิว  <i id="iconReviewDash" className="menu far fa-edit fa-x"></i>
                        <hr className="underline"></hr>
                        
                    </div>

                    <div className="Typebar">
                         <Typebar />
                    </div>
                    <div className = "popreviewdash">
                            รีวิวยอดนิยม  <i id="iconReviewDash" className="menu far fa-edit fa-x"></i>
                    </div> 
                    <div className="inlineReviewDashboard2 flex-container">
                           
                                <div className="inlineReview2"><Review/></div> 
                                <div className="inlineReview2"><Review/></div> 
                                <div className="inlineReview2"><Review/></div> 
                                <div className="inlineReview2"><Review/></div> 
                                <div className="inlineReview2"><Review/></div> 
                                <div className="inlineReview2"><Review/></div> 
                                
                            
                    </div>
                    <div className = "newreviewdash">
                            รีวิวมาใหม่  <i id="iconReviewDash" className="menu far fa-edit fa-x"></i>
                    </div>  
                    <div className="inlineReviewDashboard2 flex-container">
                            
                                <div className="inlineReview2"><Review/></div> 
                                <div className="inlineReview2"><Review/></div> 
                                <div className="inlineReview2"><Review/></div> 
                                <div className="inlineReview2"><Review/></div>
                                <div className="inlineReview2"><Review/></div> 
                                <div className="inlineReview2"><Review/></div> 
                            
                    </div>
                </div>
                   
        )
    }
    export default Dashboard_Show_review;
