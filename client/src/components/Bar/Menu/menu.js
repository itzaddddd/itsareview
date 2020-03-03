import React, {Component} from 'react';
import './menu.css';
class Menu extends Component{
    render(){
        return(
            <div>
                <div className="foot-main-navigation">
                    <nav cladss="fooot">
                        <ul className="foot">
                            {/* comment navbar because show only home and user and other will create in next sprint */}
                            {/* add class menu for creating css*/}
                            <a className="menuButton" href="/review"><li><i className="menu fas fa-home fa-2x"></i><p>หน้าหลัก</p></li></a>
                            <a className="menuButton" href="/board"><li><i className="menu far fa-comments fa-2x"></i><p>กระทู้</p></li></a>
                            <a className="menuButton" href="/review/create"><li><i className="menu far fa-edit fa-2x"></i><p>รีวิวนิยาย</p></li></a>
                            {/* <a className="menuButton" href="/review"><li><i className="menu far fa-heart fa-2x"></i><p>รายการโปรด</p></li></a> */}
                            <a className="menuButton" href="/login"><li><i className="menu far fa-user fa-2x"></i><p>โปรไฟล์</p></li></a>
                        </ul>
                    </nav>
                </div> 
            </div>      
        )    
    }
    
}
export default Menu;