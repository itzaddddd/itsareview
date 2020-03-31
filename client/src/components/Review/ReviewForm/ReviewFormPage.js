import React, {Component} from 'react';
import './ReviewFormPage.css';
import Tag from '../Tag/Tag';
import NavBar from '../../Bar/NavBar/NavBar';
import {Redirect} from 'react-router-dom';

import Thumb from './Thumb'
import Dropzone from 'react-dropzone'

import { Formik, Form, Field, ErrorMessage } from 'formik' // lib for creating form
import * as yup from 'yup' // lib for validation

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addReview } from '../../../Redux/Actions/reviewAction'

import firebase, { storage } from 'firebase'

/* define form validation */
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
        .matches(/^#?[^\s!@#$%^&*()=+./,\[{\]};:'"?><]+$/,"รูปแบบแฮขแท็กไม่ถูกต้อง"),
    rvStatus: yup.boolean(),
    rvSource: yup.string()

})

const mapStateToProps = state => {
    return {
        user: state.user,
        review: state.review
    }
}

const uploadImage = img => {
    return new Promise((resolve, reject)=>{
        let file = img
        let storageRef = firebase.storage().ref('Itsareview/review')
        let name = file.name
        let metadata = {contentType: file.type}
        let task = storageRef.child(name).put(file, metadata)
        task
            .then(()=>{
                task.snapshot.ref.getDownloadURL()
                .then(downloadUrl=>{
                    console.log('url : ',downloadUrl)
                    resolve(downloadUrl)
                })
            })
            .catch(err=>reject(err))
    })
}


class ReviewFormPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            add_type: [],
            add_tag: [],
            add_image: [],
            disabled: false,
            img: null,
            username:"",
            redirect: false,
            des: null
            
        };

        this.addNewReview = this.addNewReview.bind(this)
        this.setUsername = this.setUsername.bind(this)

        let firebaseConfig = {
            apiKey: "AIzaSyC6poQ1xhuRkxYXwOUORCPfp7sPr7VyyeA",
            authDomain: "itsareview-404.firebaseapp.com",
            databaseURL: "https://itsareview-404.firebaseio.com",
            projectId: "itsareview-404",
            storageBucket: "itsareview-404.appspot.com",
            messagingSenderId: "252992012119",
            appId: "1:252992012119:web:eb3f8075826bb598324812",
            measurementId: "G-6E6VF8XK8K"
          };
        firebase.initializeApp(firebaseConfig)
    }

    setUsername = async () => {
        if(this.props.user.token){
            await this.setState({username:this.props.user.user.userName})
        }else{
            await this.setState({username:"Guest"})
        }
    }
    
    addNewReview = async (newReview) => {
        await this.setUsername()
        this.props.addReview(newReview, this.state.username,()=>{
            this.setState({des:`/review/${this.props.review.review._id}`},()=>{
                console.log('des ',this.state.des)
                this.setState({redirect:true})
            })
        });
        
    }

    static propTypes = {
        review: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        addReview: PropTypes.func.isRequired
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.des} />
        }

        return(
            <div>
                <NavBar/>
                <Formik
                    /* initial values (use name of input) */
                    initialValues = {{ 
                        rvTitle: "",
                        rvChar: "",
                        rvContent: "",
                        rvImage: null,
                        rvStatus: false,
                        rvSource: 'Dek-D',
                        rvType: 'รักโรแมนติก',
                        rvTag: ""
                    }}
                    /* set validation form */
                    validationSchema = {ReviewSchema}
                    /*set onSubmit function*/
                    
                    onSubmit = { values => {
                        const {rvTitle, rvChar, rvContent, rvImage, rvStatus, rvSource} = values;
                        const rvType = this.state.add_type;
                        const rvTag = this.state.add_tag;
                        uploadImage(rvImage)
                            .then(async res=>{
                                const rvImageUrl = res
                                console.log(
                                    "ชื่อนิยาย : ",rvTitle,
                                    "\nลักษณะตัวละคร : ",rvChar,
                                    "\nรีวิวเนื้อเรื่อง : ", rvContent,
                                    "\nภาพประกอบ :",rvImageUrl,
                                    "\nประเภท : ", rvType, 
                                    "\nแท็ก :", rvTag, 
                                    "\nสถานะ : ", rvStatus,
                                    "\nที่มา :", rvSource
                                )
                                
                                const newReview = {
                                    rvTitle, 
                                    rvChar, 
                                    rvContent,
                                    rvImageUrl,
                                    rvType,
                                    rvTag, 
                                    rvStatus, 
                                    rvSource
                                    
                                }
                                await this.addNewReview(newReview) 
                                                               
                            })
                            .catch(err=>console.log(err))
                    }}

                >
                    {({ values, touched, errors, isSubmitting, setFieldValue}) =>(   
                    <Form>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <h3><a href="/review/id">เขียนรีวิวนิยาย</a></h3>
                                    <h4>มาเขียนรีวิวนิยายที่คุณชอบกันเถอะ</h4>
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
                                    <div className = "box">
                                        <input 
                                            type="file"
                                            name="rvImage"
                                            onChange={e=>{
                                                setFieldValue("rvImage",e.currentTarget.files[0]);
                                                this.setState({
                                                    //add_image: [...this.state.add_image, e.currentTarget.files[0]]
                                                    add_image: e.currentTarget.files[0]
                                                })
                                            }}
                                        />
                                        {
                                            // this.state.add_image.map((image,i)=>{
                                            //     return <Thumb key={i} file={image} /> 
                                            // })
                                            <Thumb file={values.rvImage} />
                                        }
                                   </div>
                                    <div className="title">เพิ่มหมวดหมู่<span className="limit">   *ไม่เกิน3หมวดหมู่</span></div>
                                    <div className = "dropbox">
                                        <Field 
                                            component="select" 
                                            id ="select"
                                            name="rvType"
                                        >
                                            <option value="รักโรแมนติก">รักโรแมนติก</option>
                                            <option value="ดราม่า">ดราม่า</option>
                                            <option value="แฟนตาซี">แฟนตาซี</option>
                                            <option value="สืบสวน/ฆาตกรรม">สืบสวน/ฆาตกรรม</option>
                                            <option value="แฟนฟิค">แฟนฟิค</option>  
                                        </Field>
                                        <Field
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
                                                        &nbsp;x&nbsp;
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
                                            className={`${touched.rvTag && errors.rvTag ? "is-invalid":""}`}
                                        />
                                        <ErrorMessage 
                                            component="div"
                                            name="rvTag"
                                            className="invalid-feedback"
                                        />
                                        <Field
                                            type="button"
                                            value="เพิ่ม"
                                            disabled={touched.rvTag && errors.rvTag? true: false}
                                            id="add_tag"
                                            onClick={()=>{
                                                this.setState({
                                                    add_tag: [...this.state.add_tag, values.rvTag]
                                                })
                                                values.rvTag='';
                                            }}
                                        />
                                    <div className="show_add_tag">
                                        {this.state.add_tag.map((tag,index)=>{
                                            return ( 
                                                <span key={index}><strong>{tag}</strong>
                                                    <span onClick={()=>{
                                                        this.setState({
                                                            add_tag: this.state.add_tag.filter(t => t != tag)}
                                                        )}}
                                                    >
                                                        &nbsp;x&nbsp;
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
                                                        <span className="status">จบแล้ว</span>
                                                </div>
                                                <div>
                                                    <Field 
                                                        id="other" 
                                                        type="radio" 
                                                        name="rvStatus" 
                                                        ng-model="content" 
                                                        value="false"
                                                    />
                                                    
                                                        <span className="status">ยังไม่จบ</span>
                                                    
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

export default connect(mapStateToProps,{ addReview })(ReviewFormPage);