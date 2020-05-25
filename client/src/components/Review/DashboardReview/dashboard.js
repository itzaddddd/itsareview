import React, { Component } from 'react';
import Pagination from 'react-paginate'
import NavBar from '../../Bar/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import Typebar from '../../Bar/Typebar/Typebar'
import Review from '../Review/userhisReview';
import UserHisBoard from '../../Board/Board/userhisBoard';
import axios from 'axios'    
import { WaveLoading } from 'react-loadingg'
export default class Dashboard extends Component {

    constructor(){
        super();

        this.state = {
            offset: 0,
            reviews:[],
            reviewsSize: 0,
            perPage: 5,
            currentPage: 0
        }
    }

    receiveData = () => {
        axios.get('/review')
        .then(res => {
            const data = res.data;
            const slice = data.slice(
                this.state.offset,
                this.state.offset+this.state.perPage
            )
            const postData = slice.map(review => 
                <Review review={review} key={review._id} />
            )

            this.setState({
                pageCount: Math.ceil(data.length/ this.state.perPage),
                reviewsSize: data.length,
                postData
            })
        })
    }

    handlePageClick = e => {
        const selectedPage = e.selected
        const offset = selectedPage * this.state.perPage
        console.log(selectedPage)
        this.setState({
            currentPage: selectedPage,
            offset: offset
        },()=>{
            this.receiveData()
        }
        )
    }

    componentDidMount(){
        this.receiveData()
    }

    render() {

        return (
            <div>
                <NavBar/>                        
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Typebar/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-sm">
                        <div className="all-reviews">
                            <div className = "re">
                                <i className="fas fa-star" id="icona"></i>รีวิวทั้งหมด ({this.state.reviewsSize || ''})
                            </div>
                            <div className="inlineReviewDashboard flex-container">
                                <div className="reviewList">
                                    {this.state.postData}
                                </div>
                                {this.state.postData?
                                    <Pagination
                                        previousLabel={<i className="fas fa-chevron-left"></i>}
                                        nextLabel={<i className="fas fa-chevron-right"></i>}
                                        breakLabel={"..."}
                                        breakClassName={"break-me"}
                                        pageCount={this.state.pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={this.state.perPage}
                                        onPageChange={this.handlePageClick}
                                        containerClassName={"pagination"}
                                        subContainerClassName={"pages pagination"}
                                        activeClassName={"active"}
                                    />:<WaveLoading color="#B9D253" size="small"/>
                                } 
                            </div>
                        </div>
                    </div>
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
        );
    } 
}