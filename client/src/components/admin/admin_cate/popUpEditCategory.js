import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import './popUpCategory.css';
import axios from 'axios';

export default class popUpEditCategory extends Component {
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

  componentDidMount() {
    axios.get('http://localhost:4000/admin/categories/edit/'+this.props.match.params.id)
      .then(response => {
        this.setState({
        categoryName: response.data.categoryName,
        categoryIcon: response.data.categoryIcon
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:4000/admin/categories/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            categories: response.data.map(category => category.categoryName),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

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
      categoryIcon: this.state.categoryIcon,
    }

    console.log(category);

    axios.post('http://localhost:4000/admin/categories/update/' + this.props.match.params.id, category)
      .then(res => console.log(res.data));

    window.location = '/admin/categories';
  }

  render() {
    return (
    <div>
      <form onSubmit={this.onSubmit}>
        <Modal animation={false}
            {...this.props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                <p className="popUpTopic"><i className='fas fa-plus-circle' />  แก้ไขหมวดหมู่</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <label className="cateName">ชื่อหมวดหมู่: </label>
                <input  type="text"
                    required
                    className="cateName"
                    placeholder='ชื่อหมวดหมู่' 
                    value={this.state.categoryName}
                    onChange={this.onChangeCategoryName}
                    />

                <label className="cateName">เพิ่มไอคอน</label>
                <input  type="text"
                    required
                    className="cateName"
                    placeholder='ไอคอนประจำหมวดหมู่'
                    value={this.state.categoryIcon}
                    onChange={this.onChangeCategoryIcon}
                    />
            </Modal.Body>
            
            <Modal.Footer>
                <input type="submit" value="Edit Category" className="btn btn-primary" />
            </Modal.Footer>
            </Modal>
      </form>
    </div>
    )
  }
}