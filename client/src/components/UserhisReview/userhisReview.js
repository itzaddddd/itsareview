import React, { Component } from 'react';
import './userhisReview.css';

class UserHisReview extends Component{
    constructor(props){

    }

    render(){
        let novelName = props.novelName;
        let reviewName = props.reviewName;
        let type = props.type;
        let tag = props.tag;
        let story = props.story;
        let date = props.date;
        return(
            <div>
                <div class="show-box">
                    <div class="show-review">
                    <table class="in-box">
                        <tr>
                            <a class="novel-name" id="bold">{novelName}</a>
                            <a class="date">{date} <i class="far fa-heart"></i></a>
                        </tr>
                        <tr>
                            <a class="review-name" id="bold">ชื่อคนรีวิว</a>
                            <a class="review-name">{reviewName}</a>
                        </tr>
                        <tr>
                            <a class="type" id="bold">หมวดหมู่</a>
                            <a class="type">{type}</a>
                        </tr>
                        <tr>
                            <a class="tag" id="bold">แท็ก</a>
                            <a class="tag">{tag}</a>
                        </tr>
                        <tr>
                            <a>
                                <div class="story">{story}</div>
                            </a>
                        </tr>
                        <tr>
                            <a class="rating">เรตติ้ง </a>
                            <a class="num-com">
                            <a class="num-of-read"><i id="icon-b" class="fas fa-eye"></i></a>
                            <a class="comment"><i id="icon-b" class="far fa-comment-dots"></i> คอมเม้นต์</a>
                            </a>
                        </tr>
                    </table>
                    </div>

                </div>
            </div>
        )
    }
}
export default UserHisReview;