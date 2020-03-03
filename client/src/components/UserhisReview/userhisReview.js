import React, { Component } from 'react';
import './userhisReview.css';

class UserHisReview extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let novelName = this.props.novelName;
        let reviewName = this.props.reviewName;
        let type = this.props.type;
        let tag = this.props.tag;
        let story = this.props.story;
        let date = this.props.date;
        return(
            <div className="show-box userHis">
                <div className="show-review">
                    <div className="in-box">
                        <div>
                            <div className="novel-name" id="bold">{novelName}</div>
                            <div className="date">{date} <i className="far fa-heart love"></i></div>
                        </div>
                        <div>
                            <div className="review-name" id="bold">ชื่อคนรีวิว</div>
                            <div className="review-name">{reviewName}</div>
                        </div>
                        <div>
                            <div className="type" id="bold">หมวดหมู่</div>
                            <div className="type">{type}</div>
                        </div>
                        <div>
                            <div className="tag" id="bold">แท็ก</div>
                            <div className="tag">{tag}</div>
                        </div>
                        <div>
                            <div>
                                <div className="story">{story}</div>
                            </div>
                        </div>
                        <div>
                            <div className="rating">เรตติ้ง</div>
                            <div className="num-com">
                            <div className="num-of-read"><i id="icon-b" className="fas fa-eye"></i></div>
                            <div className="comment"><i id="icon-b" className="far fa-comment-dots"></i>คอมเม้นต์</div>
                            </div>
                        </div>

                        
                        
                </div>               
            </div>

            
            
</div>


        )
    }
}
export default UserHisReview;

