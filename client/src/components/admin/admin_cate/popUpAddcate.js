import React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import './popUpCategory.css';
import axios from 'axios';
 


export default class PopUpAddCategory extends Component {

     constructor(props) {
        super(props);

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onChangeCategoryIcon = this.onChangeCategoryIcon.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
        categoryName: '',
        categoryIcon: '',
        categories: []
        }
    }

    onChangeCategoryName(e) {
        this.setState({
        categoryName: e.target.value
        })
    }

    onChangeCategoryIcon(e) {
        this.setState({
        categoryIcon: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const category = {
        categoryName: this.state.categoryName,
        categoryIcon: this.state.categoryIcon
        }

        console.log(category);

        axios.post('http://localhost:4000/admin/categories/add', category)
        .then(res => 
            console.log(res.data))
        .catch((error) => {
            console.log(error);
        })
        
        this.setState({
            categoryName: '',
            categoryIcon: ''
        })

        window.location = '/admin/categories';
            
    }

       
    render() {

        return (
            
            <div>
                <Form action="/add" method="post" >
                    <Modal animation={false}
                        {...this.props}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                            <p className="popUpTopic"><i className='fas fa-plus-circle' />  เพิ่มหมวดหมู่</p>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <label className="cateName">ชื่อหมวดหมู่</label>
                            <input required
                                type="text"
                                className="cateName"
                                value={this.state.categoryName || ''}  
                                placeholder='ชื่อหมวดหมู่' 
                                onChange={this.onChangeCategoryName} />

                            <label className="cateName">เพิ่มไอคอน</label>
                            <input required
                                type="text" 
                                className='cateName'
                                value={this.state.categoryIcon || ''}
                                placeholder='ไอคอนประจำหมวดหมู่'
                                onChange={this.onChangeCategoryIcon} />
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='modalBtn success' type="submit" onClick={this.onSubmit} >ยืนยัน</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </div>
        )
    }
}
