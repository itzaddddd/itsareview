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
            <div class="show-box userHis">
                <div class="show-review">
                    <div class="in-box">
                        <div>
                            <a class="novel-name" id="bold">{novelName}</a>
                            <a class="date">{date} <i class="far fa-heart love"></i></a>
                        </div>
                        <div>
                            <a class="review-name" id="bold">ชื่อคนรีวิว</a>
                            <a class="review-name">{reviewName}</a>
                        </div>
                        <div>
                            <a class="type" id="bold">หมวดหมู่</a>
                            <a class="type">{type}</a>
                        </div>
                        <div>
                            <a class="tag" id="bold">แท็ก</a>
                            <a class="tag">{tag}</a>
                        </div>
                        <div>
                            <a>
                                <div class="story">{story}</div>
                            </a>
                        </div>
                        <div>
                            <a class="rating">เรตติ้ง</a>
                            <a class="num-com">
                            <a class="num-of-read"><i id="icon-b" class="fas fa-eye"></i></a>
                            <a class="comment"><i id="icon-b" class="far fa-comment-dots"></i>คอมเม้นต์</a>
                            </a>
                        </div>

                        
                        
                </div>               
            </div>

            
            
</div>


        )
    }
}
export default UserHisReview;