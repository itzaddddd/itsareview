import React , {Component } from 'react';
import { Link } from 'react-router-dom';
import './adcate.css';
import Table from 'react-bootstrap/Table';
import PopUpAddCategory from './popUpAddcate';
import Navbar from "../admin_navbar/navbar";
import axios from 'axios';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

class Admin_cate extends Component {

    constructor(props) {
        super(props);

        this.deleteCategory = this.deleteCategory.bind(this);

        this.state = {categories: [{}], PopUpAddCategory : false, show : false}

    }

    /* redirect to home if not admin */
    componentDidMount() {
        axios.get('http://localhost:4000/admin/categories/')
        .then(response => {
            this.setState({ categories: response.data })
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    componentWillReceiveProps(nextProps){
        if((nextProps.user !== this.props.user) && nextProps.user.user){
            if(!nextProps.user.user.isAdmin){
                this.props.history.push('/')
            }
        }
    }

    deleteCategory(id) {
        axios.delete('http://localhost:4000/admin/categories/'+id)
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
        this.PopUpClose = () => this.setState({PopUpAddCategory:false});
        
        
        if(this.props.user.user){
            return (
                <div>

                    <Navbar/>

                    <div className='topicPage'>
                        <p className="topicName">จัดการหมวดหมู่</p>
                        <button className="addCate" onClick={()=> this.setState({PopUpAddCategory: true})}>เพิ่มหมวดหมู่</button>
                        <PopUpAddCategory show={this.state.PopUpAddCategory} onHide={this.PopUpClose} />
                    </div>

                    

                    <div className ="adminTable">
                        <Table hover >
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
        }else{return ''}
    }
    
}

const Category = props => (

    <tr>
        <td>{props.category._id}</td>
        <td>{props.category.categoryName}</td>
        <td>{props.category.categoryIcon}</td>
        <td>
            {/* <button className="addCate" onClick={()=> this.popUpEditCategory}>แก้ไขหมวดหมู่</button> */}
            {/* <popUpEditCategory show={this.state.popUpEditCategory} onHide={this.PopUpClose()}/> */}
        
        <Link className="editCategory" to={"/admin/categories/update/"+props.category._id} categoryName={props.category.categoryName} categoryIcon={props.category.categoryIcon}>แก้ไข </Link>
         | <a className="delCategory" onClick={() => { if(window.confirm('คุณต้องการลบหมวดหมู่ ' + props.category.categoryName)){props.deleteCategory(props.category._id)};}}>ลบ</a>
        </td>
    </tr>
)

export default connect(mapStateToProps,null)(Admin_cate);