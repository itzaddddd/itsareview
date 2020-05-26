import React, {Component} from 'react';
import './search.css';
import NavBar from '../../Bar/NavBar/NavBar';
import {Redirect} from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik' // lib for creating form
import * as yup from 'yup' // lib for validation

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchReview } from '../../../Redux/Actions/searchAction'

import firebase from 'firebase'
import axios from 'axios'

/* define form validation */
const ReviewSchema = yup.object().shape({
    rvTag: yup.string()
        .matches(/#[^\s!@#$%^&*()=+./,\[{\]};:'"?><]+$/
        ,"รูปแบบแฮขแท็กไม่ถูกต้อง กรุณาเริ่มด้วย # ห้ามเว้นวรรค และห้ามใส่อักขระพิเศษ"),
    rvStatus: yup.boolean(),
    rvSource: yup.string()

})

const mapStateToProps = state => {
    return {
        user: state.user,
        review: state.review,
        search: state.search
    }
}


class ReviewFormPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            add_type: [],
            add_tag: [],
            add_image: [],
            type_disabled: false,
            tag_disabled: false,
            categories: []
        };
    }


    static propTypes = {
        review: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        search: PropTypes.object.isRequired,
        searchReview: PropTypes.func.isRequired
    }

    componentDidMount(){
        /* get categories from database */
        axios.get('http://localhost:4000/admin/categories/')
        .then(res => {
            this.setState({categories: res.data})
        })
    }
    
    componentWillReceiveProps(nextProps){
        // if search completed, redirect to show result 
        if((nextProps.search.search_result !== this.props.search.search_result)){
            this.props.history.push(`/search/result${nextProps.search.query}`)
        }
    }

    componentDidUpdate(prevProps, prevState){

        // set add type disabled, limit 3 types
        if(prevState.add_type !== this.state.add_type){
            if(this.state.add_type.length >= 3){
                this.setState({type_disabled:true})
            }else{
                this.setState({type_disabled:false})
            }
        }
        // set add tag disabled, limit 3 tags
        if(prevState.add_tag !== this.state.add_tag){
            if(this.state.add_tag.length >= 3){
                this.setState({tag_disabled:true})
            }else{
                this.setState({tag_disabled:false})
            }
        }
    }
    render(){        
        return(
            <div>
                <NavBar/>
                <Formik
                    /* initial values (use name of input) */
                    initialValues = {{ 
                        rvTitle: "",
                        // rvChar: "",
                        rvContent: "",
                        rvStatus: "",
                        rvSource: "",
                        rvType: "",
                        rvTag: ""
                    }}
                    /* set validation form */
                    validationSchema = {ReviewSchema}
                    /*set onSubmit function*/
                    onSubmit = { values => {
                        let {rvTitle, /*rvChar,*/ rvContent, rvSource, rvStatus} = values
                        let rvType = this.state.add_type;
                        let rvTag = this.state.add_tag

                        let search_values = {
                            rvTitle,
                            /*rvChar,*/
                            rvContent,
                            rvSource,
                            rvStatus,
                            rvType,
                            rvTag
                        }

                        //console.log(search_values)
                        this.props.searchReview(search_values)
                    }}

                >
                    {({ values, touched, errors, isSubmitting, setFieldValue}) =>(   
                    <Form>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <h3>ค้นหารีวิวนิยาย</h3>
                                    <div className="title">หาจากชื่อเรื่อง</div>
                                        <Field  
                                            type="text" 
                                            name="rvTitle" 
                                            placeholder="อยากได้ชื่อเรื่องที่มีคำนี้"
                                            className={`${touched.rvTitle && errors.rvTitle ? "is-invalid":""}`}
                                        />
                                    {/*<div className="title">หาจากตัวละคร</div>
                                        <Field 
                                            type="text" 
                                            name="rvChar" 
                                            placeholder="ชอบ(ตัวละคร)แบบนี้"
                                            className={`${touched.rvChar && errors.rvChar ? "is-invalid":""}`}
                                        />*/}
                                    {/*<div className="title">หาจากเนื้อเรื่อง</div>
                                        <Field 
                                            component="textarea" 
                                            id="story" 
                                            name="rvContent" 
                                            placeholder="อยากอ่านเนื้อเรื่องแบบนี้"
                                            className={`${touched.rvContent && errors.rvContent ? "is-invalid":""}`}
                                        />*/}
                                    
                                    <div className="title">หาจากหมวดหมู่<span className="limit">   *ไม่เกิน 3 หมวดหมู่</span></div>
                                    <div className = "dropbox">
                                        <Field 
                                            component="select" 
                                            id ="select"
                                            name="rvType"
                                        >
                                            <option value='' key="all">
                                                ทั้งหมด
                                            </option>
                                            {this.state.categories.map(category => 
                                                <option value={category.categoryName} key={category._id}>
                                                    {category.categoryName}
                                                </option>)
                                            }
                                        </Field>
                                        <Field
                                            type="button"
                                            value="เพิ่ม"
                                            disabled={this.state.type_disabled}  
                                            id="add_type"
                                            onClick={()=>{
                                                if(!this.state.add_type.includes(values.rvType)){
                                                    this.setState({
                                                        add_type: [...this.state.add_type, values.rvType]
                                                    })
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="show_add_type">
                                        
                                        {this.state.add_type.map((type,index)=>{
                                            return ( 
                                                <span className="sub_type" key={index}><strong>{type}</strong>
                                                    <span onClick={()=>{
                                                        this.setState({
                                                            add_type: this.state.add_type.filter(t => t != type)}
                                                    )}}>
                                                        &nbsp;x&nbsp;
                                                    </span>
                                                </span>
                                            )
                                        })}
                                    </div>
                                    
                                    <div className="title">หาจากแท็ก<span className="limit">   *ไม่เกิน 3 แท็ก</span></div>
                                        <Field
                                            type="text"
                                            name="rvTag"
                                            id="rvTag"
                                            className={`${touched.rvTag && errors.rvTag ? "is-invalid":""}`}
                                        />
                                        
                                        <Field
                                            type="button"
                                            value="เพิ่ม"
                                            disabled={touched.rvTag && (errors.rvTag || this.state.tag_disabled)}
                                            id="add_tag"
                                            onClick={()=>{
                                                // check repeat before add
                                                if(!this.state.add_tag.includes(values.rvTag) && values.rvTag!=''){
                                                    this.setState({
                                                        add_tag: [...this.state.add_tag, values.rvTag]
                                                    })
                                                    values.rvTag='';
                                                }
                                            }}
                                        />
                                        <ErrorMessage 
                                            component="div"
                                            name="rvTag"
                                            className="invalid-feedback"
                                        />
                                    <div className="show_add_tag">
                                        {this.state.add_tag.map((tag,index)=>{
                                            return ( 
                                                <span className="sub_tag" key={index}><strong>{tag}</strong>
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
                                    <div className="title">จบหรือยัง</div>
                                        <div className="wrap">
                                            
                                                <div>
                                                    <Field 
                                                        id="first" 
                                                        type="radio" 
                                                        name="rvStatus" 
                                                        ng-model="content" 
                                                        value="true"
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
                                                <div>
                                                    <Field 
                                                        id="all" 
                                                        type="radio" 
                                                        name="rvStatus" 
                                                        ng-model="content" 
                                                        value=""
                                                    />
                                                    
                                                        <span className="status">ทั้งหมด</span>
                                                    
                                                </div>   
                                        </div>
                                    <div className="title">หาจากที่มาของนิยาย</div>
                                    <div className = "dropbox">
                                        <Field 
                                            component="select" 
                                            id="country" 
                                            name="rvSource"
                                        >
                                            <option value="">ทั้งหมด</option>
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

export default connect(mapStateToProps,{ searchReview })(ReviewFormPage);