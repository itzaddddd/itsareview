import React, {Component} from 'react';
import './TypeReview.css';
import Rating from '../Rating/rating';
//import './Tag.css';
//import Tag from '../Tag/Tag'
import NavBar from '../../Bar/NavBar/NavBar'
import {connect} from 'react-redux'

import { getCategory } from '../../../Redux/Actions/reviewAction'

import Review from '../Review/userhisReview'
import queryString from 'query-string'
import axios from 'axios'
import Pagination from 'react-paginate'
import { WaveLoading } from 'react-loadingg'
const mapStateToProps = state =>{
    return {
        user: state.user,
        review: state.review
    }
}
class TypeReview extends Component{

    constructor(props){
        super(props);

        this.state = {
            offset: 0,
            reviews:[],
            perPage: 5,
            currentPage: 0
        }
    }
    receiveData = () => {
        let values = queryString.parse(this.props.location.search)
        axios.get(`/review/category?category=${values.category}`)
        .then(res => {
            const data = res.data;
            const slice = data.slice(
                this.state.offset,
                this.state.offset+this.state.perPage
            )
            const postData = slice.map(review => (
                <div className="one-review">
                    <Review review={review} key={review._id} />
                </div>
            ))

            this.setState({
                pageCount: Math.ceil(data.length/ this.state.perPage),
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
    /* get category from database */
    componentDidMount(){
        this.receiveData()
    }
    /* refresh data if click other link*/
    componentDidUpdate(prevProps, prevState){
        let prev_values = queryString.parse(prevProps.location.search)
        let this_values = queryString.parse(this.props.location.search) 
        if(prev_values.category !== this_values.category){
            this.receiveData()
        }
    }

    render(){
        let values = queryString.parse(this.props.location.search)
        let type = values.category
        
        return(
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col-sm containerReview">
                        <div className="reviewName" style={{fontSize:'5.5vmin'}}>หมวดหมู่ {type}</div>
                        <hr className="new5" style={{marginBottom:10, width:'100%', height:2}}></hr>
                        {this.state.postData}
                        {this.state.postData?
                            <Pagination
                                previousLabel={<i class="fas fa-chevron-left"></i>}
                                nextLabel={<i class="fas fa-chevron-right"></i>}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={this.state.perPage}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            /> 
                            :<WaveLoading color="#B9D253"/>
                        }
                    </div>
                </div>
            </div>
        )}
}

export default connect(mapStateToProps,{ getCategory })(TypeReview);