import React, {Component} from 'react';
import './review_page.css';
import Rating from '../Rating/rating';
//import './Tag.css';
//import Tag from '../Tag/Tag'

class ReviewPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let title = this.props.title;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h3>{title}</h3>
                        <hr class="new5"></hr>
                        <body>รีวิวโดย......</body>
                        <div class = "view"><i class="far fa-clock"></i>วัน/เดือน/ปี</div>
                        <div class = "view"><i class="fas fa-eye">จำนวนคนดู</i></div>
                        <div>
                        คะแนนนิยาย
                        </div>

                        <div class = "type">หมวดหมู่นิยาย</div>

                        <div class = "type">แท็ก</div>
                        
                        
                        <div class = "type">รีวิวตัวละคร</div>
                        <div class = "box"></div>
                        <div class = "type">รีวิวเนื้อเรื่อง</div>
                        <div class = "box"></div>
                        
                        {/*This section will be implemented in next sprint*/}
                        {/*<hr class="new4"></hr>
                            <div class = "givereview">ให้คะแนนรีวิวนี้</div>
                                <Rating />
                        <hr class="new4"></hr>*/}
                    </div>
                </div>
            </div>
        )}
}

export default ReviewPage;