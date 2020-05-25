import React, {Component} from 'react';
import './ReadLater.css';
import Rating from '../../Review/Rating/rating';
import NavBar from '../../Bar/NavBar/NavBar'
import {connect} from 'react-redux'
import Pagination from 'react-paginate'
import { WaveLoading } from 'react-loadingg'

import { getReadLater } from '../../../Redux/Actions/readlaterAction'
import Review from '../../Review/Review/userhisReview'

const mapStateToProps = state =>{
    return {
        user: state.user,
        readLater: state.readLater
    }
}
class ReadLater extends Component{

    constructor(props){
        super(props);

        this.state = {
            offset: 0,
            reviews:[],
            reviewsSize: 0,
            perPage: 5,
            currentPage: 0
        }
    }

    receiveData = () => {
        const data = this.props.readLater.readLater
        const slice = data.slice(
            this.state.offset,
            this.state.offset+this.state.perPage
        )
        const postData = slice.map(review => 
            <Review review={review} key={review._id} isReadLater />
        )

        this.setState({
            pageCount: Math.ceil(data.length/ this.state.perPage),
            reviewsSize: data.length,
            postData
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

    componentWillReceiveProps(nextProps){
        if(nextProps.user.user !== this.props.user.user){
            /* get readlater'user date if user exist */
            this.props.getReadLater(nextProps.user.user._id)
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.readLater !== this.props.readLater){
            if(this.props.readLater.readLater){
                this.receiveData()
            }
        }
    }

    render(){
        return(
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col-sm containerReview">
                        <div className="reviewName">เก็บไว้อ่าน ({this.state.reviewsSize || ''})</div>
                        <hr className="new5"></hr>
                        <div className="review-save">
                            {this.state.postData}
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
                                />:
                                <WaveLoading color="#B9D253" size="small"/>
                            }    
                        </div>                     
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,{ getReadLater })(ReadLater);