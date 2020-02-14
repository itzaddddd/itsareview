import React, {Component} from 'react';
import './ReviewFormPage.css';
import Tag from '../Tag/Tag'

class ReviewFormPage extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <form>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h3>เขียนรีวิวนิยาย</h3>
                        <h6>มาเขียนรีวิวนิยายที่คุณชอบกันเถอะ</h6>
                        <div className="title">ชื่อเรื่อง</div>
                        <input  type="text" name="rvName" placeholder=" กรอกชื่อเรื่องมาเลยจ้า"/>
                        
                        <div className="title">รีวิวตัวละคร</div>
                        <input type="text" name="rvChar" placeholder=" รีวิวว่าตัวละครแต่ละตัวเป็นแบบไหน"/>
                        <div className="title">รีวิวเนื้อเรื่อง</div>
                        <textarea id="story" name="rvContent" placeholder=" เขียนรีวิวแบ่งปันเรื่องราวให้คนอื่นกันเลย!"></textarea>
                        <div className="title">เพิ่มรูปภาพ</div>
                        <div className = "box"></div>
                    
                        <div className="title">เพิ่มหมวดหมู่<span className="limit">   *ไม่เกิน3หมวดหมู่</span></div>
                        <div className="title">เพิ่มแท็ก<span className="limit">   *ไม่เกิน3หมวดหมู่</span></div>

                        <div className="title">สถานะนิยาย</div>
                            <div class="wrap"> 
                                    <div>
                                        <input id="first" type="radio" name="content" ng-model="content" value="first"/>
                                        <label for="first"><span className="status">จบแล้ว</span></label>
                                    </div>
                                    <div>
                                        <input id="other" type="radio" name="content" ng-model="content" value="other"/>
                                        <label for="other"><span className="status">ยังไม่จบ</span></label>
                                    </div> 
                            </div>
                        <div className="title">แหล่งที่มาของนิยาย</div>
                        <div className = "dropbox">
                            <select id="country" name="country">
                                <option value="Dek-D">Dek-D</option>
                                <option value="จอยลดา">จอยลดา</option>
                                <option value="ReadAWrite">ReadAWrite</option>
                                <option value="หนังสือ">หนังสือ</option>
                                <option value="อื่นๆ">อื่นๆ</option>  
                                </select>
                        <input type="submit" value= "ยืนยัน"></input>
                        </div>
                    </div>
                </div>
            </div>
            </form>
    )}
}

export default ReviewFormPage;