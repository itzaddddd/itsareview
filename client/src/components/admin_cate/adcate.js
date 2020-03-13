import React , {Component } from 'react';
import { Link } from 'react-router-dom';
import './adcate.css';
import Table from 'react-bootstrap/Table';
import PopUpAddCategory from './popUpAddcate';
import Navbar from "../admin_navbar/navbar";
import axios from 'axios';

const Category = props => (
  <tr>
    <td>{props.category._id}</td>
    <td>{props.category.categoryName}</td>
    <td>{props.category.categoryIcon}</td>
    <td>
      <Link to={"/update/"+props.category._id}>แก้ไข</Link> | <button confirm='คุณต้องการลบหมวดหมู่นี้' 
      onClick={() => { props.deleteCategory(props.category._id) }}>ลบ</button>
    </td>
  </tr>
)

class Admin_cate extends Component {

    constructor(props) {
        super(props);

        this.deleteCategory = this.deleteCategory.bind(this);
        this.categoryList = this.categoryList.bind(this);

        this.state = {categories: {category : []}};
        this.state = {PopUpAddCategory : false}

    }

    // state = {
    //     seen: false
    // };

    componentDidMount() {
        axios.get('http://localhost:4000/admin/categories/')
        .then(response => {
            this.setState({ categories: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    

    deleteCategory(id) {
       
        axios.delete('http://localhost:4000/admin/categories/' + id)
            .then(response => { console.log(response.data)});

        this.setState({
            categories: this.state.categories.filter(el => el._id !== id)
          })

    }

    categoryList() {
        return this.state.categories.map(currentcategory => {
            return <Category category={currentcategory} deleteCategory={this.deleteCategory} key={currentcategory._id}/>;
        })
    }

    render() {

        let PopUpClose =() => this.setState({PopUpAddCategory:false});

        return (
            <div>
                <Navbar/>
                <div className='topicPage'>
                    <p className="topicName">จัดการหมวดหมู่</p>
                    <button className="addCate" onClick={()=> this.setState({PopUpAddCategory: true})}>เพิ่มหมวดหมู่</button>
                    <PopUpAddCategory show={this.state.PopUpAddCategory} onHide={PopUpClose} />
                </div>

                

                <div className ="adminTable">
                    <Table hover>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Category ID</th>
                                <th>ชื่อหมวดหมู่</th>
                                <th>ไอคอน</th>
                                <th>จัดการ</th>
                            </tr>
                        </thead>
                        <tbody >
                            { this.categoryList() }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
    
}
export default Admin_cate;
