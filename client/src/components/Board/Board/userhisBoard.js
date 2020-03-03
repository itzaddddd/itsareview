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
                <div className="show-box">
                    <div className="show-board">
                        <table className="in-box">
                            <tbody>
                            <tr>
                                <td>
                                    <a className="board-name" id="bold">{boardName}</a>
                                    <a className="date">{date} <i className="far fa-heart"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a className="board-name" id="bold">ชื่อคนตั้งกระทู้</a>
                                    <a className="board-name">{reviewName}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a className="type" id="bold">หมวดหมู่</a>
                                    <a className="type">{type}</a>
                                </td>
                            </tr>
                            <tr className="trFoot">
                                <td>
                                    <a className="num-com"></a>
                                    <a className="num-of-read"><i id="icon-b" className="fas fa-eye"></i></a>
                                    <a className="comment"><i id="icon-b" className="far fa-comment-dots"></i> คอมเม้นต์</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserHisBoard;