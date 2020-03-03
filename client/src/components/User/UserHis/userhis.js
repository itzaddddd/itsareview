import React, { Component } from 'react';
import './userhis.css';

class Userhis extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="show-box">
                <div class="show-review">
                <table class="in-box">
                    <tr>
                        <a class="novel-name">ชื่อนิยาย</a> 
                        <a class="date">วันที่/เวลา <i class="far fa-heart"></i></a>
                    </tr>
                    <tr>
                        <a class="review-name">ชื่อคนเขียนรีวิว</a>
                    </tr>
                    <tr>
                        <a class="type">หมวดหมู่</a>
                    </tr>
                    <tr>
                        <a class="tag">แท็ก</a>
                    </tr>
                    <tr>
                        <a>
                            <div class="story">เนื้อหารีวิวโดยย่อ จะลองทดสอบการตัดคำว่าจะไม่ให้เกิน 2 บรรทัด "บูยองจู (รับบทโดย ฮันซอกกยู) หรือ อาจารย์คิม เขาเป็นแพทย์ที่แปลกไม่ต้องการเข้าสังคม ซึ่งทำงานอยู่ที่โรงพยาบาลโทรมๆแห่งหนึ่งชื่อว่า ทลดัม และอีกหนึ่งตัวละครหลัก ชาอึนแจ (รับบทโดย อีซองคยอง) แพทย์ Resident สาวปีที่ 2 ที่เชียวชาญด้านการผ่าตัดหัวใจและหลอดเลือดและเธอผู้ไม่เคยมีประสบการณ์ของคำว่าพลาดมาก่อนเลย สำหรับตัวละครหลักอีกหนึ่งคือ ซออูจิน (รับบทโดย อันฮโยซอบ) แพทย์ Fellow หรือแพทย์ผู้ช่วยอาจารย์ปีที่ 2 ซึ่งมีความสามารถที่ยอดเยี่ยมในการผ่าตัดแต่เพราะเขามีชีวิตที่ยากลำบากจึงทำให้เขาไม่เชื่อในเรื่องความสุข ทั้ง ชาอึนแจ และ ซออูจิน จะมาพบอาจารย์คิมผู้แปลกประหลาด และได้เติบโตในฐานะมนุษย์และแพทย์ไปพร้อมๆกันหลังจากที่ผ่านประสบการณ์มากมายร่วมกันกับอาจารย์คิม"</div>
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
                {/* This section will be implemented in next sprint */}
                {/*<div class="show-board">
                    <table class="in-box">
                        <tr>
                            <a class="board-name">ชื่อกระทู้</a>
                            <a class="date">วันที่/เวลา <i class="far fa-heart"></i></a>
                        </tr>
                        <tr>
                            <a class="review-name">ชื่อคนตั้งกระทู้</a>
                        </tr>
                        <tr>
                            <a class="type">หมวดหมู่</a>
                        </tr>
                        <tr>
                            <a class="num-com">
                            <a class="num-of-read"><i id="icon-b" class="fas fa-eye"></i></a>
                            <a class="comment"><i id="icon-b" class="far fa-comment-dots"></i> คอมเม้นต์</a>
                            </a>
                        </tr>
                    </table>
                </div>*/}
            </div>
        )
    }
}
export default Userhis;