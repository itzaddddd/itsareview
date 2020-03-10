import React, {Component} from 'react';
import './ReviewFormPage.css';
import Tag from '../Tag/Tag';
import NavBar from '../../Bar/NavBar/NavBar';
import {Redirect} from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik' // lib for creating form
import * as yup from 'yup' // lib for validation

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addReview } from '../../../redux/actions/reviewAction'

/* define form validaqtion */
const ReviewSchema = yup.object().shape({
    rvTitle: yup.string()
        .required("กรุณาใส่ชื่อนิยาย")
        .min(4,"ชื่อนิยายต้องยาวอย่างน้อย 4 ตัวอักษร")
        .max(60,"ชือนิยายต้องยาวไม่เกิน 60 ตัวอักษร"),
    rvChar: yup.string()
        .min(10,"ลักษณะตัวละครต้องมีความยาวอย่างน้อย 10 ตัวอักษร")
        .max(140,"ลักษณะตัวละครต้องยาวไม่เกิน 140 ตัวอักษร")
        .required("กรุณาแนะนำลักษณะตัวละคร"),
    rvContent: yup.string()
        .min(10,"การรีวิวต้องมีความยาวอย่างน้อย 10 ตัวอักษร")
        .max(1000,"การรีวิวต้องยาวไม่เกิน 1000 ตัวอักษร")
        .required("กรุณาแนะนำเนื้อเรื่อง"),
    rvTag: yup.string()
        .matches(/(?:\s|^)#[A-Za-z0-9\-\.\_]+(?:\s|$)/,"รูปแบบแฮขแท็กไม่ถูกต้อง"),
    rvStatus: yup.boolean(),
    rvSource: yup.string()

})

class ReviewFormPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            add_type: [],
            add_tag: [],
            rvTag: '',
            disabled: false
        };
    }

    static propTypes = {
        review: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        addReview: PropTypes.func.isRequired
    }

    render(){

        return(
            <div>
                <NavBar/>

                <Formik
                    /* initial values (use name of input) */
                    initialValues = {{ 
                        rvTitle: "",
                        rvChar: "",
                        rvContent: "",
                        rvStatus: false,
                        rvSource: 'Dek-D',
                        rvType: 'รักโรแมนติก',
                        rvTag: ""
                    }}
                    /* set validation form */
                    validationSchema = {ReviewSchema}
                    /*set onSubmit function*/
                    
                    onSubmit = { values => {
                        const {rvTitle, rvChar, rvContent, rvStatus, rvSource} = values;
                        const rvType = this.state.add_type;
                        const rvTag = this.state.add_tag;
                        console.log(
                            "ชื่อนิยาย : ",rvTitle,
                            "\nลักษณะตัวละคร : ",rvChar,
                            "\nรีวิวเนื้อเรื่อง : ", rvContent,
                            "\nประเภท : ", rvType, 
                            "\nแท็ก :", rvTag, 
                            "\nสถานะ : ", rvStatus,
                            "\nที่มา :", rvSource
                        )
                        
                        const newReview = {
                            rvTitle, 
                            rvChar, 
                            rvContent,
                            rvType,
                            rvTag, 
                            rvStatus, 
                            rvSource
                            
                        }

                        // Get member username
                        if(this.props.user.token){ // member review
                            this.props.addReview(newReview,this.props.user.user.userName);
                            console.log(this.props.user.token);
                        }else{ // guest review
                            this.props.addReview(newReview,"Guest");
                        }
                    }}

                >
                    {({ values, touched, errors, isSubmitting}) =>(   
                    <Form>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <h3><a href="/review/id">เขียนรีวิวนิยาย</a></h3>
                                    <h6>มาเขียนรีวิวนิยายที่คุณชอบกันเถอะ</h6>
                                    <div className="title">ชื่อเรื่อง</div>
                                        <Field  
                                            type="text" 
                                            name="rvTitle" 
                                            placeholder=" กรอกชื่อเรื่องมาเลยจ้า"
                                            className={`${touched.rvTitle && errors.rvTitle ? "is-invalid":""}`}
                                        />
                                        <ErrorMessage 
                                            component="div"
                                            name="rvTitle"
                                            className="invalid-feedback"
                                        />
                                    <div className="title">รีวิวตัวละคร</div>
                                        <Field 
                                            type="text" 
                                            name="rvChar" 
                                            placeholder=" รีวิวว่าตัวละครแต่ละตัวเป็นแบบไหน"
                                            className={`${touched.rvChar && errors.rvChar ? "is-invalid":""}`}
                                        />
                                        <ErrorMessage 
                                            component="div"
                                            name="rvChar"
                                            className="invalid-feedback"
                                        />
                                    <div className="title">รีวิวเนื้อเรื่อง</div>
                                        <Field 
                                            component="textarea" 
                                            id="story" 
                                            name="rvContent" 
                                            placeholder=" เขียนรีวิวแบ่งปันเรื่องราวให้คนอื่นกันเลย!"
                                            className={`${touched.rvContent && errors.rvContent ? "is-invalid":""}`}
                                        />
                                        <ErrorMessage 
                                            component="div"
                                            name="rvContent"
                                            className="invalid-feedback"
                                        />
                                    <div className="title">เพิ่มรูปภาพ</div>
                                    <div className = "box"></div>
                                
                                    <div className="title">เพิ่มหมวดหมู่<span className="limit">   *ไม่เกิน3หมวดหมู่</span></div>
                                    <div className = "dropbox">
                                        <Field 
                                            component="select" 
                                            name="rvType"
                                        >
                                            <option value="รักโรแมนติก">รักโรแมนติก</option>
                                            <option value="ดราม่า">ดราม่า</option>
                                            <option value="แฟนตาซี">แฟนตาซี</option>
                                            <option value="สืบสวน/ฆาตกรรม">สืบสวน/ฆาตกรรม</option>
                                            <option value="แฟนฟิค">แฟนฟิค</option>  
                                        </Field>
                                        <input
                                            type="button"
                                            value="เพิ่ม"
                                            disabled={this.state.disabled}  
                                            id="add_type"
                                            onClick={()=>{
                                                // if(this.state.add_type.length == 2){
                                                //     this.setState({disabled:true})
                                                // }
                                                this.setState({
                                                    add_type: [...this.state.add_type, values.rvType]
                                                })

                                            }}
                                        />
                                    </div>
                                    <div className="show_add_type">
                                        {this.state.add_type.map((type,index)=>{
                                            return ( 
                                                <span key={index}><strong>{type}</strong>
                                                    <span onClick={()=>{
                                                        // if(this.state.add_type.length < 2){
                                                        //     console.log("add_type_length : ",this.state.add_type.length)
                                                        //     this.setState({disabled:false})
                                                        // }
                                                        this.setState({
                                                            add_type: this.state.add_type.filter(t => t != type)}
                                                    )}}>
                                                        x
                                                    </span>
                                                </span>
                                            )
                                        })}
                                    </div>
                                    
                                    <div className="title">เพิ่มแท็ก<span className="limit">   *ไม่เกิน3หมวดหมู่</span></div>
                                        <Field
                                            type="text"
                                            name="rvTag"
                                            id="rvTag"
                                            value={this.state.rvTag}
                                            onChange={(e)=>{this.setState({rvTag: e.target.value})}}
                                            className={`${touched.rvTag && errors.rvTag ? "is-invalid":""}`}
                                        />
                                        <ErrorMessage 
                                            component="div"
                                            name="rvTag"
                                            className="invalid-feedback"
                                        />
                                        <input
                                            type="button"
                                            value="เพิ่ม"
                                            onClick={()=>{
                                                this.setState({
                                                    add_tag: [...this.state.add_tag, this.state.rvTag]
                                                },()=>{
                                                    this.setState({
                                                        rvTag: ''
                                                    })
                                                })
                                            }}
                                        />
                                    <div className="show_add_tag">
                                        {this.state.add_tag.map((tag,index)=>{

                                            return ( 
                                                <span key={index}><strong>{tag}</strong>
                                                    <span onClick={()=>{
                                                        // if(this.state.add_type.length < 2){
                                                        //     console.log("add_type_length : ",this.state.add_type.length)
                                                        //     this.setState({disabled:false})
                                                        // }
                                                        this.setState({
                                                            add_tag: this.state.add_tag.filter(t => t != tag)}
                                                    )}}>
                                                        x
                                                    </span>
                                                </span>
                                            )
                                        })}
                                    </div>
                                    <div className="title">สถานะนิยาย</div>
                                        <div className="wrap"> 
                                                <div>
                                                    <Field 
                                                        id="first" 
                                                        type="radio" 
                                                        name="rvStatus" 
                                                        ng-model="content" 
                                                        value="true"
                                                        checked
                                                    />
                                                    <label className="label" htmlFor="end">
                                                        <span className="status">จบแล้ว</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <Field 
                                                        id="other" 
                                                        type="radio" 
                                                        name="rvStatus" 
                                                        ng-model="content" 
                                                        value="false"
                                                    />
                                                    <label className="label" htmlFor="not-end">
                                                        <span className="status">ยังไม่จบ</span>
                                                    </label>
                                                </div> 
                                        </div>
                                    <div className="title">แหล่งที่มาของนิยาย</div>
                                    <div className = "dropbox">
                                        <Field 
                                            component="select" 
                                            id="country" 
                                            name="rvSource"
                                        >
                                            <option value="Dek-D">Dek-D</option>
                                            <option value="จอยลดา">จอยลดา</option>
                                            <option value="ReadAWrite">ReadAWrite</option>
                                            <option value="หนังสือ">หนังสือ</option>
                                            <option value="อื่นๆ">อื่นๆ</option>  
                                        </Field>
                                    </div>
                                    <Field
                                        type="submit" 
                                        value= "ยืนยัน" 
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>
                        </div>
                    </Form>
                    )}
                </Formik>
            </div>
            
    )}
}

const mapStateToProps = state => {
    return {
        user: state.user,
        review: state.review
    }
}

export default connect(mapStateToProps,{ addReview })(ReviewFormPage);