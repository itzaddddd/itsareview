import React, { Component } from 'react';
import axios from 'axios';
import './editcate.css';
import Navbar from "../admin_navbar/navbar";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onChangeCategoryIcon = this.onChangeCategoryIcon.bind(this);
    this.onSubmit = this.onSubmit.bind(this)

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

    axios.post('http://localhost:4000/admin/categories/update/' + this.props.match.params.id, category)
      .then(res => console.log(res.data));

    window.location = '/admin/categories';
  }

  render() {
    return (
    <div>

      <Navbar />

      <div className="editbox">
        <div className='topicPage'>
          <p className="topicName">แก้ไขหมวดหมู่</p>
        </div>
        <form onSubmit={this.onSubmit} action="/update" method="post">
          <div className="form-edit-group"> 
            <label className="editCateName">ชื่อหมวดหมู่: </label>
              <input  type="text"
                  required
                  className="editCateName"
                  placeholder='ชื่อหมวดหมู่' 
                  value={this.state.categoryName}
                  onChange={this.onChangeCategoryName}
                  />

            <label className="editCateName">เพิ่มไอคอน</label>
              <input  type="text"
                  required
                  className="editCateName"
                  placeholder='ไอคอนประจำหมวดหมู่'
                  value={this.state.categoryIcon}
                  onChange={this.onChangeCategoryIcon}
                  />
          </div>

          <div id="edit2">
            <button className="save-edit">ยืนยัน</button>
            <button className="unsave-edit" onClick={()=>this.props.history.goBack()}>ยกเลิก</button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}