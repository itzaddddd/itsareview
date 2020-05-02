import React from 'react';
import './Typebar.css';
import axios from 'axios'
import {useState, useEffect} from 'react'

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
                        <a href={`/review/category?category=${category.categoryName}`}>
                            <i className={category.categoryIcon} id = "icon"></i>
                            <br></br><p className="typeNameIcon">{category.categoryName}</p>
                        </a>
                    )
                })}
                
                <a href="#addmore"><i className="fas fa-angle-double-right" id = "icon"></i><p className="typeNameIcon">เพิ่มเติม</p></a>
            </div>
            </center>
            </div>         
            );
    }
    export default Typebar;