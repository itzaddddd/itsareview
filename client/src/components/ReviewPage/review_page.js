import React, {Component} from 'react';
import './review_page.css';
import Rating from '../Rating/rating';
//import './Tag.css';
//import Tag from '../Tag/Tag'
import NavBar from '../NavBar/NavBar';

class ReviewPage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        
        let title = this.props.title;

        return(
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col-sm containerReview">
                        <div className="reviewName">รักโคตรๆ โหดอย่างมึง</div>
                        <hr className="new5"></hr>
                        <div className="reviewBy">รีวิวโดย<p className="reviewer">คนเขียนสุดสวย</p></div>
                        <div className = "view"><i style={{color:"9FB444"}} class="far fa-clock"></i>  วัน/เดือน/ปี</div>
                        <div className = "view"><i style={{color:"9FB444"}} class="fas fa-eye"></i>  จำนวนคนดู</div>
                        <div className="reviewBy">คะแนนนิยาย</div>

                        <div className = "reviewBy2">หมวดหมู่นิยาย</div>

                        <div className = "reviewBy2">แท็ก</div>
                        
                        
                        <div className = "reviewBy2">รีวิวตัวละคร</div>
                        <div className = "boxContent"></div>
                        <div className = "reviewBy2">รีวิวเนื้อเรื่อง</div>
                        <div className = "boxContent"></div>
                        
                        {/*This section will be implemented in next sprint*/}
                        {/*<hr className="new4"></hr>
                            <div className = "givereview">ให้คะแนนรีวิวนี้</div>
                                <Rating />
                        <hr className="new4"></hr>*/}
                    </div>
                </div>
            </div>
        )}
}

export default ReviewPage;