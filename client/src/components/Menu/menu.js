import React, {Component} from 'react';
import './menu.css';



class Menu extends Component{
    render(){
        return(
            <div>
                <div class="main-navigation">
                    <nav>
                        <ul>
                            <li><a href="#"><i class="fas fa-home fa-2x"></i></a><p>หน้าหลัก</p></li>
                            <li><a href="#"><i class="far fa-comments fa-2x"></i></a><p>กระทู้</p></li>
                            <li><a href="#"><i class="far fa-edit fa-2x"></i></a><p>รีวิวนิยาย</p></li>
                            <li><a href="#"><i class="far fa-heart fa-2x"></i></a><p>รายการโปรด</p></li>
                            <li><a href="#"><i class="far fa-user fa-2x"></i></a><p>โปรไฟล์</p></li>
                        </ul>
                    </nav>
                </div> 
            </div>      
        )    
    }
    
}
export default Menu;