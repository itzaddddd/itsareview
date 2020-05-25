import React,{useState, useEffect} from 'react';
import './Typebar.css';
import axios from 'axios'
import { WaveLoading } from 'react-loadingg'
function Typebar(){
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('/admin/categories')
        .then(res=>setCategories(res.data));
    }, [])
    

    return(
        <div>
            <center>
            <div className="choosetypepopup">
                
                {categories.map(category=>{
                    return(
                        <span key={category._id}>
                            <a href={`/review/category?category=${category.categoryName}`}>
                                <i className={`${category.categoryIcon} icon`} ></i>
                                <br></br>
                                <p className="typeNameIcon">{category.categoryName}</p>
                            </a>
                        </span>
                    )
                })
                }
            {/*<a href="#addmore"><i className="fas fa-angle-double-right" id = "icon"></i><p className="typeNameIcon">เพิ่มเติม</p></a>*/}
                
                
            </div>
            </center>
            </div>         
            );
    }
    export default Typebar;