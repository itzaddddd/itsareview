import React, {Component} from 'react';
import './SearchResult.css';
import NavBar from '../../Bar/NavBar/NavBar'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getCategory } from '../../../Redux/Actions/reviewAction'
import { getSearchFormQuery } from '../../../Redux/Actions/searchAction'
import Review from '../../Review/Review/userhisReview'
import queryString from 'query-string'

const mapStateToProps = state =>{
    return {
        user: state.user,
        review: state.review,
        search: state.search
    }
}
class SearchResult extends Component{

    constructor(props){
        super(props);

        this.state = {
            serch_result: []
        }
    }

    static propTypes = {
        review: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        search: PropTypes.object.isRequired,
        getSearchFormQuery: PropTypes.func.isRequired
    }
    
    /* refresh data if click other link*/
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.search !== this.props.search){

    //     }
    // }

    componentDidMount(){
        let query = this.props.location.search
        this.props.getSearchFormQuery(query)
    }

    render(){
        if(this.props.search){
            //console.log('search result ',this.props.search.search_result)        
            return(
                <div>
                    <NavBar/>
                    <div className="row">
                        <div className="col-sm containerReview">
                            <div className="reviewName">ผลการค้นหา</div>
                            <hr className="new5"></hr>
                            {this.props.search.search_result&&(this.props.search.search_result.length!==0)?
                                this.props.search.search_result.map(review => 
                                    <Review review={review} key={review._id} />
                                ):
                                <span className="search-not-found">ไม่พบรีวิวที่ต้องการ</span>
                            }
                        </div>
                    </div>
                    <div id="search-back">
                        <button className="button-search-back" onClick={()=>this.props.history.push('/search')}>กลับไปหน้าค้นหา</button>
                    </div>
                </div>
            )
        }else{return ''}
    }
}

export default connect(mapStateToProps,{ getSearchFormQuery })(SearchResult);