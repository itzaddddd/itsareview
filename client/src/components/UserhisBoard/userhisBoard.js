import React , { Component } from 'react';
import './userhisBoard.css';

class UserHisBoard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let boardName = this.props.boardName;
        let reviewName = this.props.reviewName;
        let type = this.props.type;
        let date = this.props.date;
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
                                <a class="board-name" id="bold">ชื่อคนตั้งกระทู้</a>
                                <a class="board-name">{reviewName}</a>

                            </tr>
                            <tr>
                                <a class="type" id="bold">หมวดหมู่</a>
                                <a class="type">{type}</a>
                            </tr>
                            <tr className="trFoot">
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
export default UserHisBoard;