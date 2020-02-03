import React from 'react';
import './userhisBoard.css';

function UserhisBoard(props){
    let boardName = props.boardName;
    let reviewName = props.reviewName;
    let type = props.type;
    let date = props.date;
    return(
        <div>
            <div class="show-box">
                <div class="show-board">
                    <table class="in-box">
                        <tr>
                            <a class="board-name" id="bold">{boardName}</a>
                            <a class="date">{date} <i class="far fa-heart"></i></a>
                        </tr>
                        <tr>
                            <a class="review-name" id="bold">ชื่อคนตั้งกระทู้</a>
                            <a class="review-name">{reviewName}</a>

                        </tr>
                        <tr>
                            <a class="type" id="bold">หมวดหมู่</a>
                            <a class="type">{type}</a>
                        </tr>
                        <tr>
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
export default UserhisBoard;