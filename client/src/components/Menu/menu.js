import React, {Component} from 'react';
import './menu.css';
class Menu extends Component{
    render(){
        return(
            <div>
                <div className="main-navigation">
                    <nav>
                        <ul>
                            {/* comment navbar because show only home and user and other will create in next sprint */}
                            {/* add class menu for creating css*/}
                            <a href="/review/create"><li><i className="menu fas fa-home fa-2x"></i><p>หน้าหลัก</p></li></a>
                            {/*<li><i className="menu far fa-comments fa-2x"></i><p>กระทู้</p></li>*/}
                            {/*<a href="#"><li><i className="menu far fa-edit fa-2x"></i><p>รีวิวนิยาย</p></li></a> */}
                            {/*<li><i className="menu far fa-heart fa-2x"></i><p>รายการโปรด</p></li>*/}
                            <a href="/login"><li><i className="menu far fa-user fa-2x"></i><p>โปรไฟล์</p></li></a>
                        </ul>
                    </nav>
                </div> 
            </div>      
        )    
    }
    
}
export default Menu;